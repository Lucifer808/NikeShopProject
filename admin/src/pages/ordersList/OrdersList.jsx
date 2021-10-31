import React, { useState, useEffect } from 'react';
import './ordersList.css';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { getOrders } from '../../redux/apiCalls';
import { useDispatch, useSelector} from 'react-redux';
const OrdersList = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);
    useEffect(() => {
        getOrders(dispatch);
    },[dispatch]);
    const columns = [
        { field: "_id", headerName: "Mã đơn hàng", width: 200 },
        { field: "userId", headerName: "Mã khách hàng", width: 200 },
        { field: "amount", headerName: "Giá trị đơn hàng", width: 160},
        { field: "status", headerName: "Trạng thái đơn hàng", width: 180 },
        { field: "createdAt", headerName: "Thời gian đặt hàng", width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 80,
            renderCell: (params) =>{
                return (
                    <>
                    <Link to={"/order/" + params.row._id}>
                    <button className="ordersListEdit">Edit</button>
                    </Link>
                    </>
                )
            }
        },
    ];
    return (
        <div className="ordersList">
             <DataGrid
            rows={orders} disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            getRowId={row => row._id}
            checkboxSelection
        />
        </div>
    )
}

export default OrdersList
