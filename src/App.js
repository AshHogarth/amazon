import React from 'react';
import Header from './components/Header';
import './style/style.css';
import HeaderBorder from './components/HeaderBorder';
import Breadcrumb from './components/Breadcrumb';
import StageOne from './components/stages/StageOne';
import StageTwo from './components/stages/StageTwo';
import StageThree from './components/stages/StageThree';
import StageThree2 from './components/stages/StageThree2';
import StageFour from './components/stages/StageFour';
import StageFive from './components/stages/StageFive';
import StageSix from './components/stages/StageSix';


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            stage : "one",
            primary_name : "",
            postcode : "",
            address : "",
            residents : []
        }
    }

    changeStage = (stage) => {
        console.log(stage);
        this.setState(()=>({
            stage
        }))
    }

    handleName = (name) => {
        this.setState(()=>({
            primary_name : name
        }));
    }

    handlePostcode = (postcode) => {
        this.setState(()=>({
            postcode
        }))
    }

    addressSelection = (address) => {
        this.setState(()=>({
            address
        }))
    }

    handleResidents = (residents) => {
        this.setState(()=>({
            residents
        }))
    }

    render(){
        return (
            <div className="App">
                <Header/>
                <HeaderBorder color="blue"/>
                <Breadcrumb/>

                {
                    this.state.stage === "one" ? 
                    <StageOne changeStage={this.changeStage}/> 
                    : ''
                }

                {
                    this.state.stage === "two" ? 
                    <StageTwo 
                        handleName={this.handleName} 
                        changeStage={this.changeStage}/>
                    : ''
                }

                {
                    this.state.stage === "three" ? 
                    <StageThree
                        changeStage={this.changeStage}
                        handlePostcode={this.handlePostcode}/>
                    : ''
                }

                {
                    this.state.stage === "three-two" ? 
                    <StageThree2
                        postcode={this.state.postcode}
                        changeStage={this.changeStage}
                        handleAddressSelection={this.addressSelection}/>
                    : ''
                }


                {
                    this.state.stage === "four" ? 
                    <StageFour
                        handleResidents={this.handleResidents}
                        changeStage={this.changeStage}/>
                    : ''
                }


                {
                    this.state.stage === "five" ? 
                    <StageFive
                        updateResidents={this.handleResidents}
                        numberOfPeople={this.state.residents}
                        changeStage={this.changeStage}/>
                    : ''
                }

                {
                    this.state.stage === "six" ? 
                    <StageSix
                        state={this.state}/>
                    : ''
                }
            </div>
          );
    }
}

export default App;
