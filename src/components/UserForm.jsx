import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../styles/UserForm.css';

const UserForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state?.user || null;

    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [content, setContent] = useState(user ? user.content : "");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setContent(user.content);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/userSettingPage");
    };

    return (
        <div className="user-info-edit">
            <h1>Users</h1>
            <div className="user-container">
                <form action="#" className="user-form" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <label>Name</label>
                        <input type="text" placeholder="Type your name here" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <label>Email</label>
                        <input type="email" placeholder="Type your email here" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <label>Password</label>
                        <input type="password" placeholder="Type your password here" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-box contents">
                        <label>Contents</label>
                        <textarea placeholder="Type your contents here" value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <button className="submit-button">submit →</button>
                </form> 
            </div>
        </div>
    );
};

export default UserForm;
