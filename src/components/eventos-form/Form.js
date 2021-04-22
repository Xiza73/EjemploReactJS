import React from 'react';
import '../styles/formProfile.css';

class Form extends React.Component {
    state = {
        lname: 'Fajardo' //no necesario
    };

    handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value
        });

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleClick = (e) => {
        console.log(`button was clicked`);

        this.props.history.push('/');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`form was submited`);
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fname">Nombre</label>
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        className="form-control" 
                        id="fname" 
                        name="fname"
                        value={this.state.fname}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Apellido</label>
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        className="form-control" 
                        id="lname" 
                        name="lname"
                        value={this.state.lname}
                    />
                </div>
                <button 
                    onClick={this.handleClick}
                    type="submit" 
                    className="btn btn-primary"
                >Enviar</button>
            </form>
        );
    }
}

export default Form;