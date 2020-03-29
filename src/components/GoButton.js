import React from 'react';

const GoButton = (props) => {

    return(
        <button onClick={()=>{
                props.onClick(props.nextStage)
            }} 
            className="go-button">
            {props.button_name}
        </button>
    );
}

export default GoButton;