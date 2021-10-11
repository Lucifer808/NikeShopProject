import React from 'react'
import './newUser.css'
function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Username:</label>
                    <input type="text" placeholder="Jon"/>
                </div>
                <div className="newUserItem">
                    <label>Full Name:</label>
                    <input type="text" placeholder="Jon Smith"/>
                </div>
                <div className="newUserItem">
                    <label>Email:</label>
                    <input type="text" placeholder="Jon@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label>Password:</label>
                    <input type="text" placeholder=""/>
                </div>
                <div className="newUserItem">
                    <label>Phone:</label>
                    <input type="text" placeholder="094638941"/>
                </div>
                <div className="newUserItem">
                    <label>Address:</label>
                    <input type="text" placeholder="Can Tho City"/>
                </div>
                <div className="newUserItem">
                    <label>Gender:</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"/>
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
