import React, { Component } from 'react';
import { connect } from 'react-redux';


class Success extends Component {

    
    handleClick = () => {
        this.props.history.push('/feels')
    }

    render() {
        return (
            <>
                <h2>Success</h2>
                <button onClick={this.handleClick}>Submit Another Review</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Success);