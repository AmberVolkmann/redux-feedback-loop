import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

        // Create a state for feeling
        state = {
            understanding: 0,
                }
    
        // Change the state from the inputs
        handleChange = (event) => {
            this.setState ({
                feels: event.target.value
            })
            
        }
    
        handleClick = () => {
            this.props.history.push('/support')
        }


    render() {
        return (
            <>
                <h2>Understanding</h2>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understanding);