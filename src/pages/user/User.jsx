import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './user.css'

const User = () => {
  return <div className='user'>
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
          <button className="userAddButton">Create</button>
          </Link>
      </div>
      <div className="userContainer">
          <div className="userShow">
              <div className="userShowTop">
                  <img src="https://images.pexels.com/photos/3149862/pexels-photo-3149862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Santa Claus</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
              </div>
              <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                  <PermIdentity className='userShowIcon'/>
                  <span className="userShowInfoTitle">santimoose55</span>
                  </div>
                  <div className="userShowInfo">
                  <CalendarToday className='userShowIcon'/>
                  <span className="userShowInfoTitle">10.12.1699</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>

                  <div className="userShowInfo">
                  <PhoneAndroid className='userShowIcon'/>
                  <span className="userShowInfoTitle">+989121234567</span>
                  </div>
                  <div className="userShowInfo">
                  <MailOutline className='userShowIcon'/>
                  <span className="userShowInfoTitle">santaclaus@gmail.com</span>
                  </div>
                  <div className="userShowInfo">
                  <LocationSearching className='userShowIcon'/>
                  <span className="userShowInfoTitle">North Pole</span>
                  </div>
              </div>
          </div>
          <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form  className="userUpdateForm">
                  <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                          <label>Username</label>
                          <input type="text" placeholder="santimoose55" className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Full Name</label>
                          <input type="text" placeholder="Santa Claus" className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Email</label>
                          <input type="text" placeholder="santaclaus@gmail.com" className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Phone</label>
                          <input type="text" placeholder="+989121234567" className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Address</label>
                          <input type="text" placeholder="North Pole" className='userUpdateInput' />
                      </div>
                  </div>
                  <div className="userUpdateRight">
                      <div className="userUpdateUpload">
                          <img src="https://images.pexels.com/photos/3149862/pexels-photo-3149862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="santa" className='userUpdateImg' />
                          <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                          <input type="file" id="file" style={{display:'none'}}/>
                      </div>
                      <button className="userUpdateButton">Update</button>
                  </div>
              </form>
          </div>
      </div>
  </div>;
};

export default User;
