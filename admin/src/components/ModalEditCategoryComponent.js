import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { editCategory } from '../api/category';
import React, { useState } from 'react'
import { apiUploadImage } from '../api/apiUploadPicture';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ModalEditCategoryComponent = ({ handleClose, open, setCategories, category }) => {
    const [valueForm, setValueForm] = useState({})
    const [image, setImagesUrl] = useState(null)
    const [loading, setLoading] = useState(false)

    React.useEffect(() => {
        setValueForm({
            category_name: category?.category_name,
            category_thumbnail: category?.category_thumbnail,
        })
    }, [category])
    const handleSetValue = (key, value) => {
        setValueForm(e => ({ ...e, [key]: value }))
    }

    const handleSummit = async () => {
        if (Object.entries(valueForm).length < 2) {
            alert("Nhập đầy đủ")
            return
        }
        console.log(image);
        const res = await editCategory({ ...valueForm, _id: category?._id ,category_thumbnail: image ? image : category?.category_thumbnail})
        if (!res.success) {
            alert('Thất bại!')
        } else {
            setValueForm({
                category_name: "", category_link: "", category_thumbnail: "",
            })
            alert('Thành công!')
            setCategories((prev) => [...prev.filter((p) => p._id !== res?.data._id), { ...res?.data }])
            handleClose(false)
        }
    }

    const handleImageUpload = async (e) => {
        setLoading(true)
        const files = e.target.files;
        if (!files) return;
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', process.env.REACT_UPLOAD_PRESET || "vuamyryr");
        try {
            const response = await apiUploadImage(formData);
            setImagesUrl(response.url);
        } catch (error) {
            alert('Lỗi xảy ra khi tải lên ảnh!');
        }
        setLoading(false)
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-name"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="standard-basic" label="Tên danh mục" value={valueForm?.category_name} variant="standard" sx={{ width: "100%" }} onChange={(e) => handleSetValue("category_name", e.target.value)} />
                    <div className="flex w-full items-center gap-3 mt-4 ">

                        <input id="comment_input" type="file" hidden onChange={handleImageUpload} />
                        <label htmlFor="comment_input" className="flex  items-center gap-2">
                            Thêm hình ảnh
                            <img src='https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-download-icon-image_1344467.jpg' className='w-5' />
                        </label>
                        <img src={image ? image : valueForm.category_thumbnail} className='w-20' />

                    </div>
                    {!loading && <div className='flex w-full justify-center'>
                        <Button variant="contained" sx={{ marginTop: "30px" }} onClick={handleSummit}>Cập nhật</Button>
                        <div />
                    </div>}
                </Box>
            </Modal>
        </div>
    );
}

export default ModalEditCategoryComponent