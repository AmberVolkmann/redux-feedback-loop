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
                understanding: event.target.value
            })
            
        }
    
        handleClick = () => {
            this.props.history.push('/support')
            this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.understanding})
        }


    render() {
        return (
            <>
                <h2>Understanding</h2>
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

export default connect(mapStateToProps)(Understanding);