import React from 'react';
import './Topbar.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__wrap">
                <div className="topbar__col-1">
                    <span className="logo">Papa React</span>
                </div>
                <div className="topbar__col-2">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconbadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className="topIconbadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>

                    <img src="https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
