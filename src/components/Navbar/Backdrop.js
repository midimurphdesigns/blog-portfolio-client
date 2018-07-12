import React from 'react';
import { connect } from 'react-redux';

import { sideDrawerToggle } from '../../actions/side-drawer-actions';
import './Backdrop.css';

export function Backdrop(props) {
    return (
        <div
            onClick={() => {
                return props.dispatch(sideDrawerToggle())
            }}
            className="backdrop"
        />
    );
};


export default connect()(Backdrop);;