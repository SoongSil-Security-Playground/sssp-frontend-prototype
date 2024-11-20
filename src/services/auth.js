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

export const loginUser = async (username, password) => {
    const payload = new URLSearchParams();
    payload.append('username', username);
    payload.append('password', password);

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response data:', errorData);
    
        if (Array.isArray(errorData.detail)) {
            const errorMessages = errorData.detail.map((err) => 
                `${err.loc.slice(1).join('.')}: ${err.msg}`
            );
            throw new Error(errorMessages.join('\n'));
        }
        throw new Error(errorData.detail || 'Login failed');
    }
    

    return await response.json();
};
