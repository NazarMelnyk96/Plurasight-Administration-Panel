import $ from 'jquery';
import React from 'react';
import render from 'react-dom';

import HomePage from './components/HomePage';

class App extends React.Component {

    render() {
        return (
            <HomePage />
        );
    }
}

render(<App />, document.getElementById('root'));