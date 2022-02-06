import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from "@mui/icons-material";
import { productRows } from "../../data/sampleData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
    const [data,setData] = useState(productRows)

    const handleDelete = (id) =>{
        setData(data.filter((item)=> item.id !==id ))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'product', headerName: 'Product', width: 200,renderCell:(params)=>{
            return(
                <div className="productListItem">
                    <img className="productListUserImg" src={params.row.img} alt={params.row.name}/>
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 100,
        },
        {
          field: 'price',
          headerName: 'Price',
          minWidth: 200,
          
        },
        {
            field: 'action',
            headerName: 'Action',
            minWidth: 155,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={`/products/${params.row.id}`}> <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutlined onClick={()=>handleDelete(params.row.id)} className="productListDelete"/>
                 </>
                    )
            }
          }
      ];

  return <div className="productList">
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

export default ProductList;
