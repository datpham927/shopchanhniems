import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { createOrUpdateContact, getContact } from '../../api/contact'


const ContactInfo = () => {
    const [formData, setFormData] = useState({
        contact_facebook: '',
        contact_tiktok: '',
        contact_zalo: null,
    })
    const [contact, setContact] = useState({})

    const handleSave = async () => {
        if (formData) {
            if (contact) {
                const res = await createOrUpdateContact(formData, { _id: contact?._id });
                if(res.success ){
                    setContact(res?.data)
                    alert("Cập nhật thành công!")
                }
            }

        }
    }

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getContact()
            if (res.data?.length > 0) {
                setContact(res.data[0])
                setFormData(
                    {contact_facebook: res.data[0]?.contact_facebook,
                    contact_tiktok: res.data[0]?.contact_tiktok,
                    contact_zalo: res.data[0]?.contact_zalo,}
                )
            }
        }
        fetchApi()
    }, [])
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col gap-6 p-6'>
                <div>
                    <label htmlFor="fb">Link facebook</label>
                    <input id="fb" type="text" className='flex  w-full border-solid border-[1px] border-slate-300 py-1 px-2 rounded-sm outline-none' 
                    value={formData?.contact_facebook} onChange={(e) => setFormData((prev) => ({ ...prev, contact_facebook: e.target.value }))} />
                </div>
                <div>
                    <label htmlFor="tiktok">Link tiktok</label>
                    <input id="tiktok" type="text" className='flex  w-full border-solid border-[1px] border-slate-300 py-1 px-2 rounded-sm outline-none'
                     value={formData?.contact_tiktok} onChange={(e) => setFormData((prev) => ({ ...prev, contact_tiktok: e.target.value }))} />
                </div>
                <div>
                    <label htmlFor="zalo">Zalo (Số điện thoại)</label>
                    <input id="zalo" type="number" className='flex  w-full border-solid border-[1px] border-slate-300 py-1 px-2 rounded-sm outline-none' 
                     value={formData?.contact_zalo} onChange={(e) => setFormData((prev) => ({ ...prev, contact_zalo: e.target.value }))} />
                </div>
                <Button variant="contained" sx={{ width: "50%", margin: "auto" }} onClick={handleSave}>Cập nhật</Button>
            </div>
        </div>
    )
}

export default ContactInfo