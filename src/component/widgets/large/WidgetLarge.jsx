import "./widgetLarge.css"
import { useEffect, useState } from "react";
import { userRequest } from "../../../redux/requestMethodes";
import { format } from "timeago.js";

const WidgetLarge = () => {

  const [orders,setOrders] = useState([])


  useEffect(() => {
    const getOrders = async () =>{
      try{
        const res = await userRequest.get("order")
        setOrders(res.data)

      }catch(err){
        console.log(err);
      }
    }

    getOrders()

  }, []);

  // useEffect(()=>{
   
  //   const getOrders = async () =>{
  //     try{
  //       const res = await userRequest.get("order")
  //       console.log(res)
  //       setOrders(res.data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   getOrders()
  // },[])

  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }


  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        </thead>
        <tbody>
        {orders.map((order) => (
          
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
          
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLarge;
