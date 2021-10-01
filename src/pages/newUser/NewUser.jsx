import React from 'react'
import './newUser.css'

export default function NewUser() {
    return (
        <div className="newUser">
            <h2 className="newUserTitle">New User</h2>
            <form className="formNewUser">
               <div className="formNewUserLeft">
                    <div className="formGroup">
                        <label className="formGroupTitle">User Name</label>
                        <input type="text" className="newUserInput" placeholder="Nghia Hoang"></input>
                    </div>
                    <div className="formGroup">
                        <label className="formGroupTitle">Email</label>
                        <input type="text" className="newUserInput" placeholder="nghiahoangit98@gmail.com"></input>
                    </div>
                    <div className="formGroup">
                        <label className="formGroupTitle">Phone</label>
                        <input type="text" className="newUserInput" placeholder="+84 988.090.489"></input>
                    </div>
                    <div className="formGroup">
                        <label className="newUserGenderTitle">Gender</label><br/>
                       <div className="formGroupGender">
                            <div className="newUserGenderGroup">
                                <input type='radio' name='gender' value='male' className="newUserRadio"></input>
                                <label>Male</label>
                            </div>
                            <div className="newUserGenderGroup">
                                <input type='radio' name='gender'  value='female' className="newUserRadio"></input>
                                <label>Female</label>
                            </div>
                            <div className="newUserGenderGroup">
                                <input type='radio' name='gender'  value='other' className="newUserRadio"></input>
                                <label>Other</label>
                            </div>
                       </div>
                    </div>
                    <button type="submit" className= 'newUserBtnCreate'>Create</button>

               </div>


                <div className="formNewUserRight">
                    <div className="formGroup">
                        <label className="formGroupTitle">Full Name</label>
                        <input type="text" className="newUserInput" placeholder="Hoang Trung Nghia"></input>
                    </div>

                    <div className="formGroup">
                        <label className="formGroupTitle">Password</label>
                        <input type="password" className="newUserInput" placeholder="abc123@"></input>
                    </div>
                    <div className="formGroup">
                        <label className="formGroupTitle">Address</label>
                        <input type="text" className="newUserInput" placeholder="Quang Tri | Viet Nam"></input>
                    </div>
                    <div className="formGroup">
                        <label className="formGroupTitle">Active</label>
                        <select className="newUserSelect" >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>
                    </div>  
                </div>
                
            </form>
        </div>
    )
}
