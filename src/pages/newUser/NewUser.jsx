import "./newUser.css";

const NewUser = () => {
  return <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form  className="newUserForm">
          <div className="newuserItem">                  
           <label>Username</label>
           <input type="text" placeholder="john" />
          </div>
           <div className="newuserItem">   
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
           </div>
           <div className="newuserItem">
            <label>Email</label>
            <input type="email" placeholder="Johndaddy@gmai.com" />
           </div>
           <div className="newuserItem">
            <label>Password</label>
            <input type="password" placeholder="password" />
           </div>
           <div className="newuserItem">
            <label>Confirm Password</label>
            <input type="password" placeholder="confirm password" />
           </div>
           <div className="newuserItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 78" />
           </div>
           <div className="newuserItem">
            <label>Address</label>
            <input type="text" placeholder="Texas | USA" />
          </div>
          <div className="newuserItem">
                <label>Gender</label>
            <div className="newUserGender">
             <input type="radio" name="gender" id="male" value="male" />
             <label for="male">Male</label>
             <input type="radio" name="gender" id="female" value="female" />
             <label for="female">Female</label>
             <input type="radio" name="gender" id="other" value="other" />
             <label for="other">Other</label>
            </div>
         </div>
              <div className="newuserItem">
                  <label>Active </label>
                  <select name="active" id="active" className="newUserSelect">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>

                  </select>
              </div>
              <button className="newUserButton">Create</button>
          </form>
  </div>;
};

export default NewUser;
