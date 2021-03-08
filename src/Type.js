import React from 'react';

const Type = ({ type }) => {
    return (
        <div className={`${type} text-white w-24 text-center font-roboto rounded-full`}>
            {type}
        </div>
    );
}

export default Type;
