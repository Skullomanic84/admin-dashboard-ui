import React from 'react';
import './Sidebar.css';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GroupAddIcon from '@material-ui/icons//GroupAdd';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import FeedbackIcon from '@material-ui/icons/Feedback';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ReportIcon from '@material-ui/icons/Report';






function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__wrap">
                
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">
                        Dashboard
                    </h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <LineStyleIcon className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebar__listItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebar__listItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebar__menu">
                    <h3 className="sidebar__title">
                        Quick Menu
                    </h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <GroupAddIcon className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebar__listItem">
                            <StorefrontIcon className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebar__listItem">
                            <AttachMoneyIcon className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebar__listItem">
                            <BarChartIcon className="sidebarIcon" />
                            Reports
                        </li>
                        <li className="sidebar__listItem">
                            <AccountBalanceIcon className="sidebarIcon" />
                            Accounts
                        </li>
                    </ul>
                </div>

                <div className="sidebar__menu">
                    <h3 className="sidebar__title">
                        Notification
                    </h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <EmailIcon className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebar__listItem">
                            <FeedbackIcon className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebar__listItem">
                            <MessageIcon className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebar__menu">
                    <h3 className="sidebar__title">
                        Human Resource
                    </h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <WorkOutlineIcon className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebar__listItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebar__listItem">
                            <PersonOutlineIcon className="sidebarIcon" />
                            Absentees
                        </li>
                        <li className="sidebar__listItem">
                            <PersonAddIcon className="sidebarIcon" />
                            Staff
                        </li>
                        <li className="sidebar__listItem">
                            <ReportIcon className="sidebarIcon" />
                            Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
