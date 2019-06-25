import React from 'react';

function CharacterList(props) {
    console.log('props in CharacterList', props);

    return (
        <div className="App">
            <h1 className= "Header">React Wars</h1>
 
             {props.characters.map(ch => {
                console.log('characterNames', ch.name)
                return (
                    <ul className='characterNames'>Name: {ch.name}
                        <p>Mass: {ch.mass}</p>
                    </ul>
                );
            })}     
        </div> 
    );
}
export default CharacterList;