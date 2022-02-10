import Chart from '../../component/charts/Chart';
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo';
import'./home.css';
import {userData} from "../../data/sampleData"
import WidgetSmall from '../../component/widgets/small/WidgetSmall';
import WidgetLarge from '../../component/widgets/large/WidgetLarge';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../redux/requestMethodes';

const Home = () => {
  
  const [userStats,setUserStats] = useState([])
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
const getStats = async() =>{
  try{
    const res = await userRequest.get("users/stats")
   
    res.data.map(item=>
        setUserStats(prev=>[
          ...prev,
          {name:MONTHS[item._id-1],"Active User":item.total}
        ])
      )

  }catch(err){
    console.log((err));
  }
  
}

getStats()
},[MONTHS])


  return <div className='home'>
      <FeaturedInfo/>
      <Chart data={userStats ? userStats : []} title={'User Analytics'} grid dataKey={"Active User"}/>
      <div className='homeWidgets'>
        <WidgetSmall/>
        <WidgetLarge/>
      </div>
  </div>;
};

export default Home;
