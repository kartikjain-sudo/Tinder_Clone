import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum"
import "./Header.css";

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="https://thecoco.net/wp-content/uploads/2018/08/tinder-logo.png" alt="Tinder"/>
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header
