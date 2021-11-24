import React from "react";
import { FaHome, FaTasks, FaCog, FaUserAlt, FaTimes } from "react-icons/fa";
import { useHistory } from 'react-router';


const Sidebar = () => {
    let url="";

    let history = useHistory()

    return(
        <>
            {/* <div className="sidebar-wrapper"> */}
                <div className="sidebar">
                    <div className="brand">
                        <span className="lab la-affiliatetheme"></span>
                        <h2>Fitin'fit</h2>
                        <div>
                            <label className="closebtn" for="hiddenToggleCheckBox" >
                                <span className="FaTimes"><FaTimes /></span>
                            </label>
                        </div>
                    </div>
                    <div className="sidemenu">
                        <div className="side-user">
                            <div className="side-img"></div>
                            <div className="user">
                                <small>Trainer</small>
                                <p>Let's Start Training</p>
                            </div>
                        </div>

                        <ul className="nav-links">
                            <li>
                                <a href={url} onClick={ (e) => {
                                    e.preventDefault();
                                    history.push('/main')
                                    }} className="active text-decoration-none">
                                    <span><FaHome /></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href={url} onClick={ (e) => {
                                    e.preventDefault();
                                    history.push('/tasks')
                                    }} className="text-decoration-none">
                                    <span><FaTasks /></span>
                                    <span>Tasks</span>
                                </a>
                            </li>
                            {/* <li>
                                <a className="text-decoration-none">
                                    <span><FaHistory /></span>
                                    <span>History</span>
                                </a>
                            </li> */}
                            <li>
                                <a href={url} className="text-decoration-none">
                                    <span><FaCog /></span>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href={url} onClick={() => {
                                    e.preventDefault();
                                    history.push('/')
                                    }} className="text-decoration-none">
                                    <span><FaUserAlt/></span>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
};


export default Sidebar;