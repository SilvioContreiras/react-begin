
import React, { Component } from 'react'
import Table from './Table'
import Form from './Form';

class App extends Component {

    state = {
        characters: [],
    }

    removeCharacter = index => {

        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state

        return (
             /* characterData is not a reserved keyword  is a kind of how we passa data through data- */ 

            <div className='container spaceTop'>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App