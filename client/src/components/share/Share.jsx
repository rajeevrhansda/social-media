import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios'
const myFormData = require('form-data')

export default function Share() {





    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null)

    const submitHandler = async (e) => {
        console.log("FILE",file);
        const ab = file;

        e.preventDefault();
        const newPost = {
          userId: user._id,
          desc: desc.current.value,
        };
        
        if (file) {
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("file", file);
          data.append("name", fileName);
          newPost.img = fileName; 

        
          try {
            console.log("AB",ab)
            await axios.post("/upload", {"name": fileName, "file": ab });
          } catch (err) {
            console.log(err);
          }
        }
        try{

            await axios.post("posts", newPost)
        }catch(err){
            console.log(err);

        }
        
      };
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" />
                    <input
                        className='shareInput'
                        placeholder={'Whats in your mind ' + user.username + " ?"}
                        type="text"
                        ref={desc}
                    />
                </div>
                <hr className='shareHr' />
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMediaIcon className='shareIcon' htmlColor="tomato" />
                            <span className='shareOptionText'>Photo or Video</span>
                            <input style={{ display: "none" }} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <LocalOfferIcon className='shareIcon' htmlColor="blue" />
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon className='shareIcon' htmlColor="green" />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon className='shareIcon' htmlColor="goldenrod" />
                            <span className='shareOptionText'>Feelings</span>
                        </div>

                    </div>
                    <button className='shareButton' type='submit'>Share</button>
                </form>
            </div>
        </div>
    )
}
