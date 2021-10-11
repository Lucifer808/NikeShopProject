import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {productRows} from "../../dummyData";
import {Link} from "react-router-dom";
import './productList.css'
function ProductList() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
     }
     const columns = [
         { field: "id", headerName: "ID", width: 70 },
         { field: "product", headerName: "Product", width: 220 , renderCell: (params) =>{
             return (
                 <div className="productListItem">
                     <img className="productListImg" src={params.row.image} alt="" />
                     {params.row.name}
                 </div>
             );
         }},
         { field: "stock", headerName: "Stock", width: 200 },
         {
         field: "status",
         headerName: "Status",
         width: 120,
         },
         {
             field: "price",
             headerName: "Price",
             width: 160,
         },
         {
             field: "action",
             headerName: "Action",
             width: 150,
             renderCell: (params) =>{
                 return (
                     <>
                     <Link to={"/product/" + params.row.id}>
                     <button className="productListEdit">Edit</button>
                     </Link>
                     <DeleteOutlineIcon className="productListDelete" onClick={()=>handleDelete(params.row.id)}></DeleteOutlineIcon>
                     </>
                 )
             }
         },
     ];
    return (
        <div className="productList">
            <DataGrid
            rows={data} disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            />
        </div>
    )
}

export default ProductList
