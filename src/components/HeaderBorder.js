import React from 'react';

const HeaderBorder = (props) =>{
    return (
        <div className="content-wrapper">
            <div className={props.color}></div>
        </div>
    );
}

export default HeaderBorder;