import React, { useEffect } from 'react';
import{ useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import { deleteProduct, getProduct } from '../redux/apiCalls';

const ProductList = () => {
  const dispatch = useDispatch()
  const products = useSelector((state)=>state.product.products)

  useEffect(()=>{
    getProduct(dispatch)
  },[dispatch])

    const columns = [
        { field: '_id', headerName: 'ID', width: 100 },
        { field: 'title', headerName: 'نام ', width: 300,
          renderCell: (params)=>{
            return(
              <div className='flex justify-center items-center'>
                <img className='w-10 h-10 ml-2' src={params.row.img} alt="userImage" />
                {params.row.title}
              </div>
            )
          }
         },
        { field: 'inStock', headerName: 'موجودی', width: 150,
          renderCell: (params) => {
            if(params.row.inStock === true){return(
            <div>موجود</div>
          )}else{
            return(
              <div>ناموجود</div>
            )
          } 
          },
         },
        { field: 'price', headerName: 'قیمت', width: 250 },
        // { field: 'transaction', headerName: 'تراکنش', width: 150 },
        { field: 'action', headerName: 'عملیات', width: 150, renderCell:(params)=>{
          return(
            <>
            <Link to={"/product/"+params.row._id}>
              <button className='ml-2 bg-green-600 h-7 w-11 flex justify-center text-white rounded-md items-center'>ویرایش</button>
            </Link>
            <DeleteOutline className='text-red-700' onClick={()=>handleDelete(params.row._id)}/>
            </>
          )
        }
       },
      ];
 
  const handleDelete=async(id)=>{
    await deleteProduct(id,dispatch)
    getProduct(dispatch)
  }

    return (
        <div className='flex-6  h-[80vh] mx-10 mt-10 ' >
             <DataGrid className='lightShab max-w-full'
             initialState={{
              pagination: {
                paginationModel: { pageSize: 7, page: 0 },
              },
            }}
             rows={products} disableRowSelectionOnClick getRowId={(row)=> row._id} columns={columns} checkboxSelection />
        </div>
    );
};

export default ProductList;