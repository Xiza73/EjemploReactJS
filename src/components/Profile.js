import React from 'react';

/* assets */
import './styles/profile.css';
import Gravatar from './Gravatar';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <Gravatar user={this.props.user} alt="img May"/>
                <h1>{this.props.firstName || 'First Name'}</h1>
                <p>{this.props.lastName || 'Last Name'}</p>
                <p>{this.props.profesion || 'Job'}</p>
                <p>@{this.props.user || 'Username'}</p>
            </div>
        );
    }
}

export default Profile;