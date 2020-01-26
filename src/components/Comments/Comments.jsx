import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {

        // Create a state for feeling
    state = {
        comments: ''
        }
    
    // Change the state from the inputs
    handleChange = (event) => {
        this.setState ({
            comments: event.target.value
        })
            
    }
    
    handleClick = () => {
        this.props.history.push('/review');
        this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state.comments})
    }

    render() {
        return (
            <>
                <h2>Comments</h2>
                <form>
                <input type="text" placeholder="Comments"
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

export default connect(mapStateToProps)(Comments);