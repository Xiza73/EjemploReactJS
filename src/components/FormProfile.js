import React from 'react';
import './styles/formProfile.css';

class FormProfile extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="fname">Nombre</label>
                    <input 
                        onChange={this.props.onChange}
                        type="text" 
                        className="form-control" 
                        name="fname"
                        id="fname"
                        value={this.props.formValues.fname}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Apellido</label>
                    <input 
                        onChange={this.props.onChange}
                        type="text" 
                        className="form-control" 
                        name="lname"
                        id="lname"
                        value={this.props.formValues.lname}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prof">Profesion</label>
                    <input 
                        onChange={this.props.onChange}
                        type="text" 
                        className="form-control" 
                        name="prof"
                        id="prof"
                        value={this.props.formValues.prof}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prof">Username</label>
                    <input 
                        onChange={this.props.onChange}
                        type="text" 
                        className="form-control" 
                        name="user"
                        id="user"
                        value={this.props.formValues.user}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        );
    }
}

export default FormProfile;