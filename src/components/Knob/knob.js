import React from 'react';

const knob = (props) => {
    return (
        <div>
            <h3>This is dial</h3>
            <p>Dial Code: {props.dialCode}</p>
        </div>
    );
};

export default knob;