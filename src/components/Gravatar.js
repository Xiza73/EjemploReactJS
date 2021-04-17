import React from 'react';
 
import md5 from 'md5';

function Gravatar(props){
    const user = props.user;
    const hash = md5(user);
    
    return(
        <img src={`http://gravatar.com/avatar/${hash}?d=identicon`} alt="gravatar"/>
    )
}

export default Gravatar;