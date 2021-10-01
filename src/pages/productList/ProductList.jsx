import { DeleteOutline } from '@material-ui/icons'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productRows } from '../../DummyData'
import './productList.css'


export default function ProductList() {
    const [data, setData] = useState(productRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id ))
    }
    const columns = [
        { field: 'id', type: 'number', headerName: 'ID', width: 80 },
        { field: 'productName', headerName: 'Product name', width: 250 ,renderCell: (params) => { 
            return (
                <div className="productListProduct">
                    <img src={params.row.avatar} alt=""
                    className="productAvatar"
                ></img>
                {params.row.productName}
                </div>
            )
        } },
        {
          field: 'stock',
          headerName: 'Stock',
          type: 'number',
          width: 150,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 160,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
          },

          { field: 'action', headerName:'Action', 
            width: 160,
            renderCell: (params) => {
                return(
                <>
                    <Link to= {"/product/" + params.row.id}>
                        <button className='productListBtnEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='productListBtnDelete'
                        onClick = {() => handleDelete(params.row.id)}
                    />
                </>
                )
            }
        
        }
      ];

    return (
        <div className="productList">
             <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
      />
        </div>
    )
}
