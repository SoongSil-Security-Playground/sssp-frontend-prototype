import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserInfo, updateUserInfo, deleteUserInfo } from '../services/user';
import { toast, } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';

function ProfileForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [contents, setContents] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {logout} = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
    
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('No token found. Redirecting to login...');
                    navigate('/login');
                    return;
                }
    
                const data = await fetchUserInfo(token);
                setUsername(data.username || '');
                setEmail(data.email || '');
                setContents(data.contents || '');
            } catch (error) {
                console.error('Error fetching user data:', error.message);
                setError(error.message || 'Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [navigate]);
    
    const handleSaveClick = async () => {
        setLoading(true);
        setError(null);
    
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No token found. Please log in again.");
            }
    
            const updatedData = await updateUserInfo(token, contents);
            console.log("Contents updated successfully:", updatedData);
            toast.dismiss();
            toast.success(
                <div>
                    <p classusername="toast-title">Profile Updated!</p>
                    <p classusername="toast-content">성공적으로 변경되었습니다.</p>
                    <p classusername="toast-time">{new Date().toLocaleString()}</p>
                </div>
            );
        } catch (error) {
            console.error("Error updating contents:", error.message);
            toast.error(
                    <div>
                    <p classusername="toast-title">Profile Update Error</p>
                    <p classusername="toast-content">{error.message}</p>
                    <p classusername="toast-time">{new Date().toLocaleString()}</p>
                </div>
            );
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };    

    const handleChangePasswordClick = (event) => {
        event.preventDefault();
        navigate('/mypage/change-password');
    };

    
    const handleDeleteAccountClick = async () => {
        const confirmDelete = window.confirm("정말로 계정을 삭제하시겠습니까?");

        if (!confirmDelete) {
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No token found. Please log in again.");
            }

            const response = await deleteUserInfo(token);
            console.log("Delete Account successfully:", response); 
            await logout();
            navigate('/');

            toast.dismiss();
            toast.success(
                <div>
                    <p classusername="toast-title">Account Deleted!</p>
                    <p classusername="toast-content">성공적으로 탈퇴되었습니다.</p>
                    <p classusername="toast-time">{new Date().toLocaleString()}</p>
                </div>
            );
        } catch (error) {
            console.error("Error delete contents:", error.message);
            toast.error(
                    <div>
                    <p classusername="toast-title">Account Delete Error</p>
                    <p classusername="toast-content">{error.message}</p>
                    <p classusername="toast-time">{new Date().toLocaleString()}</p>
                </div>
            );
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={pageContainerStyle}>
            <div style={profileContainerStyle}>
                <div style={profileIconStyle}></div>
            </div>
            <form style={formContainerStyle}>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={inputStyle}
                    />
                </div>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={inputStyle}
                    />
                </div>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>Contents</label>
                    <textarea
                        value={contents}
                        onChange={(e) => setContents(e.target.value)}
                        style={textareaStyle}
                    ></textarea>
                </div>
                <div style={buttonContainerStyle}>
                    <button style={changePasswordButtonStyle} onClick={handleChangePasswordClick}>
                        Change Password
                    </button>
                    <button style={deleteAccountButtonStyle} onClick={handleDeleteAccountClick}>
                        Delete Account
                    </button>
                    <button style={saveButtonStyle} onClick={handleSaveClick} disabled={loading}>
                        {loading ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </form>
        </div>
    );
}

const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25vw',
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
    marginBottom: '5px',
};

const profileIconStyle = {
    height: '60px',
    width: '60px',
    borderRadius: '50%',
    backgroundColor: 'var(--sky-blue)',
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

const textareaStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    backgroundColor: 'white',
    outline: 'none',
    height: '6vh',
    resize: 'none',
};

const buttonContainerStyle = {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    marginTop: '20px',
    alignItems: 'center',
    overflowY: 'hidden',
};

const changePasswordButtonStyle = {
    backgroundColor: 'white',
    color: 'var(--dark-blue)',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '8px',
    border: '1px solid var(--dark-blue)',
    cursor: 'pointer',
};

const deleteAccountButtonStyle = {
    backgroundColor: 'var(--dark-grey)',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '8px',
    border: '1px solid var(--dark-grey)',
    cursor: 'pointer',
};

const saveButtonStyle = {
    backgroundColor: 'var(--dark-blue)',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '25px',
};

export default ProfileForm;