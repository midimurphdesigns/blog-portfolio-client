import React from 'react';
import { connect } from 'react-redux';

import { sideDrawerToggle } from '../../actions/side-drawer-actions';
import './DrawerToggleButton.css';

export function DrawerToggleButton(props) {
    console.log('side drawer toggle button props', props)
    return (
        <button
            onClick={() => {
                return props.dispatch(sideDrawerToggle())
            }}
            className="toggle-button"
        >
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
        </button>
    );
};

// export default (DrawerToggleButton);
export default connect()(DrawerToggleButton);