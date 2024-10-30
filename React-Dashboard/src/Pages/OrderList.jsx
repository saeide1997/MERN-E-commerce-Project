import React, { useEffect } from "react";
import { getOrder } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import TimeAgo from "timeago-react";
import fa from "timeago.js/lib/lang/fa";
import * as timeago from "timeago.js";
timeago.register("fa", fa);

const OrderList = () => {
  var nf = new Intl.NumberFormat();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const userInf = useSelector((state) => state.user.users);
  let statusColor;

  useEffect(() => {
    getOrder(dispatch);
  }, [dispatch]);
  // console.log('orders',orders);
  const columns = [
    { field: "_id", headerName: "ID", width: 100, resizable: true },
    {
      field: "title",
      headerName: "نام ",
      width: 200,
      resizable: true,
      renderCell: (params) => {
        return (
          <div className="flex justify-center items-center">
            {userInf.find((item) => item._id === params.row.userId).userName}
          </div>
        );
      },
    },
    { field: "address", headerName: "آدرس", width: 150, resizable: true },
    {
      field: "createdAt",
      headerName: "تاریخ ثبت سفارش",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <TimeAgo datetime={params.row.createdAt} locale="fa" />
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "قیمت",
      width: 150,
      resizable: true,
      renderCell: (params) => {
        return <div>{nf.format(params.row.amount)} ریال </div>;
      },
    },
    {
      field: "status",
      headerName: "وضعیت",
      width: 150,
      renderCell: (params) => {
        if (params.row.status === "pending") {
          statusColor = "bg-orange-500/50";
        }
        if (params.row.status === "cancelled") {
          statusColor = "bg-red-500/50";
        }
        if (params.row.status === "complited") {
          statusColor = "bg-green-500/50";
        }
        if (params.row.status === "draft") {
          statusColor = "bg-gray-500/50";
        }
        return (
          <div
            className={
              "w-20 h-8 flex items-center justify-center rounded-xl " +
              statusColor
            }
          >
            {params.row.status}{" "}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "عملیات",
      width: 110,
      resizable: true,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row._id}>
              <button className="ml-2 bg-teal-600/50 shadow h-8 w-24 flex justify-center text-black rounded-md items-center hover:shadow-none">
                جزییات سفارش
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="flex-6  h-[80vh] mx-10 mt-10 ">
      <DataGrid
        className="lightShab max-w-full"
        initialState={{
          pagination: {
            paginationModel: { pageSize: 7, page: 0 },
          },
        }}
        rows={orders}
        disableRowSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        checkboxSelection
      />
    </div>
  );
};

export default OrderList;
