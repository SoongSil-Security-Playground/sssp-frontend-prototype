import React, {useState} from "react";
import NotificationInfoCard from "../components/NotificationInfoCard";
import NotificationForm from "../components/NotificationForm";

function NotificationsSettingsPage() {

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
                <h1 style={headerTextStyle}>Notifications</h1>
            </div>
                <div style={contentContatinerStyle}>
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
    );
}

export default NotificationsSettingsPage;


const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    margin: 0,
};

const titleContainerStyle = {
    marginTop: '12vh',
    textAlign: 'center',
    padding: '20px 0',
};

const headerTextStyle = {
    color: 'var(--dark-blue)',
    marginBottom: '2px',
};

const contentContatinerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
};