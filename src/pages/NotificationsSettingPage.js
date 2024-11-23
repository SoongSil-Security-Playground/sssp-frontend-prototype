import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import NotificationInfoCard from "../components/NotificationInfoCard";

function NotificationsSettingsPage() {

    const [notifications, setNotifications] = useState([
        { id: 1, title: "title1", content: "This is noti 1's content", timestamp: "2024.11.23"},
        { id: 2, title: "title2", content: "This is noti 2's content", timestamp: "2024.11.23"},
        { id: 3, title: "title3", content: "This is noti 3's content", timestamp: "2024.11.23"},
        { id: 4, title: "title4", content: "This is noti 4's content", timestamp: "2024.11.23"},
        { id: 5, title: "title5", content: "This is noti 5's content", timestamp: "2024.11.23"},
        { id: 6, title: "title6", content: "This is noti 6's content", timestamp: "2024.11.23"},

    ]);

    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/admin/notifications/add');
    }

    return (
        <div style={mainContainerStyle}>
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Notifications</h1>
            </div>
                <div style={contentContainerStyle}>
                    <button style={addChallengeButtonStyle} onClick={handleAdd}>
                        +
                    </button>
                    {notifications.map(notification => (
                        <NotificationInfoCard
                            key={notification.id}
                            title={notification.title}
                            content={notification.content}
                            timestamp={notification.timestamp}
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

const contentContainerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50vw',
};

const addChallengeButtonStyle = {
    display: 'flex',
    borderRadius: '16px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s',
    padding: '12px 20px',
    margin: '20px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'var(--dark-blue)',
    color: 'white',
    alignContent: 'center',
    width: '150px',
};