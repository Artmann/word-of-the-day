export default class LanguageService {
  async getWords(languages = []) {
    const promises = languages.map(language => {
      return fetch(`/languages/${language}.json`)
        .then(response => response.json())
        .then(({ words }) => [language, words])
    });

    const words = await Promise.all(promises);

    return words.reduce((carry, item) => {
      const language = item[0];
      const englishWords = Object.keys(item[1]);
      const wordsInLanguage = Object.values(item[1]);

      carry[language] = wordsInLanguage.map((value, index) => {
        return {
          word: value,
          inEnglish: englishWords[index]
        }
      });

      return carry;
    }, {});
  }
}
