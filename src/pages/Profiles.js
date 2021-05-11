import React from 'react';

import ListCard from '../components/ListCards';

function Profiles(props){
    const state = {
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

    const [query, setQuery] = React.useState('');

    const filtered = state.data.filter(person => {
        //return person.fname.includes(capitalize(query));  
        return `${person.fname} ${person.lname}`.includes(capitalize(query));
    })

    return(
        <React.Fragment>
            <div className="form-group">
                <input 
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }} 
                    onKeyDown={(e) => {
                        console.log(e.target.value);
                    }}
                    type="text" 
                    className="form-control" 
                    value={query}
                />
            </div>
            <ListCard 
                data={filtered}
            />
        </React.Fragment>
    );
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Profiles;