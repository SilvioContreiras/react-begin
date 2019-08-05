import React, { Component } from 'react'


const TableHeader =  () => (
    <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
    </thead>    
)

const TableBody = () => (
    <tbody />
)

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table