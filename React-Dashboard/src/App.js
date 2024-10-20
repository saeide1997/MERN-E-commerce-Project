import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from './Pages/UserList';
import User from "./Pages/User";
import NewUser from "./Pages/NewUser";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import NewProduct from "./Pages/NewProduct";
import LoginPage from "./Pages/LoginPage";
import OrderList from "./Pages/OrderList";
import Order from "./Pages/Order";
import { createBrowserHistory } from 'history';
import Analisys from "./Pages/Analisys";
const history = createBrowserHistory();

function App() {
  // const admin = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.isAdmin
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/login" element={<LoginPage/>} />
          </Routes>

      {/* if(admin){ */}
        {/* <> */}
      <Topbar />
      <div className="containerr">
        <Sidebar />
        <Routes  history={history}>
          <Route path="/" element={<Home/>} />
          <Route path= "/userList" element={<UserList/>} />
          <Route path= "/user/:userId" element={<User/>} />
          <Route path= "/newUser" element={<NewUser/>} />
          <Route path= "/products" element={<ProductList/>} />
          <Route path= "/product/:Id" element={<Product/>} />
          <Route path= "/newProduct" element={<NewProduct/>} />
          <Route path= "/orders" element={<OrderList/>} />
          <Route path= "/order/:orderId" element={<Order/>} />
          <Route path= "/analisys" element={<Analisys/>} />
          <Route path="*" element={''} />
        </Routes>
        </div>
        {/* </>} */}
    </BrowserRouter>

  );
}

export default App;
