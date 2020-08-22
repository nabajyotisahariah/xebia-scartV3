import React from 'react';
import {connect} from 'react-redux'

function Wrapper(props) {
    console.log("Wrapper ",props)
    return (
        <div>
            Wrapper
            {this.props.children}
        </div>
    );
}

const mapsStateToProps = (state) => {
    return state;
}

export default connect(mapsStateToProps, null)(Wrapper);