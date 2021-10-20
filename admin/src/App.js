import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import './app.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./pages/login/Login";
function App() {
  let admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.isAdmin || null;
  return (
    <Router>
      <Switch>
            <Route path="/login">
              <Login />
            { admin && <Redirect to='/'></Redirect>}
            </Route>
        { admin && (
          <>
          <Topbar />
          <div className="container">
              <Sidebar />
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/users">
                    <UserList />
                  </Route>
                  <Route path="/user/:userId">
                    <User />
                  </Route>
                  <Route path="/newUser">
                    <NewUser />
                  </Route>
                  <Route path="/products">
                    <ProductList />
                  </Route>
                  <Route path="/product/:productId">
                    <Product />
                  </Route>
                  <Route path="/newproduct">
                    <NewProduct />
                  </Route>
            </div>
            </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
