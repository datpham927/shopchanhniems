import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { createCategory } from '../../api/category'
import { apiUploadImage } from '../../api/apiUploadPicture'

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState("")
    const [image, setImagesUrl] = useState(null)
    const [loading, setLoading] = useState(false)


    const handleSummit = async () => {
        if (!categoryName) {
            alert("Nhập đầy đủ")
            return
        }
        const res = await createCategory({ category_name: categoryName, category_thumbnail: image })
        if (!res.success) {
            alert('Thất bại!')
        } else {
            setCategoryName("")
            setImagesUrl("")
            alert('Thành công!')
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
        <div className='w-full h-full'>
            <div className='flex flex-col gap-6 p-6'>
                <TextField id="standard-basic" label="Tên danh mục" value={categoryName} variant="standard" onChange={(e) => setCategoryName(e.target.value)} />
                <div className="flex w-full items-center gap-3  ">

                    <input id="comment_input" type="file" hidden onChange={handleImageUpload} />
                    <label htmlFor="comment_input" className="flex  items-center gap-2">
                        Thêm hình ảnh
                        <img src='https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-download-icon-image_1344467.jpg' className='w-5' />
                    </label>
                    {image && <img src={image} className='w-20' />}

                </div>
                {!loading && <Button variant="contained" sx={{ width: "50%", margin: "auto" }} onClick={handleSummit}>Thêm</Button>}
            </div>
        </div>
    )
}

export default AddCategory