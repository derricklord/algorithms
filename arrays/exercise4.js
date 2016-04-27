var store = {
  _letters: [],
  addLetter: function(letter){
    if(letter){
      this._letters.push(letter);
    }
  },
  reverseLetters: function(){
    return this._letters.reverse();
  },
  showWord: function(){
    return this._letters.join('');
  },
  clearWord: function(){
    this._letters = [];
  },
  upperWord: function(){
     return this._letters.join('').toUpperCase()
  },
  reverseWord: function(){
    return (this._letters
                .reverse()
                .join(''))
  }
}

store.addLetter('d');
store.addLetter('o');
store.addLetter('g');

console.log(store.showWord());
console.log(store.showWord(store.reverseLetters()));
console.log(store.reverseWord());
