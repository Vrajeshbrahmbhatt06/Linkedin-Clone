import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from "react-redux";
import { auth } from './firebase';
import { logout } from './features/userSlice';
import MenuIcon from '@mui/icons-material/Menu';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

function Header() {


  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>
        

        <div className='header_left'>
          <span className="mobile__header__left">
            <MenuIcon className='menu__Icon' />
          </span>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

            <div className="header_search">
                <SearchIcon />
                <input placeholder='Search' type="text" />
            </div>
        </div>
        <span className="chat__icon">
          <QuestionAnswerOutlinedIcon />
        </span>

        <div className='header_right'>
          
          
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar={true} title="Logout" onClick={logoutOfApp} />
        </div>

    </div>
  );
}

export default Header