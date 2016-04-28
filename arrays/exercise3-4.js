var Matrix = (function(){
  return {
    _matrix: [],
    _row: [],
    _numcols: 5,
    _numrows: 7,
    _initial: 0,
    get: function(){
      return this._matrix;
    },
    construct: function(){
        if(this._row.length < this._numcols){
          this._row.push(this._initial)
          return this.construct()
        }else{
          this._matrix.push(this._row);

          if(this._matrix.length < this._numrows){
            this._row = [];
            this.construct();
          }
        }
    }
  }
})();

Matrix.construct();
var matrix = Matrix.get();
console.log(matrix);
//console.log(Matrix._matrix);
