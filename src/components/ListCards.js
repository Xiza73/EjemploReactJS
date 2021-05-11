import {Component} from 'react';
import PropTypes from 'prop-types';

import CardProfile from './CardProfile';
import './styles/listCards.css';

class ListCards extends Component {
    render(){
        return (
            <div className="list">
                <ul>
                    {this.props.data.map(card => {
                        return (
                            <CardProfile 
                                key={card.id}
                                id={card.id}
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

ListCards.propTypes = {
    data: PropTypes.array.isRequired
}

export default ListCards;