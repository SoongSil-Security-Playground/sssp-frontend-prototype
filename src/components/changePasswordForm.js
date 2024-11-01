import React from 'react';

function ChangePasswordForm() {

    return (
        <div style={pageContainerStyle}>
            <style>{placeholderStyle}</style>
            <div style={profileContainerStyle}>
                <div style={profileIconStyle}></div>
            </div>
            <form style={formContainerStyle}>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>Password</label>
                    <input 
                        type="password" 
                        style={{ ...inputStyle, ':focus': inputFocusStyle }} 
                    />
                </div>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>New Password</label>
                    <input 
                        type="password" 
                        style={{ ...inputStyle, ':focus': inputFocusStyle }} 
                    />
                </div>
                <div style={buttonContainerStyle}>
                    <button style={changePasswordButtonStyle} >change password</button>
                </div>
            </form>
        </div>
    );
}

const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '430px',
    margin: '0 auto',
    boxSizing: 'border-box',
    border: '1px solid lightgrey',
    borderRadius: '8px',
    padding: '30px',
};

const profileContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
};

const profileIconStyle = {
    height: '60px',
    width: '60px',
    borderRadius: '50%',
    backgroundColor: '#F1F3F7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    color: '#9CA3AF',
};

const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '15px',
};

const formFieldStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'var(--dark-blue)',
    marginBottom: '5px',
    textAlign: 'left',
};

const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    backgroundColor: 'white',
    outline: 'none',
    transition: 'border-color 0.2s ease',
};

const inputFocusStyle = {
    borderColor: 'var(--dark-blue)',
};

const placeholderStyle = `
  input::placeholder, textarea::placeholder {
    color: var(--dark-blue);
  }
`;

const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-start',
    marginTop: '20px',
};

const changePasswordButtonStyle = {
    backgroundColor: 'var(--dark-blue)',
    color: 'white',
    fontWeight: 'bold',
    marginRight: '15px',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
};

export default ChangePasswordForm;