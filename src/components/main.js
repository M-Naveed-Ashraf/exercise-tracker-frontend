import React, { useEffect } from 'react';
// import { useHistory } from 'react-router';
import Sidebar from './sidebar';
import './index.css';
import Card from './card';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/test'
import Header from './header';
import TopNavbar from './Topnavbar';

function Main(props) {
    useEffect(() => {
        props.fetchUsers();
    });
    return (
        <>
            <input type="checkbox" name="hiddenToggleCheckBox" id="hiddenToggleCheckBox"></input>
            <Sidebar />
            <div className="main-content">
                <TopNavbar></TopNavbar>
                <Header></Header>
                <div className="row card-wrapper">
                    {props.list.length >0 ? <Card /> : <p className="text-white text-center mt-5">Nothing To Show</p> }
                </div>
            </div>
            
        </>
    )
}


const mapStateToProps = state => {
    return {
      list : state.reducer.users
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
