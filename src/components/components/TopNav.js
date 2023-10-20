import React from "react";
import "../stylesheets/ApplicationDashboard.css";

function TopNav() {
    return (
        <>
        <div className="top-nav">
            <div id="top-nav-rgt">
                <p>
                    Hello, John Doe
                    {/* <span class="icon"><IoIosHand /></span>  */}
                </p>
            </div>
            <div id="top-nav-lft">
                <img
                    class="pfp-icon"
                    src="https://akns-images.eonline.com/eol_images/Entire_Site/201614/rs_634x1024-160204100727-634.Backstreet-Boys-Celeb-Crushes-JR-020416.jpg?fit=around%7C776:1254&output-quality=90&crop=776:1254;center,top"
                    alt="profile picture"
                ></img>
            </div>
        </div>
        <hr id="top-nav-hr"></hr>
        </>
    );
}

export default TopNav;
