const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchUserInfo = async (token) => {
    const response = await fetch('https://sssp.live/api/v1/user', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.log('fail');
        throw new Error(errorData.detail || 'Error fetching user information');
    }
    return await response.json();
};