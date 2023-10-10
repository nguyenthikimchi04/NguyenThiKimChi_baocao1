import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import AddressBook from "./pages/AddressBook";
import LikedProducts from "./pages/LikedProducts";
import MyCart from "./pages/MyCart";
import CategoryCake from "./pages/CategoryCake";
import Voucher from "./pages/Voucher";
import ViewMoreCategory from "./pages/ViewMoreCategory";
import ViewMoreBestSeller from "./pages/ViewMoreBestSeller";
import AddCake from "./admin/AddCake";
import SideMenuAdmin from "./admin/SideMenuAdmin";
import Dashboard from "./admin/Dashboard";
import ProductList from "./admin/ProductList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/SideMenuAdmin" component={SideMenuAdmin} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/addcake" component={AddCake} />
          <Route path="/dashboard" component={Dashboard} />
          <Route>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/CategoryCake" exact component={CategoryCake} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/login" exact component={Login} />
              <Route path="/addressbook" exact component={AddressBook} />
              <Route path="/detail/:idcake" exact component={Detail} />
              <Route path="/likedproducts" exact component={LikedProducts} />
              <Route path="/myCart" exact component={MyCart} />
              <Route path="/Voucher" exact component={Voucher} />
              <Route path="/ViewMoreCategory" exact component={ViewMoreCategory} />
              <Route path="/ViewMoreBestSeller" exact component={ViewMoreBestSeller} />
              <Route path="/EditProfile" exact component={EditProfile} />
              <Route path="/profile" exact>
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              </Route>
              
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;

