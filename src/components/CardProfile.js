import {Component} from 'react';
import PropTypes from 'prop-types';

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

CardProfile.propTypes = {
    id: PropTypes.string.isRequired,
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired
}

export default CardProfile;