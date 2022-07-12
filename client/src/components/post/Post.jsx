import React, { useState, useEffect } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'

// import { Users } from '../../dummyData'




export default function Post({ post }) {
    
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`users/${post.userId}`);
          setUser(res.data);
    
        }
        fetchUser();
    
      },[])
    

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={user.profilePicture} alt="" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandler} />
                        <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
