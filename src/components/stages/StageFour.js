import React, {useState} from 'react';
import GoButton from '../GoButton';

const StageFour = (props) => {

    const [residents, changeResidents] = useState(0)


    function handleButtonClick() {

        var residentsArray = [{
            name : ""
        }];
        for(var i = 1; i<residents; i++){
            residentsArray.push({
                name : ""
            });
        }
        console.log(residentsArray);

        props.handleResidents(residentsArray);
        props.changeStage("five");
    }

    return (
        <div className="content-wrapper">
            <div className="two-thirds">

                <h1>Does anyone else in your home need a test?</h1>

                <p>This does not include yourself</p>

                <div className="input-wrapper">
                    <label>Number of people</label>
                    <input 
                        type="number" 
                        onChange={(e)=>{
                            console.log(e.target.value);
                            changeResidents(e.target.value)
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

export default StageFour;