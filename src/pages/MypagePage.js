import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';
import Footer from '../components/Footer';
import { deleteUserInfo } from '../services/user';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';

function MypagePage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {logout} = useAuth();
    const navigate = useNavigate();

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
                    <p className="toast-title">Account Deleted!</p>
                    <p className="toast-content">성공적으로 탈퇴되었습니다.</p>
                    <p className="toast-time">{new Date().toLocaleString()}</p>
                </div>
            );
        } catch (error) {
            console.error("Error delete contents:", error.message);
            toast.error(
                    <div>
                    <p className="toast-title">Account Delete Error</p>
                    <p className="toast-content">{error.message}</p>
                    <p className="toast-time">{new Date().toLocaleString()}</p>
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
        <div style={mainContainerStyle}>
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Mypage</h1>
            </div>
            <div style={contentContainerStyle}>
                <ProfileForm />
                <button style={deleteAccountButtonStyle} onClick={handleDeleteAccountClick}>
                    Delete Account →
                </button>
            </div>
            <Footer />
        </div>
    );
}

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
    marginBottom: '30px',
    width: '100%',
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
    width: '100%',
};

const deleteAccountButtonStyle = {
    backgroundColor: 'white',
    color: 'var(--dark-grey)',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
};

export default MypagePage;