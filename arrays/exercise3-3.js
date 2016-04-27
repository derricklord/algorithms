
var weekTemps = (function(){

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

  return {
    _month: Matrix(5,7,0),
    _weekAverage: [],
    add: function(week, day, temp){
      this._month[week-1][day-1] = temp;
    },
    average: function(){
      var _that = this;

      this._month.forEach(function(week){
          var total = 0;
          var average = 0.0;
          var length = 0;

          week.forEach(function(day){
            if(day>0){
              total += day;
              length += 1;
            }
          });

          average = total/length;

          if(average){
            _that._weekAverage.push(average.toFixed(2));
          }else{
            _that._weekAverage.push(0);
          }
      });
    },
    display: function(){
      console.log(this._month);
      console.log(this._weekAverage);
    }
  }
})();

console.log(typeof(weekTemps));

weekTemps.add(1,1, 88);
weekTemps.add(1,2, 78);
weekTemps.add(1,3, 74);
weekTemps.add(2,1, 89);
weekTemps.add(2,2, 87);
weekTemps.add(2,3, 83);
weekTemps.average();
weekTemps.display();
