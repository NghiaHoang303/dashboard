import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import './App.css'
import {useContext, useState} from 'react'
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
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {firebase} from '../src/config/firebase-config'
import {Context} from '../src/context/Context'

function App() {
  const {user} = useContext(Context)

  const [isUserSignIn, setIsUserSignIn] = useState(true)
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      return setIsUserSignIn(true)
    }
    setIsUserSignIn(false)
  })

  if(isUserSignIn === true) {
    return (
      <Router>
        <div className="App">
          <TopBar/>
          
          <div className="container">
            <SideBar />
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
    )
  }
  else {
    return (
      <Router>
        <div className="App">
          <TopBar/>
          <div className="container">
            {/* <SideBar/> */}
            <Switch>
              {/* <Route  exact path="/">
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
              </Route> */}
  
              <Route exact path= "/register">
                <Register/>
              </Route> 
              <Route exact path= "/login">
                <Login/>

              </Route>
            
            </Switch> 
              
          </div>
        </div>
  
             
      </Router>
        );
  }
  
}

export default App;
