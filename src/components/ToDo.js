// import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { FaRunning } from "react-icons/fa";
// import { AddToDo } from '../actions/index';
import Sidebar from './sidebar';

function ToDo() {

    // let [inputData, setInputData] = useState('');
    // const dispatch = useDispatch();
    // const list = useSelector((abc) => abc.TodoReducer.list)
    const list = useSelector((abc) => abc.AddTaskReducer.list)

    // function func(e) {
    //     if(e.KeyboardEvent.which === '13') {
    //         alert('abc')
    //     }
    //     // if(e.charCode === "Enter") {
    //     //     alert('abc');
    //     // }
        
    // }

    window.addEventListener('keydown', function(e){
        // const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`)
        
        // const animation= document.querySelector(`.key[data-key="${e.keyCode}"]`)
        // audio.currentTime= 0 //rewind to the start
        // audio.play()
        // console.log(e.keyCode)
        // animation.classList.add('playing')
      })

    return (
        <>
            <Sidebar></Sidebar>
            <div className="main-content text-light">
                <h2 className="text-light">All Tasks</h2>
                {/* <input type="text" placeholder="Enter the Task" value={inputData} onChange={ (event) => {setInputData(event.target.value)}} /> */}
                
                {/* <button id="btn" className="" onClick={ () => dispatch(AddToDo(inputData) , setInputData(''))}> Add </button> */}
                
                <table className="table table-dark table-stripped">
                                <tr>
                                    <th>ID:</th>
                                    <th>Name:</th>
                                    <th>Description:</th>
                                    <th>Activity Type:</th>
                                    <th>Duration:</th>
                                    <th>Date:</th>
                                </tr>
                { 
                    list.map( (elem) => {
                        return (
                            
                                <tr>
                                    <td key={`key01-${elem.Id}`}>{elem.Id}</td>
                                    <td key={`key02-${elem.Id}`}>{elem.Name}</td>
                                    <td key={`key03-${elem.Id}`}>{elem.Description}</td>
                                    <td key={`key04-${elem.Id}`}><FaRunning /> {elem.Activity_Type}</td>
                                    <td key={`key05-${elem.Id}`}>15 Minutes</td>
                                    <td key={`key06-${elem.Id}`}>{elem.Task_Date}</td>
                                </tr>
                        )
                    })
                }
                </table>
            </div>
                
            

        </>
    )
}

export default ToDo