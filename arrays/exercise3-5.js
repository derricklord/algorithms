
var Matrix = (function(){

  return {
    _matrix: [],
    _row: [],
    _numcols: 10,
    _numrows: 10,
    _initial: 0,
    get: function(){
      return this._matrix;
    },
    construct: function(options){

        if(!options.numrows){
          options.numrows = this._numrows;
        }
        if(!options.numcols){
          options.numcols = this._numcols;
        }
        if(!options.initial){
          options.initial = this._initial;
        }
        //Does Row have (numcols) of columns
        if(this._row.length < options.numcols){
            this._row.push(options.initial) //ADD A COLUMN
            return this.construct(options)
        }else{
            this._matrix.push(this._row); //PUSH COMPLETED ROW INTO MATRIX

            //Does Matrix have (numrows) of rows
            if(this._matrix.length < options.numrows){
              this._row = [];
              this.construct(options);
            }
        }
    }
  }
})();

Matrix.construct({numcols:3, numrows:5, initial:'derrick'});
var matrix = Matrix.get();
console.log(matrix);
//console.log(Matrix._matrix);
