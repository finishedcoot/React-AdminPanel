import "./widgetsmall.css"
import {Visibility} from '@mui/icons-material';
const WidgetSmall = () => {
  return <div className="widgetSm">
      <span className="widgetSmTitle"> New Joined Members</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImage" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Anna Lubia</span>
                  <span className="widgetSmJUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmBtn">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImage" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Kate Lubia</span>
                  <span className="widgetSmJUserTitle">Photographer</span>
              </div>
              <button className="widgetSmBtn">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/783941/pexels-photo-783941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetSmImage" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Peter Lubia</span>
                  <span className="widgetSmJUserTitle">Writer</span>
              </div>
              <button className="widgetSmBtn">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImage" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Sir Mushi</span>
                  <span className="widgetSmJUserTitle">Senior Manager</span>
              </div>
              <button className="widgetSmBtn">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
      </ul>
  </div>;
};

export default WidgetSmall;
