/*


The player selects 6 individual numbers from the range 1-59.

6 Balls are then drawn randomly from the 59 balls available.

Prizes are awarded for matching 3, 4, 5 and 6 Ball numbers.
3 = 50
4 = 100
5 = 200
6 = 500

*/

// 
var pool = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13','14','15',]
var drawPool = [];
var pickBtn, startBtn, luckyBtn;


function createDrawPool() {
  drawPool = [];
  for (var i = 0; i < deck.lenght; i++) {
    drawPool.push(pool);
  }
  console.log(pool);
}
var nr1 = document.getElementById('nr1');

function start() {
    createDrawPool();
    

  }

  function pick(){
  var choice = new Array(5);
		
		for(count = 0; count < choice.length; count++)
		{
			choice[count] = prompt("Choose a number: ", "");;
			document.write("Number " + choice[count] + "<br/>");
    }
  }

  window.addEventListener('load', function() {
    startBtn = document.getElementById("start");
    startBtn.addEventListener('click', start);
    pickBtn = document.getElementById("pick");
    pickBtn.addEventListener('click', pick);
    luckyBtn = document.getElementById("lucky");
    luckyBtn.addEventListener('click', lucky);
  });



// function change_digit(val) {
//   document.getElementById('digit1').innerHTML = "First Number:  " + val;
//   console.log(val);
//   var val = nr1.value;

// }

// function change_digit2(val) {
//   document.getElementById('digit2').innerHTML = "Second Number:  " + val;
//   console.log(val);

//   var val = nr1.value;

// }
// function change_digit3(val) {
//   document.getElementById('digit3').innerHTML = "Third Number:  " + val;
//   console.log(val);

//   var val = nr1.value;

// }
// function change_digit4(val) {
//   document.getElementById('digit4').innerHTML = "Fourth Number:  " + val;
//   console.log(val);

//   var val = nr1.value;

// }
// function change_digit5(val) {
//   document.getElementById('digit5').innerHTML = "Fifth Number:  " + val;
//   console.log(val);

//   var val = nr1.value;

// }


