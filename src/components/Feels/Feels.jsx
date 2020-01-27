import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feels extends Component {

    // Create a state for feeling
    state = {
        feels: "",
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

        // if(this.state.feels === 0) {this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feels})
        // this.props.history.push('/understanding');
        // }
        // else{alert('WAIT. TELL ME!!!!')}
    }




    render() {

        return (
            <>
                <h2>Feels</h2>
                <form>
                    <input type="number" placeholder="Enter A Number" 
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