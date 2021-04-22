import React from 'react';

class CicloVida extends React.Component {
    constructor(props){
        super(props);
        console.log(`1. constructor()`);

        this.state = {
            dato: "Soy un dato",
            fname: "fname from state"
        };
    }

    componentDidMount(){
        console.log(`3. componentDidMount()`)

        this.timeoutId = setTimeout(() => {
            this.setState({
                fname: "Era yo! Dio"
            })
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()');

        console.log({
            prevProps: prevProps,
            prevState: prevState
        })
        console.log({
            props: this.props,
            state: this.state
        })
    }

    componentWillUnmount(){
        console.log(`6. componentWillUnmount()`);

        clearTimeout(this.timeoutId); //Problema al cerrar el componente
    }

    render(){
        console.log(`2/4. render()`)
        return(
            <React.Fragment>
                {this.state.dato}
                <div className="form-group">
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        className="form-control" 
                        id="fname" 
                        name="fname"
                        value={this.state.fname}
                    />
                </div>
            </React.Fragment>
        );
    }

    handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value
        });

        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

export default CicloVida;