import React, {useState} from "react";
import NotificationInfoCard from "../components/NotificationInfoCard";
import NotificationForm from "../components/NotificationForm";

function NotiSettingPage() {

    const [notifications, setNotifications] = useState([
        { id: 1, title: "title1", content: "This is noti 1's content", timestamp: "2024.11.23"},
        { id: 2, title: "title2", content: "This is noti 2's content", timestamp: "2024.11.23"},
        { id: 3, title: "title3", content: "This is noti 3's content", timestamp: "2024.11.23"},
        { id: 4, title: "title4", content: "This is noti 4's content", timestamp: "2024.11.23"},
        { id: 5, title: "title5", content: "This is noti 5's content", timestamp: "2024.11.23"},
        { id: 6, title: "title6", content: "This is noti 6's content", timestamp: "2024.11.23"},

    ]);

    const handleDelete = (notificationId) => {
        if (window.confirm("정말로 이 공지를 삭제하시겠습니까?")) {
            const updatednotifications = notifications.filter(notification => notification.id !== notificationId);
            setNotifications(updatednotifications);
        }
    };

    return (
        <div style={mainContainerStyle}>
            <div style={titleContainerStyle}>
                <h1>Notifications</h1>
            </div>
                <div style={contentContatinerStyle}>
                    <div style={{padding: '8px', width: '100%'}}>
                        <NotificationForm />
                    </div>
                    <div style={{padding: '8px', width: '100%', overflowY: 'auto', maxHeight: '400px',}}>
                        {notifications.map(notification => (
                            <NotificationInfoCard
                                key={notification.id}
                                title={notification.title}
                                content={notification.content}
                                timestamp={notification.timestamp}
                                onDelete={() => handleDelete(notification.id)}
                            />
                        ))}
                    </div>
                </div>
        </div>
    );
}

export default NotiSettingPage;


const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 80px',
};

const titleContainerStyle = {
    marginTop: '6vh',
    width: '100%',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#006e93',
};

const contentContatinerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
};