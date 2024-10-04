import React, { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';


const UserList = () => {

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'username', headerName: 'نام کاربری', width: 250,
      renderCell: (params)=>{
        return(
          <div className='flex justify-center items-center'>
            <img className='w-10 h-10 ml-2' src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="userImage" />
            {params.row.username}
          </div>
        )
      }
     },
    { field: 'email', headerName: 'ایمیل', width: 150 },
    { field: 'status', headerName: 'وضعیت', width: 150 },
    { field: 'transaction', headerName: 'تراکنش', width: 150 },
    { field: 'action', headerName: 'عملیات', width: 150, renderCell:(params)=>{
      return(
        <>
        <Link to={"/user/"+params.row.id}>
          <button className='ml-2 bg-green-600 h-7 w-11 flex justify-center text-white rounded-md items-center'>ویرایش</button>
        </Link>
        <DeleteOutline className='text-red-700' onClick={()=>handleDelete(params.row.id)}/>
        </>
      )
    }
   },
  ];

  const rows = [
    { id: 1, username: 'Hello', email: 'World' },
    { id: 2, username: 'DataGridPro', email: 'is Awesome' },
    { id: 3, username: 'MUI', email: 'is Amazing' },
  ];
  
  
  const [data, setData] = useState(rows)

  const handleDelete=(id)=>{
    setData(data.filter((item)=> item.id !== id))
  }
  
    return (
        <div className='flex-6 h-[80vh] mx-10 mt-10 ' >
             <DataGrid className='' 
             initialState={{
              pagination: {
                paginationModel: { pageSize: 8, page: 0 },
              },
            }}
             rows={rows} disableSelectionOnClick columns={columns} checkboxSelection />
        </div>
    );
};

export default UserList;