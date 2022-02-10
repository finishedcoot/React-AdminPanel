import './featuredInfo.css'
import {ArrowDownward,ArrowUpward} from '@mui/icons-material';
import { useState,useEffect } from 'react';
import {userRequest} from "../../redux/requestMethodes"

const FeaturedInfo = () => {
    const [income,setIncome]= useState()
    const [percent,setPercent]= useState(0)

    useEffect(() => {
       const getIncome = async ()=>{
           try{
            const res = await userRequest.get("order/income")
          
           setIncome(res.data)
           setPercent((res.data[1].total*100)/res.data[0].total-100)
           }catch(err){

           }
       }

       getIncome()


    }, []);





  return <div className='featured'>
      <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">${income ? income[1].total*1 : ''} </span>
              <span className="featuredMoneyRate">%{Math.floor(percent)}
              {percent && percent < 0 ? (<ArrowDownward className='featuredIcon negative'/>)
              :
              <ArrowUpward className='featuredIcon'/> 
              }
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>

      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$23,415</span>
              <span className="featuredMoneyRate">-20.5<ArrowDownward className='featuredIcon negative'/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>

      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$8,415</span>
              <span className="featuredMoneyRate">5<ArrowUpward className='featuredIcon'/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>

      </div>
  </div>;
};

export default FeaturedInfo;
