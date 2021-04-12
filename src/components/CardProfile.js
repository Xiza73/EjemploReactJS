import {Component} from 'react';

import './styles/cardProfile.css';

class CardProfile extends Component {
    render(){
        return(
            <div key={this.props.id} className="alert alert-primary" role="alert">
                {this.props.fname} {this.props.lname}
            </div>
        );
    }
}

export default CardProfile;