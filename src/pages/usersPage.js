import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';
import UserCard from '../components/UserCard';
import Footer from '../components/Footer';

function UsersPage({ isLoggedIn, toggleLogin }) {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await axios.get('');
    //             setUsers(response.data);
    //         } catch (err) {
    //             setError('Failed to load users');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchUsers();
    // }, []);

    return (
        <div style={mainContainerStyle}>
            <NavigationBar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Users</h1>
            </div>
            <div style={contentContainerStyle}>
                <UserCard />
                {/* {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    users.map(user => (
                        <UserCard key={user.id} name={user.name} description={user.description} />
                    ))
                )} */}
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
    paddingTop: '60px',
};

const titleContainerStyle = {
    marginTop: '50px',
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

export default UsersPage;