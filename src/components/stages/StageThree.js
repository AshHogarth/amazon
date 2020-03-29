import React, {useState} from 'react';
import GoButton from '../GoButton';

const StageThree = (props) => {

    const [postcode, changePostcode] = useState("")

    function handleButtonClick() {
        props.handlePostcode(postcode);
        props.changeStage("three-two");
    }

    return (
        <div className="content-wrapper">
            <div className="two-thirds">

                <h1>What is your address?</h1>

                <p>We'll send the testing kit to this address</p>

                <div className="input-wrapper">
                    <label>Postcode</label>
                    <input 
                        type="text" 
                        onChange={(e)=>{
                            console.log(e.target.value);
                            changePostcode(e.target.value)
                        }
                    }/>
                </div>

                <GoButton
                    onClick={handleButtonClick} 
                    button_name="Find address" />
            </div>
        </div>
    );
}

export default StageThree;