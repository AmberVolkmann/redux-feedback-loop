import React, { Component } from 'react';
import { connect } from 'react-redux';
import Understanding from '../Understanding/Understanding';



class Feels extends Component {

    // // Create a state for feeling
    // state = {
    //     feels: 0,
    //         }

    // // Change the state from the inputs
    // handleChange = (event) => {
    //     this.setState ({
    //         feels: event.target.value
    //     })
        
    // }

    handleClick = () => {
        this.props.history.push('/understanding')
    }



    render() {
        return (
            <>
                <h2>Feels</h2>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feels);