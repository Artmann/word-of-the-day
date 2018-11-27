import React from "react";
import { mount } from "enzyme";
import WordOfTheDay from './word-of-the-day';

describe('WordOfTheDay', () => {
  let component;
  beforeEach(() => {
    const props = {
      inEnglish: 'man',
      index: 0,
      language: 'spanish',
      word: 'hombre'
    };

    component = mount(<WordOfTheDay { ...props } />);
  });

  it('displays the language', () => {
    const language = component.find('[data-test-language]').text();

    expect(language).toBe('spanish');
  });

  it('displays the word', () => {
    const word = component.find('[data-test-word]').text();

    expect(word).toBe('hombre');
  });

  it('displays the word in english', () => {
    const inEnglish = component.find('[data-test-in-english]').text();

    expect(inEnglish).toBe('man');
  });

  it('changes color depending on index', () => {
    const props = {
      inEnglish: 'man',
      language: 'spanish',
      word: 'hombre'
    };

    const component1 = mount(<WordOfTheDay { ...props } index={ 0 } />);
    const component2 = mount(<WordOfTheDay { ...props } index={ 1 } />);
    const component3 = mount(<WordOfTheDay { ...props } index={ 2 } />);

    expect(component1.find('.word-of-the-day').get(0).props.style)
      .toHaveProperty('backgroundColor', '#f44336');
    
    expect(component2.find('.word-of-the-day').get(0).props.style)
      .toHaveProperty('backgroundColor', '#673ab7');

    expect(component3.find('.word-of-the-day').get(0).props.style)
      .toHaveProperty('backgroundColor', '#2196f3');
  });
});