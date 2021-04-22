import React from 'react';
import './styles/formProfile.css';

function useIncreaseCount(max){
    const [count, setCount] = React.useState(0);

    if(count > max){
        setCount(0);
    }

    return [count, setCount];
}

function FormProfile(props){
        const [users, setUser] = React.useState(0);
        const [count, setCount] = useIncreaseCount(4);

        return (
            <form>
                <div className="form-group">
                    <label htmlFor="fname">Nombre</label>
                    <input 
                        onChange={props.onChange}
                        type="text" 
                        className="form-control" 
                        name="fname"
                        id="fname"
                        value={props.formValues.fname}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Apellido</label>
                    <input 
                        onChange={props.onChange}
                        type="text" 
                        className="form-control" 
                        name="lname"
                        id="lname"
                        value={props.formValues.lname}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prof">Profesion</label>
                    <input 
                        onChange={props.onChange}
                        type="text" 
                        className="form-control" 
                        name="prof"
                        id="prof"
                        value={props.formValues.prof}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prof">Username</label>
                    <input 
                        onChange={props.onChange}
                        type="text" 
                        className="form-control" 
                        name="user"
                        id="user"
                        value={props.formValues.user}
                    />
                </div>
                <button onClick={() => {
                    setUser(users + 1);
                    setCount(count + 1);
                }} type="button" className="btn btn-primary">Enviar</button>
                <p className="mt-2">Users: {users}</p>
                <p className="mt-2">Count: {count}</p>
            </form>
        );
}

export default FormProfile;