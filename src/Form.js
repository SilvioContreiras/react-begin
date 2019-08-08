import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialSate = {
            name: '',
            job: '',
        }

        this.state = this.initialSate
    }

    handleChange = event => {
        const { name: value } = event.target
    }

    render() {
        const { name, job } = this.state;


        return (
            <form>
                <label>Name</label>
                <input 
                    type='text' 
                    name='name'  
                    value={name} 
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job}
                    onChange={this.handleChange}/>
            </form>
        );
    }
}

export default Form