import {
    Component
} from 'react';

import PropUse from './PropUse';

class Props extends Component {
    render() {
        return ( 
            <PropUse 
            title = "Props"
            content = "Hace al componente más dinámico"
            cont = "Envía variables a través del componente que la usa" />
        );
    }
}

export default Props;