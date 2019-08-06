
import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
    render() {
        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspiring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]


        return (

             /* characterData is not a reserved keyword  is a kind of how we passa data through data- */ 

            <div className='container'>
                <Table characterData={characters} />
            </div>
        )
    }
}

export default App