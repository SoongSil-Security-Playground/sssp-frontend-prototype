import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NotificationForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [notificationType, setNotificationType] = useState('');

    const [isHovered, setIsHovered] = useState(false);

    const handleSubmitClick = (e) => {
        e.preventDefault();
        navigate('/NotiSettingPage');
    };

    return (
        <div style={mainContainerStyle}>
            <form style={formContainerStyle} onSubmit={handleSubmitClick}>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={inputStyle}
                    />
                </div>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={textareaStyle}
                    ></textarea>
                </div>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>Notification Type</label>
                    <div style={rowFormFieldStyle}>
                        <input 
                            type="radio" 
                            id="check-toast" 
                            name="notification" 
                            value="toast" 
                            checked={notificationType === 'toast'} 
                            onChange={(e) => setNotificationType(e.target.value)} 
                        />
                        <div htmlFor="check-toast">toast</div>
                        
                        <input 
                            type="radio" 
                            id="check-alert" 
                            name="notification" 
                            value="alert" 
                            checked={notificationType === 'alert'} 
                            onChange={(e) => setNotificationType(e.target.value)} 
                        />
                        <div htmlFor="check-alert">alert</div>
                        
                        <input 
                            type="radio" 
                            id="check-background" 
                            name="notification" 
                            value="background" 
                            checked={notificationType === 'background'} 
                            onChange={(e) => setNotificationType(e.target.value)} 
                        />
                        <div htmlFor="check-background">background</div>
                    </div>
                </div>
                <div style={buttonContainerStyle}>
                    <button
                        style={submitButtonStyle(isHovered)}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        type="submit"
                    >
                        Submit →
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NotificationForm;

const mainContainerStyle = {
    position: 'relative',
    backgroundColor: 'transparent',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 0 8px lightgray',
    height: 'fit-content',
};

const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
};

const formFieldStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#006e93',
    marginBottom: '5px',
    textAlign: 'left',
};

const inputStyle = {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    backgroundColor: 'white',
    color: '#707070',
    outline: 'none',
};

const textareaStyle = {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    backgroundColor: 'white',
    color: '#707070',
    outline: 'none',
    height: '120px',
    resize: 'none',
};

const rowFormFieldStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: '12px',
    alignItems: 'center',
}

const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-start',
    alignItems: 'center',
};

const submitButtonStyle = (isHovered) => ({
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s',
    backgroundColor: isHovered ? '#005f7f' : '#006e93',
});
