import axios from 'axios';


const apiLogin = async(body) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/admin/login`, body);
        return response.data;
    } catch (error) {
        return error;
    }
};

export { apiLogin }
