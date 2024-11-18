import React, { useState } from "react";
import NotificationCardDelete from "./NotificationCardDelete";

const NotificationList = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, title: "title1", content: "cotent1content1content1content1content1content1content1content1ccontent1content1", timestamp: "1111.11.11" },
        { id: 2, title: "title2", content: "content2", timestamp: "2222.22.22" },
        { id: 3, title: "title3", content: "content3", timestamp: "3333.33.33" },
        { id: 4, title: "title4", content: "content4", timestamp: "4444.44.44" },
        { id: 5, title: "title5", content: "content5", timestamp: "5555.55.55" },
    ]);

    return (
        <div className="column">
            {notifications.map(notification => (
                <NotificationCardDelete 
                    key={notification.id}
                    title={notification.title} 
                    content={notification.content} 
                    timestamp={notification.timestamp}
                />
            ))}
        </div>
    );
};

export default NotificationList;
