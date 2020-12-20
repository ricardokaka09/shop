import React,{useEffect} from 'react';
import './App.css';
import Header from './component/header/Header'
import Home from './component/home/Home'
import Login from './component/login/Login'
import Checkout from './component/checkout/Checkout'
import Menu from './component/menu/Menu'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import Payment from './component/payment/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Element, Elements } from '@stripe/react-stripe-js'
import {abc } from './js/script'

const promise = loadStripe('pk_test_51HU6b6BMQST2LLkiY4RQEaixDydyXY9GtxSDOsRwd4VCwqTmcJIuyskCl5fG8pY3wy8XbrVbK6kCcGVfSh5lalys00Eii4QXTx');


function App() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "./js/script.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // // return () => {
  // //     document.body.removeChild(script);
  // //   }
  // }, []);
  return (
    <Router>
      {/* <div className="app"> */}
        <Header/>
        {/* trang home phair dua den cuoi cung*/}
          <Switch>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/payment'>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </Route>
            <Route path='/paymentSuccess'>
              <h2>Payment Success</h2>
            </Route>
            <Route path='/checkout'>
              <Checkout/>
            </Route>
            <Route path='/'>
              {/* <Menu/> */}
              <Home/>
            </Route>
          </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
