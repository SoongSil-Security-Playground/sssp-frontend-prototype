const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchAllChallenges = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/challenges/get_all_challenge`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
    });
    console.log(response);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to fetch challenges.");
    }

    return await response.json();
};
