import axios from 'axios';


const createCategory = async (categoryName) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/category/add_category`,categoryName);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getCategory = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/category/get_all`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const editCategory = async (body) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/category/edit_category`, body);
        return response.data;
    } catch (error) {
        return error;
    }
};
const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/category/delete_category/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export { getCategory, createCategory,editCategory ,deleteCategory}