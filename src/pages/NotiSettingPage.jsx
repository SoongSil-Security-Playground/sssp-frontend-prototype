import React from "react";
import '../styles/NotiSettingPage.css';
import NotificationForm from "../components/NotificationForm";
import NotificationList from "../components/NotificationList";

const NotiSettingPage = () => {
    return(
        <div className="notification-settings">
            <div className="settings-header">
                <h1>Notifications</h1>
            </div>
            <div className="settings-contents">
                <div className="row">
                    <NotificationForm/>
                    <NotificationList/>
                </div>
            </div>
        </div>
    )
}

export default NotiSettingPage;