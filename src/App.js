import React from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-danger">Hello world</h1>
        <FontAwesomeIcon icon={faHome} />
      </div>
    );
  }
}