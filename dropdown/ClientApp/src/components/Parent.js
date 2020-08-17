import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            Countries: ['India', 'US', 'Singapore', 'Malaysia', 'UAE', 'France', 'Japan', 'China'],
            maxValue: 4
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ loggedIn: true })}> Login </button><p> if you click login then you can add countries</p>
                <Child Countries={this.state.Countries} maxValue={this.state.maxValue} loggedIn={this.state.loggedIn} />
            </div>
        )
    }
}
export default Parent
