const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const registerUser = async (username, email, password) => {
    const response = await fetch(`${BACKEND_URL}/api/v1/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    const contentType = response.headers.get('content-type');
    console.log(response)

    if (!response.ok) {
        if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'An error occurred during registration.');
        } else {
            throw new Error('Unexpected response from the server.');
        }
    }

    return await response.json();
};

export const loginUser = async (email, password) => {
    const response = await fetch(`${BACKEND_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const contentType = response.headers.get('content-type');

    if (!response.ok) {
        if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Login failed.');
        } else {
            throw new Error('Unexpected response from the server.');
        }
    }

    return await response.json();
};
