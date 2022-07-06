import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './router/Home/Home';
import Navbar from './components/Navbar/Navbar'
// import Register from './router/register/Register';
import SignIn from './router/Sign-in/SignIn';
import Footer from './components/Footer/Footer';
import Cart from './router/cart/Cart';
import Admin from './router/Admin/Admin';
import ProductSingle from './router/productsSingle/ProductsSingle';
import BannerProd from './router/BannerProd/BannerProd';
import SecondProd from './router/SecondProd/SecondProd';
import BrandProd from './router/BrandProd/BrandProd';
import BrandSingle from "./router/BrandSingle/BrandSingle"
import SecondSingle from "./router/SecondSingle/SecondSingle"
import SearchItem from "./components/SearchItem"
import { ToastContainer } from 'react-toastify';
// import { toast  } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/search/:itemId" component={SearchItem}/>
              <Route path="/cart" component={Cart} />
              {/* <Route path="/register" component={Register}/> */}
              <Route path="/signin" component={SignIn}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/bannerProd" component={BannerProd}/>
              <Route path="/brandProd" component={BrandProd}/>
              <Route path="/secondProducts" component={SecondProd}/>
              <Route path="/home/secondProducts/:id" component={SecondSingle}/>
              <Route path="/home/brandProd/:id" component={BrandSingle}/>
              <Route path="/home/bannerProd/:id" component={ProductSingle}/>
            </Switch>
            <ToastContainer />
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
