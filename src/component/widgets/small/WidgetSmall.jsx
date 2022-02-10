import "./widgetsmall.css"
import {Visibility} from '@mui/icons-material';
import { useEffect, useState } from "react";
import { userRequest } from "../../../redux/requestMethodes";
const WidgetSmall = () => {

const [users,setUsers] = useState([])

useEffect(()=>{
  const getUsers = async () =>{
    try{
      const res = await userRequest.get("users/?new=true")
      setUsers(res.data)
    }catch(err){
      console.log(err)
    }
  }
  getUsers()
},[])
  return <div className="widgetSm">
      <span className="widgetSmTitle"> New Joined Members</span>
      <ul className="widgetSmList">
        {users.map((user)=>(
            <li className="widgetSmListItem" key={user._id}>
            <img src={user.img||"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" className="widgetSmImage" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.name}</span>
                <span className="widgetSmJUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmBtn">
              <Visibility className="widgetSmIcon"/>
              Display
            </button>
            </li>
        ))}
         
          
      </ul>
  </div>;
};

export default WidgetSmall;
