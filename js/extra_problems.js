
/*
  This function is for practice on the extra problems
*/
(function(){

  //compare 2 numbers and output results
  function getRelationship(x,y){

    //"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
    var str;

    if(isNaN(x) && isNaN(y)){
      str = "Can\'t compare relationships because " + x + " and " + y + " are not numbers";
    }else if(!isNaN(x) && isNaN(y)){
      str = "Can\'t compare relationships because " + y + " is not a number";
    }else if(isNaN(x) && !isNaN(y)){
      str = 'Can\'t compare relationships because ' + x + " is not a number";
    }else if(!isNaN(x) && !isNaN(y)){
      //have 2 numbers
      if(x == y) str = '=';
      if(x > y) str = '>';
      if(x < y) str = '<';
    }
    return str;
  }

  var tests = {
    t1: ['a','b'],
    t2: [1,'b'],
    t3: ['a',2],
    t4: [2,2],
    t5: [3,2],
    t6: [1,2],
    t7: [NaN],
    t8: [NaN, undefined],
    t9: ['NaN', undefined]
  };

  for(t in tests){
    if(tests[t].length = 2) console.log('Test: '+t + ' -> ' + tests[t] + '\n\t' + getRelationship(tests[t][0],tests[t][1]));
    else console.log('Test: '+t + ' -> ' + tests[t] + '\n\t' + getRelationship(tests[t][0]));
  }

})();