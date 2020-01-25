import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {

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
    
    handleClick = () => {
        this.props.history.push('/success')
    }

    render() {
        return (
            <>
                <h2>Review</h2>
                <button onClick={this.handleClick}>Submit</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);