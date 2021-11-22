import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { getExercises } from '../actions/index'
import Axios from 'axios';


function Test() {
    let [list, setList] = useState();
    Axios({
        method: "GET",
        url: "http://localhost:5000/main",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        console.log(res.data.data[0].title);
        setList  = res.data.data[0].title;
      });
    // const list = useSelector( (data) => data.RetrieveData.list);
    // const dispatch  = useDispatch()

    // const fetchExercises = () => {
    //     dispatch(getExercises());
    // }
    // useEffect( ()=> {
    //     fetchExercises();
    // },[])
    return (
        <>
            <h1 className="text-white">This is data :{list}</h1>
            <p className="text-white">{list}</p>
            
        </>
    )
}

export default Test