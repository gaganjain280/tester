import React, { Component, useState } from 'react';
import { Col, Row, Container, Button, Spinner } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

 class ReduxStore extends Component {
      
       constructor(props, state) {
        console.log(props);
          super(props, state);
          this.state = {
            myname:props.myname,
           error: null,
           isLoaded: false,
       }
        }
 
 
  render () {
         return( 
          <div>
<h1>i am Redux store</h1>
<h1>Calling person Name = {this.state.myname}</h1>
<h1>Calling person Name = {this.props.myname}</h1>
<Button onClick={()=>{this.props.changeName("Lisha")}}>Call to lisha</Button>
          </div>
          )     
    }
 }
const mapStateToProps=(state)=>{
  return{
    myname:state.name
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeName:(name)=>{dispatch({type:'change_Name',payload:name})}//action is nothing but javascript object only and payload needs to give
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReduxStore);//connect higher order Component return karta hai