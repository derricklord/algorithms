var Matrix = function(numrows, numcols, initial){
  var arr = [];


  for(var i=0; i<numrows; ++i){
    var columns = [];
    for (var j=0; j<numcols; ++j){
      columns[j] = initial;
    }
    arr[i] = columns;
  }

  return arr;
}


function weekTemps(){
  this.datastore =  Matrix(5, 7, 0);
  this.add = add;
  this.average = average;
  this.display = display;
}

function add(temp, week, day){
  console.log(temp + ' '+  week + ' ' + day);
  console.log(typeof(week));
  console.log(typeof(day));
  console.log(this.datastore[week][day]);
}

function average(){
  /*var total = 0;
  for(var i=0; i= this.datastore.length; ++i){
    total += this.datastore[i];
  }
  return total/this.datastore.length;
  */
}

function display(){
  //this.datastore[1][1] = 'a';
  console.log(this.datastore);
}



var month = new weekTemps();

month.add(1,1,88);
month.display();
