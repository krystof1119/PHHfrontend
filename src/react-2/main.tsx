import * as React from 'react';
import RainbowButton from "./rainbowButton";
import ManualAdder from "./manualAdder";
import {useState} from "react";
import {useQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";

export default function MainComponent() {
    let [currentInput, setCurrentInput] = useState('');
    let [currentVar, setCurrentVar] = useState('');
    const {data, loading} = useQuery(gql`
    query getData($var: String!, $browserId: String!){
        res(var: $var, browserId: $browserId)
    }
    `, {variables: {var: currentVar, browserId: localStorage.getItem('browserId')}});
    return (
        <div>
            <a className="disappearing">React instance 2 loaded</a>
            <h5 style={{textAlign: 'center'}}>Don't know what to do here? Press the help button above this message.</h5>
            <RainbowButton onClick={color => setCurrentInput(currentValue => currentValue + String.fromCodePoint(color))} />
            <p>Currently, your input is: "{currentInput}"</p>
            <a>Your output is: "{loading ? '' : data.res}"</a>
            <ManualAdder onClick={string => setCurrentInput(currentValue => currentValue + string)}/>
            <br />
            <div className={'row'}>
                <button className={'col-sm btn btn-primary btn-lg btn-block'} onClick={() => {setCurrentVar(currentInput);setCurrentInput('')}}>
                    Submit
                </button>
                <button className={'col-sm btn btn-secondary btn-lg btn-block'} onClick={() => setCurrentInput('')}>
                    Reset
                </button>
            </div>
        </div>
    )
}
