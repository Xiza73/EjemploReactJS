import React from 'react';

/*Components*/
import Profile from '../components/Profile';
import FormProfile from '../components/FormProfile';

class MainProfile extends React.Component {
    state = {
        form: {
            fname: '',
            lname: '',
            prof: '',
            user: ''
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <section className="editProfile">
                        <FormProfile 
                            onChange={this.handleChange} 
                            formValues={this.state.form}
                        />
                        <Profile 
                            firstName={this.state.form.fname}
                            lastName={this.state.form.lname}
                            profesion={this.state.form.prof}
                            user={this.state.form.user}
                        />
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default MainProfile;