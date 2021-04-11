import {Component} from 'react'

import CardProfile from './CardProfile';
import './styles/listCards.css';

class ListCard extends Component {
    render(){
        return (
            <div className="list">
                <ul>
                    {this.props.data.map(card => {
                        return (
                            <CardProfile 
                                key={card.id}
                                fname={card.fname}
                                lname={card.lname}
                            />
                            );
                        })}
                </ul>
            </div>
        );
    }
}

export default ListCard;