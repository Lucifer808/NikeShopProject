import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import "./userList.css";
function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
       setData(data.filter(item => item.id !== id))
    }
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "user", headerName: "User", width: 220 , renderCell: (params) =>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            );
        }},
        { field: "email", headerName: "Email Address", width: 200 },
        {
        field: "status",
        headerName: "Status",
        width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) =>{
                return (
                    <>
                    <Link to={"/user/" + params.row.id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}></DeleteOutlineIcon>
                    </>
                )
            }
        },
    ];
    return (
        <div className="userList">
        <DataGrid
            rows={data} disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
    );
}

export default UserList;
