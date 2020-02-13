import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; 
import Commoncomponent from './Commoncomponent';
 import * as serviceWorker from './serviceWorker';
import './components/WooConnection.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
const store=createStore(reducer);// need to put reducer in it and can be one thaan oe reducre
ReactDOM.render(<Provider store={store}><Commoncomponent /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
 serviceWorker.unregister();
 