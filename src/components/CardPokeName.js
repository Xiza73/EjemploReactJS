import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './styles/cardPoke.css'

class CardPokeName extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            error: null,
            data: {
                id: 0,
                name: null,
                types: [{
                    type: {
                        name: null
                    }
                }],
                sprites: {
                    front_default: null
                }
            }
        };
    }

    componentDidMount(){
        this.fetchCharacters();
    }

    render() {
        if(this.state.error){
            return (
                <main>
                    Not Found
                </main>
            )
        }
        return (
            <React.Fragment>
                <div key={this.props.name} className="card cardPoke">
                    {
                        /*IF LOADING*/
                        this.state.loading && (
                            <div className="loading">
                                <img src="https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif" alt=""/>
                            </div>
                        )
                    }
                    {
                        !this.state.loading && (
                            <div>
                                <img src={this.state.data.sprites.front_default} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="cardPoke--name">
                                        <h5 className="card-title">{this.state.data.name}</h5>
                                    </div>
                                    <div className="cardPoke--types">
                                        <p className="card-text">{this.state.data.types[0].type.name}</p>
                                        {
                                            this.state.data.types[1] && (
                                                <p className="card-text">{this.state.data.types[1].type.name}</p>
                                            )
                                        }
                                    </div>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        );
    }

    fetchCharacters = async () => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokeName}`);
            const data = await response.json();
    
            this.setState({
                loading: false,
                data
            })
        }catch(error){
            this.setState({
                loading: false,
                error
            })
        }
    }
}

export default CardPokeName;