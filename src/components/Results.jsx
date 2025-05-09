import React from 'react'
//components

import Lense from './Lense';

function Results({ data,category }) {
    return (
        <div className="results">
            {
                data.map((item, index) => (
                    <Lense
                        key={index}
                        lense={item}
                      
                    />
                ))
            }
        </div>
    )
}

export default Results