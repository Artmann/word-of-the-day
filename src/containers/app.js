import React, { Component } from 'react';
import WordsContainer from './words-container';

class App extends Component {
  constructor() {
    super();

    this.state = {
      day: this.dayOfTheYear(),
      languages: ['spanish', 'italian']
    }
  }

  dayOfTheYear() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const firstOfJanuary = new Date(year, 0, 1, 12, 0, 0);
    const today = new Date(year, month, date, 12,0,0);
    const diff = Math.round((today - firstOfJanuary) / 864e5);

    return diff + 1;
  }

  render() {
    const { day, languages } = this.state;

    return (
      <WordsContainer day={ day } languages={ languages }/>
    );
  }
}

export default App;
