import React, { Component } from 'react';
import { connect } from 'react-redux';
import Understanding from '../Understanding/Understanding';



class Feels extends Component {
    state = {
        feeling: 0,
            }

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