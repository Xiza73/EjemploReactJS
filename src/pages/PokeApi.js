import React from 'react';

import CardPoke from '../components/CardPoke';
import CardPokeName from '../components/CardPokeName';

class PokeApi extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            error: null,
            next: 0,
            data: {
                results: []
            },
            validPokeName: false,
            pokeName: ""
        };
    }

    componentDidMount(){
        this.fetchCharacters();
    }

    render(){
        if(this.state.error){
            return (
                <main>
                    {`Error ${this.state.error.message}`}
                </main>
            )
        }
        return(
            <React.Fragment>
                <main>
                    <div className="form-group">
                        <input 
                            onChange={this.handleChange} 
                            onKeyDown={this.lookPoke}
                            type="text" 
                            className="form-control" 
                            id="pokeName" 
                            name="pokeName"
                            value={this.state.pokeName}
                        />
                    </div>
                    {
                        this.state.validPokeName && (
                            <div>
                                <CardPokeName 
                                    pokeName={this.state.pokeName}>
                                </CardPokeName>
                            </div>
                        )
                    }
                    {
                        !this.state.validPokeName && (
                            <div>
                                <div className="pokecard--container">
                                    {this.state.data.results.map(poke => (
                                        <CardPoke key={poke.name} poke={poke}></CardPoke>
                                    ))}
                                </div>
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
                                        <button onClick={() => this.fetchCharacters()} className="button">Load More...</button>
                                    )
                                }
                            </div>
                        )
                    }
                </main>
            </React.Fragment>
        );
    }

    fetchCharacters = async () => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.state.next}&limit=20`);
            const data = await response.json();
    
            this.setState({
                loading: false,
                next: this.state.next + 20,
                data: {
                    info: data.info,
                    results: [].concat(
                        this.state.data.results, 
                        data.results
                    )
                }
            })
        }catch(error){
            this.setState({
                loading: false,
                error
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            validPokeName: false
        })
    }

    lookPoke = (e) => {
        if (e.key === 'Enter' && this.state.pokeName !== "") {
            this.setState({
                validPokeName: true,
            })
        }
    }
}

export default PokeApi;