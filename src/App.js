import React, { Component } from 'react'
import "../src/App.css";
import { connect } from 'react-redux';

export class App extends Component {
  constructor(props) {
    super(props)
    this.props=props;

    this.state = {
       
    }
  }
  
  render() {
    return (
      <>
      <div className='cart-counter'>{this.props.counter}</div>
      <div className='btn-parent'>
      <button className='btn' onClick={()=>this.props.modifyHandler("INC",1)}>+ 1</button>
      <button className='btn' onClick={()=>this.props.modifyHandler("DEC",1)}>- 1</button>
      <button className='btn' onClick={()=>this.props.modifyHandler("INC",2)}>+ 2</button>
      <button className='btn' onClick={()=>this.props.modifyHandler("DEC",2)}>- 2</button>
      </div>
      <div className='total-counter'>Your Total $ {this.props.price}</div>
      </>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    counter: state.counter,
    price : state.price,
  };
};

const mapActionToProps = (dispatch)=>{
  return{
    modifyHandler:(action,value)=>{
      dispatch({
        type : action,
        data : value,
      });
    }
  };
}

export default connect(mapStateToProps,mapActionToProps)(App);
