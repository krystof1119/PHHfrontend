import * as React from 'react';
import RainbowButton from "./rainbowButton";
import ManualAdder from "./manualAdder";
import {gql} from "apollo-boost";
import ApolloClient from "apollo-client";
import {withApollo} from 'react-apollo';

class MainComponent extends React.Component<{ client: ApolloClient<object> }, { currentInput: string, output: string }> {
    constructor(props) {
        super(props);
        this.state = {
            currentInput: '',
            output: ''
        };

        this.setCurrentInput = this.setCurrentInput.bind(this);
        this.doQuery = this.doQuery.bind(this);
    }

    setCurrentInput(val: string) {
        this.setState({
            currentInput: val
        })
    }

    doQuery() {
        this.props.client.query({
            query: gql`query getData($var: String!, $browserId: String!){
                res(var: $var, browserId: $browserId)
            }`, variables: {var: this.state.currentInput, browserId: localStorage.getItem('browserId')}
        })
            .then(res => {
                console.log(res.data.res);
                this.setState({output: res.data.res})
            });
    }

    render() {
        return (
            <div>
                <a className="disappearing">React instance 2 loaded</a>
                <h5 style={{textAlign: 'center'}}>Don't know what to do here? Press the help button above this
                    message.</h5>
                <RainbowButton
                    onClick={color => this.setCurrentInput(this.state.currentInput + String.fromCodePoint(color))}/>
                <p>Currently, your input is: "{this.state.currentInput}"</p>
                <textarea disabled value={this.state.output} className={'form-control purple-border'} rows={5}/>
                <br/>
                <ManualAdder onClick={string => this.setCurrentInput(this.state.currentInput + string)}/>
                <br/>
                <div className={'row'}>
                    <button className={'col-sm btn btn-primary btn-lg btn-block'} onClick={() => {
                        this.doQuery();
                        this.setCurrentInput('')
                    }}>
                        Submit
                    </button>
                    <button className={'col-sm btn btn-secondary btn-lg btn-block'}
                            onClick={() => this.setCurrentInput('')}>
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}

export default withApollo(MainComponent);
