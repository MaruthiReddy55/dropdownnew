import React, { Component } from 'react';
import { Route } from 'react-router';

import Parent from './components/Parent';

export default class App extends Component {
  displayName = App.name

  render() {
      return (
          <div style={{ padding: "50px" }}>
              <Parent />
          </div>
    );
  }
}
