import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from "@mui/icons-material";
import { userRows } from "../../../data/sampleData";
import { Link } from "react-router-dom";
import { useState } from "react";


const UserList = () => {
    const [data,setData] = useState(userRows)
    console.log(data)
    
    const handleDelete = (id) =>{
        setData(data.filter((item)=> item.id !==id ))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'username', headerName: 'Username', width: 200,renderCell:(params)=>{
            return(
                <div className="userListUser">
                    <img className="userListUserImg" src={params.row.avatar} alt={params.row.username}/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 100,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          minWidth: 200,
          
        },
        {
            field: 'action',
            headerName: 'Action',
            minWidth: 155,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={`/users/${params.row.id}`}> <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutlined onClick={()=>handleDelete(params.row.id)} className="userListDelete"/>
                 </>
                    )
            }
          }
      ];
      
      


  return <div className="userList">
       <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
  </div>;
};

export default UserList;
