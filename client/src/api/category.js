import axios from 'axios';

const getCategory = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/category/get_all`);
        return response.data;
    } catch (error) {
        return error;
    }
};


export { getCategory }
