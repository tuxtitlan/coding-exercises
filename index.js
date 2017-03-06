var exercises = require('requirefrom')('./exercises');



[1,3,5,6].forEach(function(e){
  var exercise = exercises(e);
  console.log('\n', 'Exercise', e);
  console.time('Timing');
  console.log(exercise());
  console.timeEnd('Timing');
});
