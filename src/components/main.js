import React from 'react';
import { useHistory } from 'react-router';
import Sidebar from './sidebar';
import './index.css';
function Main() {

    let history = useHistory()

    return (
        <>
            <Sidebar />
            <h1>Dashboard</h1>
            <button >Add New Task</button>
        </>
    )
}

export default Main
