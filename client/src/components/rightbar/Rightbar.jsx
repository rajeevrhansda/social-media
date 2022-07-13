import React, { useEffect } from 'react'
import { useState } from 'react';
import { Users } from '../../dummyData'
import Online from '../online/Online'
import './rightbar.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err)
      }
    }
    getFriends();
  }, [user])

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className="rightbarInfoItem">
            <span className="rightbatInfoKey">City:</span>
            <span className="rightbatInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbatInfoKey">From:</span>
            <span className="rightbatInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbatInfoKey">Relationship:</span>
            <span className="rightbatInfoValue">{
              user.relationship === 1
                ? "Single" : user.relationship === 2
                  ? "Married"
                  : "-"}</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link to={"/profile/"+friend.username}>
              <div className="rightbarFollowing">
                <img
                  className='rightbarFollowingImg'
                  src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"}
                  alt="" />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}

        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rigthbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
