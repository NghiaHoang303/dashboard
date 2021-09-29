import React from 'react'
import './sidebar.css'
import {LineStyle, Timeline, TrendingUp } from '@material-ui/icons';

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Dashboard
                    </div>
                        <ul className="sidebarList">
                            <li className="sidebarItem active">
                                <LineStyle className="sidebarIcon "/> Home
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
                            <li className="sidebarItem active">
                                <LineStyle className="sidebarIcon "/> Home
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
                        Notifications
                    </div>
                        <ul className="sidebarList">
                            <li className="sidebarItem active">
                                <LineStyle className="sidebarIcon "/> Home
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
                        Staff
                    </div>
                        <ul className="sidebarList">
                            <li className="sidebarItem active">
                                <LineStyle className="sidebarIcon "/> Home
                            </li>

                            <li className="sidebarItem">
                                <Timeline className="sidebarIcon"/> analytics
                            </li>

                            <li className="sidebarItem">
                                <TrendingUp className="sidebarIcon"/> Sales
                            </li>
                        </ul>
                </div>  
            </div>
        </div>
    )
}
