// app.js

// Imports necessary to run a React application.
import React from 'react';
import ReactDOM from 'react-dom';

// The React application class.
class App extends React.Component {
    render() {
        return 'Hello world!';
    }
}

// Render the <App> in the <div class="app"></div> element found in the DOM.
ReactDOM.render(
    <App />,
    document.querySelector( '.app' )
);