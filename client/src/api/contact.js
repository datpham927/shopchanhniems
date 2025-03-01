import axios from 'axios';

 
const getContact = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/contact/all`);
        return response.data;
    } catch (error) {
        return error;
    }
};
 
export { getContact }
