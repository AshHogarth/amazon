import React, {useState} from 'react';
import GoButton from '../GoButton';

const StageThree2 = (props) => {

    const [address, changeAddress] = useState("address 1")

    function handleButtonClick() {
        
        props.handleAddressSelection(address)
        props.changeStage("four");
    }

    return (
        <div className="content-wrapper">
            <div className="two-thirds">

                <h1>What is your address?</h1>

                <p>We'll send the testing kit to this address</p>

                <p className="postcode">Postcode</p>
                <p className="postcodeValue">{props.postcode}</p>

                <div className="input-wrapper">
                    <label>Select an address</label>
                    <select onChange={(e)=>{
                        console.log(e.target.value)
                        changeAddress(e.target.value);
                    }}>
                        <option value="address 1">Address 1</option>
                        <option value="address 2">Address 2</option>
                        <option value="address 3">Address 3</option>
                        <option value="address 4">Address 4</option>
                        <option value="address 5">Address 5</option>
                    </select>

                </div>

                <a href="#" className="link">
                    I can't find my address in this list
                </a>

                <GoButton
                    onClick={handleButtonClick} 
                    button_name="Select address" />
            </div>
        </div>
    );
}

export default StageThree2;