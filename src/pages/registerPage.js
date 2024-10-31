import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/');
    };

    return (
        <div style={mainContainerStyle}>
            <h1 style={headerTextStyle}>REGISTER</h1>
            <b1 style={bodyTextStyle}>hello hello hello </b1>
            <div style={loginContainerStyle}>
                <label style={labelStyle}>Name</label>
                <input
                    type="text"
                    placeholder="Brian Clark"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                />

                <label style={labelStyle}>Email</label>
                <input
                    type="text"
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
                    <button style={registerButtonStyle} onClick={handleRegister}>
                        Register →
                    </button>
                </div>
            </div>
        </div>
    );
}

const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    flexDirection: 'column',
    margin: 0,
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

const bodyTextStyle = {
    color: 'var(--dark-blue)',
    marginBottom: '5px',
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

export default RegisterPage;