export default {
  calculateScore(assertRatio) {
    let score;
    if (assertRatio < 0.5) {
      score = 0;
    } else if (assertRatio < 0.75) {
      score = 2.5;
    } else {
      score = 5;
    }

    return score;
  },

  extractWords(aSentence) {
    return aSentence.normalize('NFD').replace(/[\u0300-\u036f]/g,"").trim().split(' ').map(word => word.toLowerCase())
  },

  compare(appText, userText = '') {
    let response;
    const appWords = this.extractWords(appText);
    const userWords = this.extractWords(userText);

    if (appWords.length === userWords.length) {
      const matches = userWords.map((item, i) => item === appWords[i]);
      const assertCount = matches.filter(item => item).length;
      const assertRatio = assertCount / appWords.length;
      response = { score: this.calculateScore(assertRatio), hasMatches: true };
    } else {
      response = { hasMatches: false };
    }

    return response;
  }
};
