import React, {useState} from 'react';
import GoButton from '../GoButton';

const StageTwo = (props) => {

    const [name, changeName] = useState("")


    function handleButtonClick() {
        props.handleName(name);
        props.changeStage("three");
    }

    return (
        <div className="content-wrapper">
            <div className="two-thirds">

                <h1>What is your name?</h1>

                <div className="input-wrapper">
                    <label>Full Name</label>
                    <input 
                        type="text" 
                        onChange={(e)=>{
                            console.log(e.target.value);
                            changeName(e.target.value)
                        }
                    }/>
                </div>

                <GoButton 
                    onClick={handleButtonClick} 
                    button_name="Continue" />
            </div>
        </div>
    );
}

export default StageTwo;