import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { getUsersData, deleteUsersData } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import "./userList.css";
function UserList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userdata.users);
    useEffect(() =>{
        getUsersData(dispatch);
    }, [dispatch]);
    const handleDelete = (id) => {
        deleteUsersData(id, dispatch);
    }
    const columns = [
        { field: "_id", headerName: "ID", width: 200 },
        { field: "name", headerName: "Tên", width: 160 },
        { field: "username", headerName: "Tên đăng nhập", width: 160},
        { field: "email", headerName: "Tài khoản email", width: 200 },
        {
        field: "isAdmin",
        headerName: "Admin",
        width: 120,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) =>{
                return (
                    <>
                    <Link to={"/user/" + params.row._id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row._id)}></DeleteOutlineIcon>
                    </>
                )
            }
        },
    ];
    return (
        <div className="userList">
        <Link to="/newUser">
                    <button className="productAddButton">Thêm mới</button>
        </Link>
        <DataGrid
            rows={users} disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            getRowId={row => row._id}
            checkboxSelection
        />
        </div>
    );
}

export default UserList;
