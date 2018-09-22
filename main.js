/*


The player selects 6 individual numbers from the range 1-59.

6 Balls are then drawn randomly from the 59 balls available.

Prizes are awarded for matching 3, 4, 5 and 6 Ball numbers.
3 = 50
4 = 100
5 = 200
6 = 500

*/

var nr1 = document.getElementById('nr1');


function change_digit(val){
  document.getElementById('digit1').innerHTML = "First Number:  " + val;
  console.log(val);
  var val = nr1.value;  
  
}

function change_digit2(val){
  document.getElementById('digit2').innerHTML = "Second Number:  " + val;
  console.log(val);

  var val = nr1.value;  
  
}
function change_digit3(val){
  document.getElementById('digit3').innerHTML = "Third Number:  " + val;
  console.log(val);

  var val = nr1.value;  
  
}
function change_digit4(val){
  document.getElementById('digit4').innerHTML = "Fourth Number:  " + val;
  console.log(val);

  var val = nr1.value;  
  
}
function change_digit5(val){
  document.getElementById('digit5').innerHTML = "Fifth Number:  " + val;
  console.log(val);

  var val = nr1.value;  
  
}

