import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getCategory } from '../../api/category'
import { createProduct } from '../../api/product'
import { apiUploadImage } from '../../api/apiUploadPicture'

const AddProduct = () => {
    const [categories, setCategories] = useState([])
    const [valueForm, setValueForm] = useState({})
    const [categoryCode, setCategoryCode] = useState("")
    const [image, setImagesUrl] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getCategory()
            if (!res?.success) return
            setCategories(res.data)
        }
        fetchApi()
    }, [])

    const handleSetValue = (key, value) => {
        setValueForm(e => ({ ...e, [key]: value }))
    }

    const handleSummit = async () => {
        if (Object.entries(valueForm).length < 1 && !image) {
            alert("Nhập đầy đủ")
            return
        }
        const res = await createProduct({ category_code: categoryCode, product_image: image, ...valueForm })
        if (!res.success) {
            alert('Thất bại!')
        } else {
            setValueForm({
                product_title: "", product_link: "", product_image: "",
            })
            setImagesUrl('')
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
                <TextField id="standard-basic" label="Nhập tiêu đề" value={valueForm?.product_title} variant="standard" onChange={(e) => handleSetValue("product_title", e.target.value)} />
                <TextField id="standard-basic" label="Nhập link" variant="standard" value={valueForm?.product_link} onChange={(e) => handleSetValue("product_link", e.target.value)} />
                <div className="flex w-full items-center gap-3  ">

                    <input id="comment_input" type="file" hidden onChange={handleImageUpload} />
                    <label htmlFor="comment_input" className="flex  items-center gap-2">
                        Thêm hình ảnh
                        <img src='https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-download-icon-image_1344467.jpg' className='w-5' />
                    </label>
                    {image && <img src={image} className='w-20' />}

                </div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={categoryCode}
                        label="Danh mục"
                        onChange={(e) => setCategoryCode(e.target.value)}
                    >
                        {categories.map(e => <MenuItem value={e?.category_code}>{e?.category_name}</MenuItem>)}

                    </Select>
                </FormControl>
                {!loading && <Button variant="contained" sx={{ width: "50%", margin: "auto" }} onClick={handleSummit}>Thêm</Button>}
            </div>
        </div>
    )
}

export default AddProduct