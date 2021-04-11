import { Component } from 'react';

import '../styles/profile.css';

class PropUse extends Component {
    render(){
        return (
            <div className="profile">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                <p>{this.props.cont}</p>
            </div>
        );
    }
}

export default PropUse;