import React from "react";
import UserList from "../components/UserList";
import "../styles/UserSettingPage.css";

const UserSettingPage = () => {
    return(
        <div className="users-settings">
            <div className="settings-header">
                <h1>Users</h1>
            </div>
            <div className="settings-contents">
                <UserList/>
            </div>
        </div>
    );
}

export default UserSettingPage;