import React from 'react'
import './Cube.css'

function Cube() {
    return (
        <div className="cube div">
            <div className="top div"></div>
            <div className="div">
                <span className="span" style="--i: 0">
                    <p>loading..</p>
                    <p>loading..</p>
                </span>
                <span className="span" style="--i: 1">
                    <p>loading..</p>
                    <p>loading..</p>
                </span>
                <span className="span" style="--i: 2">
                    <p>loading..</p>
                    <p>loading..</p>
                </span>
                <span className="span" style="--i: 3">
                    <p>loading..</p>
                    <p>loading..</p>
                </span>
            </div>
        </div>

    )
}

export default Cube
