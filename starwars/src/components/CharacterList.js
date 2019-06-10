import React from 'react';
import App from './App.js';

class CharacterList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.starwarsChars}
            </div>
        )
    }
}


export default CharacterList;