import { Link, useLocation } from "react-router-dom";
import Chart from "../../component/charts/Chart"
import {productData}from "../../data/sampleData"
import { Publish } from '@mui/icons-material';
import "./product.css"
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../redux/requestMethodes";

const Product = () => {
    const location = useLocation()
    const productId = location.pathname.split("/")[2]
    const [productStats,setProductStats] = useState([])
    
    const product = useSelector(state=> 
        state.product.products.find(product=> product._id === productId))

        const MONTHS = useMemo(
            ()  => [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            []
          )

useEffect(()=>{
  const getStats = async () =>{
      try{
          const res = await userRequest.get(`order/income?paid=${productId}`)
          const list = res.data.sort((a,b)=>{
              return a._id - b._id
          })
          list.map((item) => 
          setProductStats((prev)=>
          [
              ...prev,
              { name: MONTHS[item._id-1],Sales: item.total}
          ]))
             }catch(err){
                 console.log(err);
             }
         }
         getStats()
       },[])


  return <div className="product">
      <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newProducts">
          <button className="productAddButton">Create</button>
          </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productStats} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">6000</span>
                  </div>
 
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={product.title} />
                  <label>Product Description</label>
                  <textarea id="w3review" name="w3review" rows="4" cols="50">
{product.desc}
</textarea>
                  <label>Product Price</label>
                  <input type="text" placeholder={product.price} />
                  <label>In Stock</label>
                  <select name="inStock" id="inStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>

              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:'none'}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>

      </div>

  </div>;
};

export default Product;
