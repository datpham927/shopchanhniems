import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { editProduct } from '../api/product';
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

const ModalEditProductComponent = ({ handleClose, open, setProducts, product }) => {
    const [valueForm, setValueForm] = useState({})
    const [image, setImagesUrl] = useState(null)
    const [loading, setLoading] = useState(false)
    React.useEffect(() => {
        setValueForm({
            product_title: product?.product_title,
            product_link: product?.product_link,
            product_image: product?.product_image
        })
    }, [product])
    const handleSetValue = (key, value) => {
        setValueForm(e => ({ ...e, [key]: value }))
    }
    const handleSummit = async () => {
        if (Object.entries(valueForm).length < 2) {
            alert("Nhập đầy đủ")
            return
        }
        const res = await editProduct({...valueForm, product_image: image?image:product?.product_image, _id: product?._id })
        if (!res.success) {
            alert('Thất bại!')
        } else {
            setValueForm({
                product_title: "", product_link: "",
            })
            alert('Thành công!')
            setProducts((prev) => [...prev.filter((p) => p._id !== res?.data._id), { ...res?.data }])
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
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="standard-basic" label="Nhập tiêu đề" value={valueForm?.product_title} variant="standard" sx={{ width: "100%" }} onChange={(e) => handleSetValue("product_title", e.target.value)} />
                    <TextField id="standard-basic" label="Nhập link" variant="standard" className='mt-3' value={valueForm?.product_link} sx={{ width: "100%" }} onChange={(e) => handleSetValue("product_link", e.target.value)} />
                    <div className="flex w-full items-center gap-3  mt-4 ">

                        <input id="comment_input" type="file" hidden onChange={handleImageUpload} />
                        <label htmlFor="comment_input" className="flex  items-center gap-2">
                            Thêm hình ảnh
                            <img src='https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-download-icon-image_1344467.jpg' className='w-5' />
                        </label>
                        <img src={image?image: product?.product_image} className='w-20' /> 

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

export default ModalEditProductComponent