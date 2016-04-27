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


var weekTemps = {
  _dataStore: Matrix(5,7,0),
  _weekAverage: [],
  add: function(week, day, temp){
    this._dataStore[week-1][day-1] = temp;
  },
  average: function(){
    var total = 0;
    var average = 0.0;
    var length = 0;
    for(var i=0; i<this._dataStore.length; ++i){ //Average each week
      for (var j=0; j<this._dataStore[i].length; ++j){ //Examine each day
        if(this._dataStore[i][j]>0){
          total += this._dataStore[i][j];
          length += 1;
        }
      }

      average = total/length;

      if(average){
        this._weekAverage.push(average.toFixed(2));
        ///console.log('Week '+ parseInt(i+1) + ' average: ' + average.toFixed(2));
      }else{
        //console.log('Week '+ parseInt(i+1) + ' average: No Data');
        this._weekAverage.push(0);
      }

      total = 0;
      average = 0.0;
      length = 0;

    }
  },
  display: function(){
    console.log(this._dataStore);
    console.log(this._weekAverage);
  }
}


weekTemps.add(1,1, 88);
weekTemps.add(1,2, 78);
weekTemps.add(1,3, 74);
weekTemps.add(2,1, 89);
weekTemps.add(2,2, 87);
weekTemps.add(2,3, 83);
weekTemps.average();
weekTemps.display();
