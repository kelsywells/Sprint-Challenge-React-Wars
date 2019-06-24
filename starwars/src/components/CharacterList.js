import React from 'react';

class CharacterList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    render() {
        console.log('props in CharacterList', this.props.characters);
        return (
            <div className="App">
                <h1 className= "Header">React Wars</h1>

                {this.props.starwarsChars.map(ch => {
                    console.log(ch.name)
                    return (
                        <ul className='characterNames'>{ch.name}</ul>
                    );
                })}   
            </div> 
        );
    }
}
export default CharacterList;