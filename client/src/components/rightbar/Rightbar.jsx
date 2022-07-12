import React from 'react'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import './rightbar.css'


export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
  const ProfileRightbar = ()=>{
    return(
      <>
      <h4 className='rightbarTitle'>User information</h4>
      <div className='rightbarInfo'>
        <div className="rightbarInfoItem">
          <span className="rightbatInfoKey">City:</span>
          <span className="rightbatInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbatInfoKey">From:</span>
          <span className="rightbatInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbatInfoKey">Relationship:</span>
          <span className="rightbatInfoValue">Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${PF}/person/1.jpeg`} alt="" />
          <span className="rightbarFollowingName">Jhon Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${PF}/person/2.jpeg`} alt="" />
          <span className="rightbarFollowingName">Jhon Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${PF}/person/3.jpeg`} alt="" />
          <span className="rightbarFollowingName">Jhon Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${PF}/person/4.jpeg`} alt="" />
          <span className="rightbarFollowingName">Jhon Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${PF}/person/5.jpeg`} alt="" />
          <span className="rightbarFollowingName">Jhon Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${PF}/person/6.jpeg`} alt="" />
          <span className="rightbarFollowingName">Jhon Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rigthbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
