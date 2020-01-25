import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    // Create a state for feeling
    state = {
        support: 0,
    }
        
    // Change the state from the inputs
    handleChange = (event) => {
        this.setState ({
            support: event.target.value
        })
                
    }
        
    handleClick = () => {
        this.props.history.push('/comments')
    }

    render() {
        return (
            <>
                <h2>Support</h2>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Support);