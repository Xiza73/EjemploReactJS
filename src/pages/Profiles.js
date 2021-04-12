import React from 'react';

import ListCard from '../components/ListCards';

class Profiles extends React.Component {
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
            <React.Fragment>
                <ListCard 
                    data={this.state.data}
                />
            </React.Fragment>
        );
    }
}

export default Profiles;