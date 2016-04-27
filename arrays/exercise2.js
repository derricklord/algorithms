var scramble = {
  _words:[],
  add: function(word){
    if(word){
      this._words.push(word);
    }
  },
  forward: function(){
    return this._words;
  },
  backward: function(){
    return this._words.reverse();
  }
}


scramble.add('dog');
scramble.add('pig');
scramble.add('cat');

console.log(scramble.forward());
console.log(scramble.backward());
