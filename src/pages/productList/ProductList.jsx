import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";
import { deleteProducts } from "../../redux/apiCalls";


const ProductList = () => {

    const dispatch = useDispatch()
    const products = useSelector((state)=>state.product.products)

    useEffect(()=>{
        getProducts(dispatch)

    },[dispatch])


    const handleDelete = (id) =>{
     
        deleteProducts(id,dispatch)
     console.log( products.find((item) => item._id === id))  
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 220  },
        { field: 'product', headerName: 'Product', width: 200,renderCell:(params)=>{
            return(
                <div className="productListItem">
                    <img className="productListUserImg" src={params.row.img} alt={params.row.name}/>
                    {params.row.title}
                </div>
            )
        } },
        { field: 'inStock', headerName: 'Stock', width: 200 },
        
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
                    <Link to={`/products/${params.row._id}`}> <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutlined onClick={()=>handleDelete(params.row._id)} className="productListDelete"/>
                 </>
                    )
            }
          }
      ];

  return <div className="productList">
            <DataGrid
                rows={products}
                columns={columns}
                disableSelectionOnClick
                pageSize={7}
                getRowId={row=> row._id}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
  </div>;
};

export default ProductList;
