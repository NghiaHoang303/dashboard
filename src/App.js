import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import './App.css'
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar/>
        <div className="container">
          <SideBar/>
          <Switch>
            <Route  exact path="/">
              <Home/>
            </Route>
            <Route path= "/user">
              <UserList />
            </Route>
            <Route path= "/users/:userId">
              <User />
            </Route>
            <Route path= "/newUser">
              <NewUser />
            </Route>
            <Route exact path= "/product">
              <ProductList />
            </Route>
            <Route path= "/product/:productId">
              <Product />
            </Route>
            <Route path= "/new-product">
              <NewProduct />
            </Route>
          </Switch>          
        </div>
      </div>
    </Router>
      );
}

export default App;
