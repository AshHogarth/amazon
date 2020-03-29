import React from 'react';
import Crown from '../assets/crown.svg';


const Header = () => {
    return(
        <div className="header">
            <div className="content-wrapper">
                <div className="header-content">
                    <div className="logo-title-wrapper">
                        <img src={Crown} alt="crown"/> 
                        <span>GOV.UK</span>
                    </div>
                    <div className="search-box-wrapper">
                        <input type="text" placeholder="Search (doesn't work!)"/>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;