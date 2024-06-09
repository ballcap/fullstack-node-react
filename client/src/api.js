export const fetchMessage = async () => {
    try {
        const response = await fetch('http://localhost:5000/api');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Failed to fetch:', error);
        throw error;
    }
};