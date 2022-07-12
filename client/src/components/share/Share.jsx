import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
                <input 
                className='shareInput'
                placeholder='Whats in your mind?'
                type="text" />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon className='shareIcon' htmlColor = "tomato"/>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <LocalOfferIcon  className='shareIcon' htmlColor = "blue"/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon className='shareIcon' htmlColor = "green"/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon className='shareIcon' htmlColor = "goldenrod"/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                    
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}
