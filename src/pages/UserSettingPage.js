import React, { useState } from "react";
import UserInfoCard from "../components/UserInfoCard";
import SearchBar from "../components/SearchBar";
import { useNavigate, Link } from "react-router-dom";

function UserSettingPage() {

    const [users, setUsers] = useState([
        { id: 1, name: "User 1", email: "user1@gmail.com", content: "This is user 1's content" },
        { id: 2, name: "User 2", email: "user2@gmail.com", content: "This is user 2's content" },
        { id: 3, name: "User 3", email: "user3@gmail.com", content: "This is user 3's content" },
        { id: 4, name: "User 4", email: "user4@gmail.com", content: "This is user 4's content" },
        { id: 5, name: "User 5", email: "user5@gmail.com", content: "This is user 5's content" },
        { id: 6, name: "User 6", email: "user6@gmail.com", content: "This is user 6's content" },

    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleEdit = (userId) => {
        const userToEdit = users.find(user => user.id === userId);
        navigate(`/edit-user/${userId}`, { state: { user: userToEdit } });
    };

    const handleDelete = (userId) => {
        if (window.confirm("정말로 이 사용자를 삭제하시겠습니까?")) {
            const updatedUsers = users.filter(user => user.id !== userId);
            setUsers(updatedUsers);
        }
    };

    const filteredUsers = users.filter(user => 
        (user.name && (user.name.toLowerCase().includes(searchTerm.toLowerCase()))) || 
        (user.email && (user.email.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    return (
        <div style={mainContainerStyle}>
            <div style={titleContainerStyle}>
                <h1>Users</h1>
            </div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div style={contentContatinerStyle}>
                <div style={addUserButtonStyle}>
                    <Link to='/add-user' style={buttonStyle}>
                        +
                    </Link>
                </div>
                <div style={{padding: '8px', width: '100%', overflowY: 'auto', maxHeight: '400px',}}>
                    {filteredUsers.map(user => (
                        <UserInfoCard
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            content={user.content}
                            onEdit={() => handleEdit(user.id)}
                            onDelete={() => handleDelete(user.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserSettingPage;

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 80px',
};

const titleContainerStyle = {
    marginTop: '6vh',
    width: '100%',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#006e93',
};

const contentContatinerStyle = {
    width: '100%',
};

const addUserButtonStyle = {
    display: 'flex',
    borderRadius: '16px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s',
    padding: '12px 16px',
    margin: '8px',
};

const buttonStyle = {
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    alignContent: 'center',
}