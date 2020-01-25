import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {

        // Create a state for feeling
    state = {
        comments: 0,
        }
    
    // Change the state from the inputs
    handleChange = (event) => {
        this.setState ({
            comments: event.target.value
        })
            
    }
    
    handleClick = () => {
        this.props.history.push('/review')
    }

    render() {
        return (
            <>
                <h2>Comments</h2>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments);