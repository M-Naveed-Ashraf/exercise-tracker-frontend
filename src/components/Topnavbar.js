import React from "react";
import { FaBell, FaBookmark, FaCommentAlt, FaBars } from "react-icons/fa";

const TopNavbar = () => {

    return(

        <>
        <header>
            <label for="hiddenToggleCheckBox" class="menu-toggle">
                <span> <FaBars /> </span>
            </label>
            <div class="search">
                <span class="las la-search"></span>
                <input type="search" name="search" id="search" placeholder="Enter Keyword" />
            </div>
            <div class="head-icons">
                <span> <FaBell /></span>
                <span> <FaBookmark /> </span>
                <span> <FaCommentAlt /> </span>
            </div>
        </header>
        </>


    );

};


export default TopNavbar;