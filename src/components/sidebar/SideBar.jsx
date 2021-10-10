import React from 'react'
import './sidebar.css'
import {LineStyle, Timeline, TrendingUp,PersonOutline,
    Storefront, AttachMoney, Assessment, Report, MailOutline, DynamicFeed,
    ChatBubbleOutline, WorkOutline,

} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {firebase} from '../../config/firebase-config'

export default function SideBar() {
    const handleLogout = () => {
        firebase.auth().signOut();
    }
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Dashboard
                    </div>
                        <ul className="sidebarList">
                            <li className="sidebarItem active">
                                <LineStyle className="sidebarIcon "/> 
                                <Link to="/" className="sidebarItemLink">
                                    Home
                                </Link>
                            </li>

                            <li className="sidebarItem">
                                <Timeline className="sidebarIcon"/> analytics
                            </li>

                            <li className="sidebarItem">
                                <TrendingUp className="sidebarIcon"/> Sales
                            </li>
                        </ul>
                </div>

                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Quick Menu
                    </div>
                        <ul className="sidebarList">
                            <li className="sidebarItem ">
                                <PersonOutline className="sidebarIcon "/> 
                                <Link to="/user" className="sidebarItemLink">
                                    Users
                                </Link>
                            </li>

                            <li className="sidebarItem">
                                <Storefront className="sidebarIcon"/>
                                <Link to='/product'  className="sidebarItemLink">
                                    Products
                                </Link>
                            </li>

                            <li className="sidebarItem">
                                <AttachMoney className="sidebarIcon"/> Transactions
                            </li>

                            <li className="sidebarItem">
                                <Assessment className="sidebarIcon"/> Reports
                            </li>
                        </ul>
                </div>

                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Notifications
                    </div>
                        <ul className="sidebarList">
                            <li className="sidebarItem ">
                                <MailOutline className="sidebarIcon "/> Mail
                            </li>

                            <li className="sidebarItem">
                                <DynamicFeed className="sidebarIcon"/> Feedback
                            </li>

                            <li className="sidebarItem">
                                <ChatBubbleOutline className="sidebarIcon"/> Messages
                            </li>
                        </ul>
                </div>

                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Staff
                    </div>
                        <ul className="sidebarList">
                            <li className="sidebarItem ">
                                <WorkOutline className="sidebarIcon "/> Manage
                            </li>

                            <li className="sidebarItem">
                                <Timeline className="sidebarIcon"/> Analytics
                            </li>

                            <li className="sidebarItem">
                                <Report className="sidebarIcon"/> Reports
                            </li>
                        </ul>
                </div>
                <div>
                    <button onClick = {handleLogout} className='btnLogout'>
                        Logout    
                    </button>    
                </div>  
            </div>
        </div>
    )
}
