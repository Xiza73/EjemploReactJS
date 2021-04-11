import {Component} from 'react';

import Navbar from '../components/Navbar';
import ListCard from '../components/ListCards';

class Profiles extends Component {
    state = {
        data: [
            {
                "id": "01",
                "fname": "Manuel",
                "lname": "Fajardo"
            },
            {
                "id": "02",
                "fname": "Adriana",
                "lname": "Fajardo"
            },
            {
                "id": "03",
                "fname": "Martha",
                "lname": "Astete"
            }
        ]
    }

    render(){
        return(
            <div>
                <Navbar />
                <ListCard 
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default Profiles;