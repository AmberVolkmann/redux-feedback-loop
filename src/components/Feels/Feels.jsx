import React, { Component } from 'react';
import { connect } from 'react-redux';
import Understanding from '../Understanding/Understanding';



class Feels extends Component {

    // Create a state for feeling
    state = {
        feels: 0,
            }

    // Change the state from the inputs
    handleChange = (event) => {
        this.setState ({
            feels: event.target.value
        })
        
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push('/understanding');
        this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feels})
    }



    render() {
        return (
            <>
                <h2>Feels</h2>
                <form>
                <input type="number" placeholder="Enter A Number 1-5"
                onChange={(event) => this.handleChange(event)}></input>
                <button onClick={this.handleClick}>Next</button>

                </form>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feels);