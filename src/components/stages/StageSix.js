import React, {useState} from 'react';
import GoButton from '../GoButton';

const StageSix = (props) => {

    const [name, changeName] = useState("")


    function handleButtonClick() {
        // props.handleName(name);
        // props.changeStage("three");
    }

    console.log(props.state);

    return (
        <div className="content-wrapper">
            <div className="two-thirds">

                <h1>Check your answers before submitting</h1>

                <table className="playback-table">
                    <tr>
                        <td>Your Name</td>
                        <td>{props.state.primary_name}</td>
                        <td>
                            <a href="">
                                Change
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>Your Address</td>
                        <td>
                            {props.state.address}<br/>
                            {props.state.postcode}
                        </td>
                        <td>
                            <a href="#">
                                Change
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Additional people that need tests</td>
                        <td>
                            {
                                props.state.residents.map((val, idx)=>{return (
                                    <span>{val.name}<br/></span>
                                )})
                            }
                        </td>
                        <td>
                            <a href="#">
                                Change
                            </a>
                        </td>
                    </tr>
                </table>

                <h3>Confirm and send your order</h3>
                <p>You will receive your tests within one week, please follow the instructions inside to complete the test and obtain your results.</p>

                <GoButton 
                    button_name="Place Order" />
            </div>
        </div>
    );
}

export default StageSix;