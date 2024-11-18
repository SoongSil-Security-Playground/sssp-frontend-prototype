const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const registerUser = async (username, password, email) => {
    const url = `${BACKEND_URL}/api/v1/auth/register`;

    const requestBody = {
        username,
        password,
        email,
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || "Registration failed");
        }

        return await response.json();
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};
