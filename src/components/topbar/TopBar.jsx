import React from 'react'
import './topbar.css'
import {NotificationsNone, Settings, Language} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        <Link to='/' className="topbarLink" style={{color: 'darkblue', textdecoration: 'none'}}>
                            nghiaAdmin
                        </Link>
                    </span>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className = "topIconBagde">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Language/>
                        <span className = "topIconBagde">2</span>
                    </div>


                    <div className="topbarIconContainer">
                        <Settings/>
                        {/* <span className = "topIconBagde">2</span> */}
                    </div>

                    <img src="https://i.pinimg.com/736x/0d/74/08/0d7408886db088edf667f52c7a06caca.jpg" alt="" className="topAvatar" />
                </div>

            </div>
        </div>
    )
}
