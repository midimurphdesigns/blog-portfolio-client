import React from 'react';

import './ScrollTop.css'

export default function ScrollTop(props) {
    return (
        <button className="scroll-top" onClick={() => window.location.assign('#header')}>Scroll to Top</button>
    )
}