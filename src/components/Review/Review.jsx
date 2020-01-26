import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {

    handleClick = () => {
        
        // create variable that takes in the whole reduxStore
        let entireSurvey = {
            feels: this.props.reduxStore.feedback.feels,
            understanding: this.props.reduxStore.feedback.understanding,
            success: this.props.reduxStore.feedback.support,
            comments: this.props.reduxStore.feedback.comments,
        }

        axios.post('/feedback', entireSurvey)
        .then((response)=> {
            // this.props.history.push('/success');
            console.log('heres the thing', entireSurvey)
        }).catch((error) => {
            console.log('error with POST request', error);
        })
    }

    
    // // Change the state from the inputs
    // handleChange = (event) => {
    //     this.setState ({
    //         feels: event.target.value
    //     })
            
    // }
    


    render() {
        return (
            <>
                <h2>Review</h2>
                <p>Feelings: {this.props.reduxStore.feedback.feels}</p>
                <p>Understanding: {this.props.reduxStore.feedback.understanding}</p>
                <p>Support: {this.props.reduxStore.feedback.support}</p>
                <p>Comments: {this.props.reduxStore.feedback.comments}</p>
                <button onClick={this.handleClick}>Submit</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);