import React from 'react';
import GoButton from '../GoButton';

const StageOne = (props) => {

    function handleButtonClick(state) {
        props.changeStage("two");
    }

    return (
        <div className="content-wrapper">
            <div className="two-thirds">
                <h1>Order your COVID-19 Testing Kit</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in libero animi incidunt! Explicabo ipsam dicta assumenda sequi animi. Aspernatur veniam nobis est cumque modi dolores numquam quia eius tempore.
                        </p>

                <ul>
                    <li>Some fact</li>
                    <li>Something you'll need</li>
                    <li>Some fact</li>
                    <li>Something you'll need</li>
                </ul>

                <GoButton 
                    nextStage={"two"}
                    onClick={handleButtonClick} 
                    button_name="Start Now" />
            </div>
        </div>
    );
}

export default StageOne;