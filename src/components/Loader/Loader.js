import React from 'react';

import Loader from 'react-loader-spinner';
export default class App extends React.Component {
    render() {
        return (
            <div className="Loader-container">
                <Loader
                    type="Oval"
                    color="#3f51b5"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            </div>
        );
    }
}
