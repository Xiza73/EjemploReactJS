import React from 'react';

/*Components*/
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import FormProfile from '../components/FormProfile';

class MainProfile extends React.Component {
    state = {
        form: {
            fname: '',
            lname: 'Fajardo',
            prof: ''
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
            <div>
                <nav>
                    <Navbar />
                </nav>
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
                        />
                    </section>
                </main>
            </div>
        );
    }
}

export default MainProfile;