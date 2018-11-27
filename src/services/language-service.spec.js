import LanguageService from './language-service';

describe('LanguageService', () => {
  describe('getWords', () => {
    it('returns a list of words per language', () => {
      expect.assertions(1);

      const languageService = new LanguageService();
      const languages = ['spanish', 'italian'];

      fetch
        .once(JSON.stringify({ words: { cat: 'gato' } }))
        .once(JSON.stringify({ words: { cat: 'gatto' } }))

      return languageService.getWords(languages).then(words => {
        expect(words).toEqual({
          spanish: [
            { word: 'gato', inEnglish: 'cat' },
          ],
          italian: [
            { word: 'gatto', inEnglish: 'cat' },
          ]
        });  
      });
    });
  });
});