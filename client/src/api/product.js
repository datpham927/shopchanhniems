import axios from 'axios';

const getProduct = async({ category_code }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/product/get_all?category_code=${category_code}`);
        return response.data;
    } catch (error) {
        return error;
    }
};
const updateView = async(pid) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/product/update_view/${pid}`);
        return response.data;
    } catch (error) {
        return error;
    }
};


export { getProduct, updateView }
