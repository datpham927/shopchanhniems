import axios from 'axios';

export const apiUploadImage = async (data ) => {
    try {
        const cloudinaryCloudName = process.env.REACT_CLOUDINARY_CLOUD_NAME || 'dmcewmxyx';
        const res = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
            data
        );
        
        return res.data;
    } catch (error) {
        return {
            success: false,
            message: error,
        };
    }
};
