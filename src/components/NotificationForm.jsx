import React, { useState } from "react";
import '../styles/NotificationForm.css';

const NotificationForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [notificationType, setNotificationType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, notificationType });
    };

    return (
            <div className="notification-container">
                <form onSubmit={handleSubmit} className="notification-form">
                    <div className="input-box">
                        <label>Title</label>
                        <input type="text"
                            placeholder="Type the title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                    </div>
                    <div className="input-box description">
                        <label>Description</label>
                        <textarea 
                            placeholder="Type the description" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                    </div>
                    <div className="option-box">
                        <label>Notification Type</label>
                        <div className="notification-option">
                            <input 
                                type="radio" 
                                id="check-toast" 
                                name="notification" 
                                value="toast" 
                                checked={notificationType === 'toast'} 
                                onChange={(e) => setNotificationType(e.target.value)} 
                            />
                            <div htmlFor="check-toast">Toast</div>
                            
                            <input 
                                type="radio" 
                                id="check-alert" 
                                name="notification" 
                                value="alert" 
                                checked={notificationType === 'alert'} 
                                onChange={(e) => setNotificationType(e.target.value)} 
                            />
                            <div htmlFor="check-alert">Alert</div>
                            
                            <input 
                                type="radio" 
                                id="check-background" 
                                name="notification" 
                                value="background" 
                                checked={notificationType === 'background'} 
                                onChange={(e) => setNotificationType(e.target.value)} 
                            />
                            <div htmlFor="check-background">Background</div>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">submit →</button>
                </form> 
            </div>
    );
};

export default NotificationForm;
