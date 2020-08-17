import React, { Component } from 'react'
import Select from 'react-select'

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showing: false,
           
            newArray: this.props.Countries,
            maxNumber: this.props.maxValue
        }
        this.inputChange = this.inputChange.bind(this);
    }

    addCountry = () => {
        let e = document.getElementById('searchkey').value;
        var ss = [''];
        var i = 0;
        ss = this.props.Countries;
        ss.push(e);
        console.log(ss);
        if (i, i < this.props.maxValue, i++) {


        }
        this.setState({
            newArray: ss
        })
        
    }
    inputChange(e) {
        let searchTerm = e.target.value;
        this.setState({
            newArray: this.props.Countries.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()))
        })
        console.log(e.target.value)
        console.log(this.state.newArray)
    }

    viewMore=()=> {
        var m = this.state.newArray.length;
        this.setState({
            maxNumber: m
        })
    }
    render() {
        const { showing } = this.state;
        
        return (
            <div>
                <button onClick={() => this.setState({ showing: !showing })}>Select a Location</button>
                {showing?
                    <div>
                        <input type='text' id='searchkey' onChange={(e) => { this.inputChange(e) }} />
                        {this.props.loggedIn ?
                            <button onClick={this.addCountry} type="button">Add Country</button> : null}
                        {this.state.newArray.slice(0, this.state.maxNumber).map((item) => <ul><li key={item}>{item}</li> </ul>)}
                        <a onClick={this.viewMore}> View More</a>
                    </div>
                    : null
                }
                

            </div>
        )
    }
}
export default Child