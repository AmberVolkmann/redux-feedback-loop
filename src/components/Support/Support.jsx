import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    render() {
        return (
            <>
                <h2>Support</h2>
                {/* <button><Link to="/customer-information">next page</Link></button> */}
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Support);