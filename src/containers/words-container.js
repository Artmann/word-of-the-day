import React, { Component } from 'react';
import LanguageService from '../services/language-service';
import WordOfTheDay from '../components/word-of-the-day';

export default class WordsContainer extends Component {
  constructor(props) {
    super(props);

    this.languageService = new LanguageService();

    this.state = {
      isLoading: true,
      words: {}
    }
  }

  componentDidMount() {
    const { languages } = this.props;

    this.languageService.getWords(languages).then(words => {
      this.setState({
        isLoading: false,
        words
      });
    });
  }

  render() {
    const { isLoading } = this.state;
    const { day, languages } = this.props;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        { languages.map((language, key) => this.renderLanguage(day, language, key)) }
      </div>
    );
  }

  renderLanguage(day, language, key) {
    const words = this.state.words[language];
    const index = day % words.length;
    const { word, inEnglish } = words[index];

    return <WordOfTheDay
      key={ key }
      index={ key }
      inEnglish={ inEnglish }
      language={ language }
      word={ word }
      />
  }
}
