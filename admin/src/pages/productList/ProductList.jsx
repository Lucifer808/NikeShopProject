import React, {useEffect, useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from '../../redux/apiCalls'
import './productList.css'
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products)
    useEffect(() =>{
        getProducts(dispatch);
    }, [dispatch])
    const handleDelete = (id) => {
        deleteProduct(id, dispatch)
        alert("Sản phẩm đã được xóa");
    }
     const columns = [
         { field: "_id", headerName: "ID", width: 220 },
         { field: "product", headerName: "Sản phẩm", width: 320 , renderCell: (params) =>{
             return (
                 <div className="productListItem">
                     <img className="productListImg" src={params.row.img} alt="" />
                     {params.row.title}
                 </div>
             );
         }},
         { field: "inStock", headerName: "Tồn kho", width: 100 },
         {
             field: "price",
             headerName: "Giá",
             width: 160,
         },
         {
             field: "action",
             headerName: "Hành động",
             width: 150,
             renderCell: (params) =>{
                 return (
                     <>
                     <Link to={"/product/" + params.row._id}>
                     <EditIcon className="productListEdit"></EditIcon>
                     </Link>
                     <DeleteOutlineIcon className="productListDelete" onClick={()=>handleDelete(params.row._id)}></DeleteOutlineIcon>
                     </>
                 )
             }
         },
     ];
    return (
        <>
            <div className="productList">
                <Link to="/newproduct">
                    <button className="productAddButton">Thêm mới</button>
                </Link>
                <DataGrid
                rows={products} disableSelectionOnClick
                columns={columns}
                getRowId={row => row._id}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                />
            </div>
        </>
    )
}

export default ProductList
