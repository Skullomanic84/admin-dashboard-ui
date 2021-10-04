import React from 'react';
import './Topbar.css';
import {NotificationsNoneIcon } from '@mui/icons-material';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__wrap">
                <div className="topbar__col-1">
                    <span className="logo">Papa React</span>
                </div>
                <div className="topbar__col-2">
                    <div className="topbar__icons">
                        <NotificationsNoneIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
