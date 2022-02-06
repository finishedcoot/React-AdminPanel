import './sidebar.css';
import {Home,Timeline,TrendingUp,Report,DynamicFeedOutlined,EmailOutlined,AddBoxOutlined,MessageOutlined,FeedbackOutlined,PersonAddAlt1Outlined,Inventory2Outlined,AssessmentOutlined,PaidOutlined} from '@mui/icons-material';
function sidebar() {
  return <div className='sidebar'>
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashbord</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <Home className='sidebarIcon'/>
            Home
          </li>
          <li className="sidebarListItem">
            <Timeline className='sidebarIcon'/>
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUp className='sidebarIcon'/>
            Sales
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <PersonAddAlt1Outlined className='sidebarIcon'/>
            Users
          </li>
          <li className="sidebarListItem">
            <Inventory2Outlined className='sidebarIcon'/>
            Products
          </li>
          <li className="sidebarListItem">
            <PaidOutlined className='sidebarIcon'/>
            Transactions
          </li>
          <li className="sidebarListItem">
            <AssessmentOutlined className='sidebarIcon'/>
            Reports
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <EmailOutlined className='sidebarIcon'/>
            Mail
          </li>
          <li className="sidebarListItem">
            <FeedbackOutlined className='sidebarIcon'/>
            Feedback
          </li>
          <li className="sidebarListItem">
            <MessageOutlined className='sidebarIcon'/>
            Messages
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Posts</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <DynamicFeedOutlined className='sidebarIcon'/>
            Archive
          </li>
          <li className="sidebarListItem">
            <AddBoxOutlined className='sidebarIcon'/>
            New
          </li>
          <li className="sidebarListItem">
            <Report className='sidebarIcon'/>
            Report
          </li>
        </ul>
      </div>
      
      
    </div>
  </div>;
}

export default sidebar;
