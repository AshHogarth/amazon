import React, {useState} from 'react';
import GoButton from '../GoButton';

const StageFive = (props) => {

    // const [residents, changeResidents] = useState(0)


    function handleButtonClick(id, event) {

       
        props.updateResidents(props.numberOfPeople);
        props.changeStage("six");
    }

    

    return (
        
        <div className="content-wrapper">
            <div className="two-thirds">

                <h1>Their Names</h1>

                {
                    props.numberOfPeople.map((val, idx)=>{return (
                        <div key={idx} className="input-wrapper">
                            <label>Full name #{idx + 1}</label>
                            <input 
                                type="text" 
                                name={"person" + idx}
                                onChange={(e)=>{
                                    console.log(e.target.value);
                                    props.numberOfPeople[idx] = {
                                        name : e.target.value
                                    }
                                }
                            }/>
                        </div>
                    )})
                }


                <GoButton 
                    onClick={handleButtonClick} 
                    button_name="Continue" />
            </div>
        </div>
    );
}

export default StageFive;