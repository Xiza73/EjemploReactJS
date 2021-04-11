import React from 'react';

/* assets */
import './styles/profile.css';
import mayLogo from '../images/30b.jpg';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <img src={mayLogo} alt="img May"/>
                <h1>{this.props.firstName}</h1>
                <p>{this.props.lastName}</p>
                <p>{this.props.profesion}</p>
            </div>
        );
    }
}

export default Profile;