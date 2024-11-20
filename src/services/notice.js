const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchNotices = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/notice`, {
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