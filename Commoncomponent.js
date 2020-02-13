import React,{Component} from 'react';
 import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CommonComponent.css';
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import PaginationPage from "./components/Pagination.js";
import 'tachyons';
import ProductCategories from "./components/ProductCategories.js";
import Testwill from "./components/Testwill.js";
import SingleProductPage from './components/SingleProductPage.js';
import Cart from './components/AddToCart.js';
import ReduxStore from './components/ReduxStore.js';

class Commoncomponent extends Component {
// class App extends Component {
  render() {
    return (
      <div className="Home">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Header" component={Header} />
            <Route exact path="/ProductCategories" component={ProductCategories} />
            <Route exact path="/Testwill" component={Testwill} />
            <Route exact path="/Pagination" component={PaginationPage} />
            <Route exact path="/product/:id" component={SingleProductPage}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/ReduxStore" component={ReduxStore}/>
            
          </div>
        </Router>
      </div>
    );
  }
}
export default Commoncomponent;