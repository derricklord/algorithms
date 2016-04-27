var student = {
  _grades: [],
  add: function(grade){
    if(grade > 0  && grade <= 100){
      this._grades.push(grade);
    }
  },
  average: function(){
    var total = this._grades.reduce(function(total, grade){ return total + grade}, 0);
    return total/(this._grades.length);
  }
}

student.add(100);
student.add(99);
student.add(88);
student.add(100);
console.log('Student Average: ' + student.average());
