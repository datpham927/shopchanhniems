import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { deleteCategory, getCategory } from '../../api/category';
import ModalEditCategoryComponent from '../../components/ModalEditCategoryComponent';

const CategoryManage = () => {
    const [editCategory, setEditCategory] = useState();
    const [Categories, setCategories] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có muốn xóa không?")) {
            const res = await deleteCategory(id)
            if (res.success) {
                setCategories((prev) => [...prev.filter((p) => p._id !== id)])
                alert('Xóa thành công!')
            }else{
                alert('không thể xóa!')
            }
        }
    };
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getCategory();
            if (!res?.success) return;
            setCategories(res.data);
        };
        fetchApi();
    }, []);

    return (
        <div className='flex w-full h-full flex-col gap-4 p-10 overflow-hidden'>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell width={150}>Hình ảnh</TableCell>
                            <TableCell align="left">Tên danh mục</TableCell>
                            <TableCell align="left">Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Categories && Categories?.map((p) => (
                            <TableRow key={p?._id}>
                                <TableCell align="left">
                                    <img src={p?.category_thumbnail} className="w-10 h-10" alt="" />
                                </TableCell>
                                <TableCell align="left">{p?.category_name}</TableCell>
                                <TableCell align="left">
                                    <p
                                        className="cursor-pointer text-green-500 underline"
                                        onClick={() => {
                                            console.log(p)
                                            setEditCategory(p);
                                            handleOpen(true);
                                        }}
                                    >
                                        Sửa
                                    </p>
                                    <p className="cursor-pointer text-green-500 underline"

                                        onClick={() => handleDelete(p?._id)}
                                    >Xóa</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ModalEditCategoryComponent
                handleClose={handleClose}
                open={open}
                setCategories={setCategories}
                category={editCategory}
            />
        </div>
    );
};

export default CategoryManage;
