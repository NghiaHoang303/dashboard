import { CalendarToday, LocationSearching, MailOutline, PersonOutline, PhoneIphone } from '@material-ui/icons'
import { Upload } from '@mui/icons-material'

import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <div className="user">
            <div className="userContainer">
                <h2 className='userContainerTitle'>Edit User</h2>
                <Link to="/newUser"> 
                    <button className='userBtnCreate'>Create</button>
                </Link>
            </div>
            <div className= "userInfoCommon">
                <div className="userInfo">
                    <div className="userInfoIntro">
                        <img src="https://image-us.24h.com.vn/upload/3-2021/images/2021-08-14/1-1628937802-189-width650height800.jpg" alt=""
                            className="userInfoAvatar"
                        />
                        <div className="userInfoStaff">
                            <div className="userInfoName">
                                Nghia Hoang
                            </div>
                            <div className="userInfoPosition">
                                Software Engineer
                            </div>
                        </div>
                    </div>
                    
                    <div className="userInfoAccountDetail">
                        <h3 className="userInfoTitle">Account Details</h3>
                        <div className="userInfoAccNameAndBirth">
                            <span className="userInfoAccountNickname">
                                <PersonOutline className="userInfoAccountIcon"/>
                                NghiaHoang303
                            </span>
                            <span className="userInfoAccountBirth">
                                <CalendarToday className="userInfoAccountIcon"/>
                                30.03.1998
                            </span>
                        </div>
                    </div>

                    <div className="userInfoContactDetail">
                        <h3 className="userInfoTitle">Account Details</h3>
                        <span className="userInfoContactPhone">
                            <PhoneIphone className="userInfoAccountIcon"/>
                            0988.090.489
                        </span>
                        <span className="userInfoContactEmail">
                            <MailOutline className="userInfoAccountIcon"/>
                            nghiahoangit98@gmail.com
                        </span>
                        <span className="userInfoContactCountry">
                            <LocationSearching className="userInfoAccountIcon"/>
                            Quang Tri | Viet Nam
                        </span>
                    </div>  
                </div>

                <div className="userUpdate">
                    <form action="" className="formUserUpdate">
                        <h3 className="formTitle">Edit</h3>
                        <div className="formGroup">
                            <label className="formGroupTitle">User Name</label>
                            <input type="text" className="formGroupInput" placeholder="Nghia Hoang"></input>
                        </div>
                        <div className="formGroup">
                            <label className="formGroupTitle">Full Name</label>
                            <input type="text" className="formGroupInput" placeholder="Hoang Trung Nghia"></input>
                        </div>
                        <div className="formGroup">
                            <label className="formGroupTitle">Email Name</label>
                            <input type="text" className="formGroupInput" placeholder="nghiahoangit98@gmail.com"></input>
                        </div>
                        <div className="formGroup">
                            <label className="formGroupTitle">Phone</label>
                            <input type="text" className="formGroupInput" placeholder= '84.988.090.489'></input>
                        </div>
                        <div className="formGroup">
                            <label className="formGroupTitle">Address</label>
                            <input type="text" className="formGroupInput" placeholder='Quang Tri | Viet Nam '></input>
                        </div>
                    </form>

                    <div className="formGroupUpdate">
                        <img src="https://image-us.24h.com.vn/upload/3-2021/images/2021-08-14/1-1628937802-189-width650height800.jpg" alt="" 
                            className="formGroupUpdateImage"
                        />
                        <label htmlFor="uploadImage">
                            <Upload className='uploadFileBtn'/> 
                        </label>
                        <input type="file" id="uploadImage" 
                            style={{display : 'none'}}
                        ></input>
                        <button className="btnUpdate" >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
