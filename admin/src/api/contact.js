import axios from 'axios';


const createOrUpdateContact = async (data) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/contact/add_contact`,data);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getContact = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/contact/all`);
        return response.data;
    } catch (error) {
        return error;
    }
};
 
export { getContact, createOrUpdateContact }