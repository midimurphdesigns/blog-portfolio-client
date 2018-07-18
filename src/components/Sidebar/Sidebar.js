import React from 'react'

const Sidebar = (props) => (
    <div
        style={{
            border: '2px solid #3a3f44',
            maxWidth: 960,
            padding: '0.5rem',
            marginBottom: '25px',
            background: '#F8F9FA',
        }}
    >
        <strong>{props.title}.</strong> {props.description}
    </div>
);

export default Sidebar