import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Layout from "./component/layout/Layout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin && (
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/newProducts" element={<NewProduct />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
