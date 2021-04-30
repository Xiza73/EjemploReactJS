import React, { Component } from 'react';
import update from 'react-addons-update';

class Styles extends Component {
    constructor(props){
        super(props);

        this.state = {
            red: true,
            box
        };
    } 

    changeColor() {
        this.setState({
            red: !this.state.red
        })
    }

    boxChange = () => {
        return {
            width,
            height: width,
            margin: '10px',
            cursor: 'pointer',
            backgroundColor: this.state.red ? 'red' : 'white'
        }
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.state.box}>
                    Box 1
                </div>
                <button 
                    onClick={() => {
                        this.setState(
                            update(this.state, {
                                red: {$set: !this.state.red},
                                box: {
                                    backgroundColor: {
                                        $set: this.state.box.backgroundColor === 'white' ? 'red' : 'white'
                                    }
                                }
                            })
                        )
                    }} 
                    style={this.boxChange()}
                >
                        Box Change
                </button>
            </React.Fragment>
        )
    }
}

const width = '80px';

const box = {
    width,
    height: width,
    margin: '10px',
    backgroundColor: 'red',
    borderRadius: '5px'
}

export default Styles;