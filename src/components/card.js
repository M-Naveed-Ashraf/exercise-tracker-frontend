import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/test';
// import { FaRunning, FaCheck, FaEdit } from "react-icons/fa";
import CardBtn from "./cardBtn";
// import CardHeader from "./cardHeader";


const Card = (props) => {
    useEffect(() => {
        props.fetchUsers();
    }, [])
    return(
        <>
        {
        props.list.map( (elem) => {
            return (
                    <div className="card col-lg-5 shadow-lg">
                        <div className="card-body">
                            {/* <CardHeader Activity_Type={elem.Activity_Type}></CardHeader> */}
                            <div className="row g-0 mb-3">
                                <div className="col-4 card-list-items">
                                    <ul className="user-constants">
                                        <li>ID:</li>
                                        <li>Name:</li>
                                        <li>Description:</li>
                                        <li>Activity Type:</li>
                                        <li>Duration:</li>
                                        <li>Date:</li>
                                    </ul>
                                </div>
                                <div className="col-8 card-list-items">
                                    <ul>
                                        <li key={`key01-${elem.Id}`}>{elem.Id}</li>
                                        <li key={`key02-${elem.Id}`}>{elem.title}</li>
                                        {/* <li key={`key03-${elem.Id}`}>{elem.Description}</li> */}
                                        {/* <li key={`key04-${elem.Id}`}><FaRunning /> {elem.Activity_Type}</li> */}
                                        <li key={`key05-${elem.Id}`}>15 Minutes</li>
                                        {/* <li key={`key06-${elem.Id}`}>{elem.Task_Date}</li> */}
                                    </ul>
                                </div>
                            </div>
                            <CardBtn id={elem.Id}></CardBtn>
                        </div>
                    </div>
                    )
                })
            }
        </>
    );
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
  )(Card)