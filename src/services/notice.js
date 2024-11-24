const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchNotices = async (token) => {
    const response = await fetch(`${BACKEND_URL}/api/v1/notice`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to fetch notices.");
    }

    return await response.json();
};

export const createNotice = async (title, content, token) => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/v1/admin/notice`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`,
            },
            body: new URLSearchParams({
                title: title,
                content: content,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Failed to create notice.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating notice:', error.message);
        throw error;
    }
};