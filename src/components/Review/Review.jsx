import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {

    handleClick = () => {
        // this.props.history.push('/success');
        // create variable that takes in the whole reduxStore
        axios.post('/feedback',)
        .then((response)=> {
            this.props.history.push('/success');
        }).catch((error) => {
            console.log('error with POST request', error);
        })
    }

    
    // Change the state from the inputs
    handleChange = (event) => {
        this.setState ({
            feels: event.target.value
        })
            
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