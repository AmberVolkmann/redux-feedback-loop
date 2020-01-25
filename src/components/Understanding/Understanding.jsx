import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    render() {
        return (
            <>
                <h2>Understanding</h2>
                {/* <button><Link to="/customer-information">next page</Link></button> */}
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understanding);