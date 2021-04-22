import React from 'react';

/*Components*/
import Navbar from './Navbar';

function Layout(props){
    //const children = props.children;
    return (
        <React.Fragment>
            <nav>
                <Navbar/>
            </nav>
            <main>
                {props.children}
            </main>
            <footer>
                
            </footer>
        </React.Fragment>
    );
}

export default Layout;