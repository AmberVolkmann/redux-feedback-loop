import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feels extends Component {

    render() {
        return (
            <>
                <h2>Feels</h2>
                {/* <button><Link to="/customer-information">next page</Link></button> */}
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feels);