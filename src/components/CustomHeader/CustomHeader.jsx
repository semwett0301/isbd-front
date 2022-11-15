import React from 'react';

const CustomHeader = ({positive, negative, requestFunction}) => {
    return (
        <header>
            <div>+{positive}</div>
            <button onClick={requestFunction}>Следующий год</button>
            <div>-{negative}</div>
        </header>
    );
};

export default CustomHeader;
