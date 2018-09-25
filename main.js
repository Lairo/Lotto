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
var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13','14','15','16',
'17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35',
'36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54',
'55','56','57','58','59']
var drawPool = [];
var players = [];
var currentPlayer = 0;
var pickBtn, startBtn, luckyBtn;


function createDrawPool() {
  drawPool = [];
  for (var i = 0; i < values.lenght; i++) {
    var pool = {Value: values[i]};
    drawPool.push(pool);
  }  
}
var nr1 = document.getElementById('nr1');

function start() {
    createDrawPool();
    createPlayers(1);
    createPlayersUI();
    document.getElementById('player_' + currentPlayer).classList.add
    ('active');
    lucky.removeAttribute("disabled");
    

  }

  function createPlayers(num) {
    players = [];
    for (var i = 1; i <= num; i++){
        var pool = [];
        var player = { ID: i, Pool: pool};
        players.push(player);
    }
  }

  function createPlayerUI() {
    document.getElementById('players').innerHTML ='';
    for (var i = 0; i < players.lenght; i++){
      var div_player = document.createElement('div');
      var div_playerid = document.createElement('div');
      var_selection = document.createElement('div');
      div_player.id = 'player_' + i;
      div_player.className = 'player';
      div_selection.id = 'selection_' + i;
      div_playerid.innerHTML = player[i].ID;
      div_player.appendChild(div_selection);
      document.getElementById('players').appendChild(div_player);
    }
  }

  function lucky() {
    var pool = drawPool.pop();
    players[currentPlayer].Hand.push(card);
    render
    updatePool()
  }

  function pick(){
  var choice = new Array(5);
		
		for(count = 0; count < choice.length; count++)
		{
			choice[count] = prompt("Choose a number: ", "");;
			document.write("Number " + choice[count] + "<br/>");
    }
  }

  function renderPool(pool, player) {
    var pool = document.getElementById('pool_' + player);
    pool.appendChild(getPoolUI(pool));
  }

  function getPoolUI(pool){
    var el = documennt.createElement('div');
    el.innerHTML = pool.Value + '';
    return el;
  }

  function updatePool() {
    document.getElementById('poolCount').innerHTML = deck.length;
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


