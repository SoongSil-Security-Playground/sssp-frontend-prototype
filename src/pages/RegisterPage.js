import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        setLoading(true);
        setError(null);

        console.log('Register request started with:', { username, email, password });

        try {
            const data = await registerUser(username, email, password);
            console.log('Registration successful:', data);

            setSuccess(true);
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            console.error('Registration error:', error.message);
            setError(error.message);
        } finally {
            setLoading(false);
            console.log('Register request completed.');
        }
    };

    return (
        <div style={mainContainerStyle}>
            <h1 style={headerTextStyle}>REGISTER</h1>
            <div style={loginContainerStyle}>
                <label style={labelStyle}>Username</label>
                <input
                    type="text"
                    placeholder="Soongsil Kim"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={inputStyle}
                />

                <label style={labelStyle}>Email</label>
                <input
                    type="email"
                    placeholder="example@soongsil.ac.kr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                />

                <label style={labelStyle}>Password</label>
                <input
                    type="password"
                    placeholder="Type your Password here..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                />

                <div style={buttonContainerStyle}>
                    <button
                        style={registerButtonStyle}
                        onClick={handleRegister}
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </div>

                {error && <p style={errorTextStyle}>{error}</p>}
                {success && <p style={successTextStyle}>회원가입을 완료하였습니다. 리다이렉션 중...</p>}
            </div>
        </div>
    );
};

const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    flexDirection: 'column',
    margin: 0,
    marginTop: '-30px',
};


const loginContainerStyle = {
    backgroundColor: 'white',
    border: '2px solid var(--medium-grey)',
    marginTop: '10px',
    padding: '20px',
    width: '400px',
    borderRadius: '10px',
    boxSizing: 'border-box',
};

const headerTextStyle = {
    color: 'var(--dark-blue)',
    marginBottom: '2px',
};

const labelStyle = {
    fontSize: '14px',
    color: 'var(--dark-blue)',
    fontWeight: 600,
    marginBottom: '5px',
    display: 'block',
    textAlign: 'left',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid var(--light-grey)',
    borderRadius: '5px',
    boxSizing: 'border-box',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '10px',
    marginTop: '10px',
};

const registerButtonStyle = {
    backgroundColor: 'var(--medium-blue)',
    color: '#FFFFFF',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};


const successTextStyle = {
    color: 'var(--dark-blue)',
    fontSize: '14px',

}

const errorTextStyle = {
    color: 'var(--dark-grey)',
    fontSize: '14px',

}

export default RegisterPage;