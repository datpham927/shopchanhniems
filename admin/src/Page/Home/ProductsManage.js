import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getCategory } from '../../api/category';
import { deleteProduct, getProduct } from '../../api/product';
import ModalEditProductComponent from '../../components/ModalEditProductComponent';

const ProductsManage = () => {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const [categoryCode, setCategoryCode] = useState("");
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có muốn xóa không?")) {
            const res = await deleteProduct(id)
            if (res.success) {
                setProducts((prev) => [...prev.filter((p) => p?._id !== id)])
                alert('Xóa thành công!')
            }
        }
    };
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getProduct({ category_code: "" });
            if (!res?.success) return;
            setProducts(res.data);
        };
        fetchApi();
    }, []);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getProduct({ category_code: categoryCode });
            if (!res?.success) return;
            setProducts(res.data);
        };
        categoryCode && fetchApi();
    }, [categoryCode]);

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
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryCode}
                    label="Danh mục"
                    onChange={(e) => setCategoryCode(e.target.value)}
                >
                    {categories.map((e) => (
                        <MenuItem value={e?.category_code}>{e?.category_name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell width={150}>Hình ảnh</TableCell>
                            <TableCell align="left">Tiêu đề</TableCell>
                            <TableCell align="left">Lượt click</TableCell>
                            <TableCell align="left">Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((p) => (
                            <TableRow key={p?.id}>
                                <TableCell align="left">
                                    <img src={p?.product_image} className="w-10 h-10" alt="" />
                                </TableCell>
                                <TableCell align="left">{p?.product_title}</TableCell>
                                <TableCell align="left">{p?.product_view}</TableCell>
                                <TableCell align="left">
                                    <p
                                        className="cursor-pointer text-green-500 underline"
                                        onClick={() => {
                                            handleOpen(true);
                                            setEditProduct(p);
                                        }}
                                    >
                                        Sửa
                                    </p>
                                    <p className="cursor-pointer text-green-500 underline" onClick={() => handleDelete(p?._id)}>Xóa</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ModalEditProductComponent
                handleClose={handleClose}
                open={open}
                setProducts={setProducts}
                product={editProduct}
            />
        </div>
    );
};

export default ProductsManage;
