import PropTypes from 'prop-types';
import React from 'react';
import './word-of-the-day.css';

const WordOfTheDay = ({ inEnglish, index, language, word }) => {
  const colors = ['#f44336', '#673ab7', '#2196f3', '#4caf50'];
  const color = colors[index % colors.length];

  return (
    <div className="word-of-the-day" style={{ backgroundColor: color }}>
      <div className="word-of-the-day__language" data-test-language={ true }>
        { language }
      </div>
      <div className="word-of-the-day__container">
        <h2 className="word-of-the-day__word" data-test-word={ true }>
          { word }
        </h2>
        <p className="word-of-the-day__english" data-test-in-english={ true }>
          { inEnglish }
        </p>
      </div>
    </div>
  );
};

WordOfTheDay.propTypes = {
  inEnglish: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired
}

export default WordOfTheDay;