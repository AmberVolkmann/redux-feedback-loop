import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    // Create a state for feeling
    state = {
        support: '',
    }
        
    // Change the state from the inputs
    handleChange = (event) => {
        this.setState ({
            support: event.target.value
        })
                
    }
        
    handleClick = () => {
        this.props.history.push('/comments')
        this.props.dispatch({type: 'ADD_SUPPORT', payload: this.state.support})
    }

    render() {
        return (
            <>
                <h2>Support</h2>
                
                <input type="number" placeholder="Enter A Number 1-5"
                onChange={(event) => this.handleChange(event)}></input>
                <button onClick={this.handleClick}>Next</button>

                
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Support);