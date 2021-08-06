import React from 'react'

import './index.css'

const App = () => {
    return (
        <React.Fragment>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            <div id="parallax">
                <div className="layer" data-depth="0.6">
                    <div className="some-space">
                        <h1>
                            Welcome to <strong>React Starter Template</strong>
                        </h1>
                    </div>
                </div>
                <div className="layer" data-depth="0.4">
                    <div id="particles-js"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
