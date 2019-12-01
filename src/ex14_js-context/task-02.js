function Hangman(word) {
    this.word = word.toLowerCase();
    this.result = [];
    this.errors = 6;
    this.wrongLetters = [];

    for (let i = 0; i < word.length; i++) {
        wrongLetters.push("_");
    }
    this.getGuessedString = function () {
        let stringResult = '';
        for (let i = 0; i < this.result; i++) {
            stringResult += this.result[i];
        }
        return stringResult;
    }
    this.getErrorsLeft = function () {
        return this.errors;
    }
    this.getWrongSymbols = function () {
        return this.wrongLetters;
    }
    this.getStatus = function () {
        return getGuessedString() + '| errors left ' + this.errors;
    }
    this.guess = function (letter) {
        if (this.word.includes(letter)) {
            for (let i = 0; i < this.word.length; i++) {
                if (this.word[i] === letter) {
                    this.result[i] = letter;
                }
            }
        }
        this.message = this.result.join('');
        if (!this.result.includes('_')) {
            this.message += ' | You won!';

        } else {
            this.errors -= 1;
            this.wrongLetters.push(letter);
            this.message = `wrong letter, errors left ${this.errors} | ${this.wrongLetters.join(',')}`;
        }
        return this.message;
    }
}
module.exports = Hangman();