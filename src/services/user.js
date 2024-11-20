const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchUserInfo = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user`, {
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

export const updateUserInfo = async (token, contents) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user`, {
        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ contents }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to update user contents.");
    }

    return await response.json();
};
