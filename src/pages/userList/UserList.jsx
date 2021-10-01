import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons'
import { userRows } from '../../DummyData';
import { Link } from 'react-router-dom';



export default function UserList() {
    const [data, setData] = useState(userRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'userName', headerName: 'User Name', width: 250 , renderCell: (params) => { 
            return (
                <div className="userListUser">
                    <img className="userListAvatar" src= {params.row.avatar} alt="">
                    </img>
                    {params.row.userName}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'transaction', headerName: 'Transaction', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },    
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 130,
        },
    
        { field: 'action', headerName: 'Action', width:'200', renderCell: (params) => { 
            return (
                <>
                <Link to= {"/users/" + params.row.id}>
                    <button className="userListBtnEdit" >Edit</button>
                </Link>
                    <DeleteOutline className="userListBtnDelete" onClick={() => handleDelete(params.row.id)}></DeleteOutline>
                </>
            )
        }}
      ];
      
    return (
        <div className="userList">
            <DataGrid
        rows={data}
        disableSelectionOnClick 
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
