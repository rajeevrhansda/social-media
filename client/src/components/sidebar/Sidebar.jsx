import React from 'react'
import './sidebar.css'
import RssFeed from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <ChatIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Chat</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleOutlineIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <PersonOutlineIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <BookmarkBorderIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmark</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutlineIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutlineIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <EventNoteIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <SchoolIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Cources</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show</button>

        <hr className='sidebarHr'/>
        <ul className='sidebarFriendList'>
          {Users.map((u)=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
          
          

        </ul>
      </div>
    </div>
  )
}
