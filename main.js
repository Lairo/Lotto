
var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35','36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54','55', '56', '57', '58', '59']
var drawPool = [];
var players = [];
var currentPlayer = 0;
var pickBtn, startBtn, luckyBtn;

//this is creating the number selection pool
function createDrawPool() {
  drawPool = [];
  for (var i = 0; i < values.length; i++) {
    var pool = { Value: values[i] };
    drawPool.push(pool);
  }
}

// this initialising the  number of players depending on number of players (presently 1)
function createPlayers(num) {
  players = [];
  for (var i = 1; i <= num; i++) {
    var selection = [];
    var player = { ID: i, Selection: selection };
    players.push(player);
  }
}

// this function is in charge of displaying players pool dynamically
// they are appending to one another and at the end they are into 
// the players' div

function createPlayersUI() {
  document.getElementById('players').innerHTML = '';
  for (var i = 0; i < players.length; i++) {
    var div_player = document.createElement('div');
    var div_playerid = document.createElement('div');
    var div_selection = document.createElement('div');
    div_player.id = 'player_' + i;
    div_player.className = 'player';
    div_selection.id = 'selection_' + i;
    div_playerid.innerHTML = players[i].ID;
    div_player.appendChild(div_selection);
    document.getElementById('players').appendChild(div_player);
  }
}


// it takes any number out of the pool and the swaps them; does this 1000 times
function mix59() {
  for (var i = 0; i < 1000; i++) {
    var location1 = Math.floor((Math.random() * drawPool.length));
    var location2 = Math.floor((Math.random() * drawPool.length));
    var tmp = drawPool[location1];
    drawPool[location1] = drawPool[location2];
    drawPool[location2] = tmp;
  }
}

// starts when the start button is pressed and wakes up the entire code of main.js
function start() {
  createDrawPool();
  mix59();
  createPlayers(1);
  createPlayersUI();
  luckySelection();
  document.getElementById('player_' + currentPlayer).classList.add('active');
  luckyBtn.removeAttribute("disabled");
}

// this initialises the initial numbers (one at a time) and takes it out of the draw pool,
// pushes it to the players hand and removes it from the draw pool
function luckySelection() {
  for (var i = 0; i < 1; i++) {
    for (var x = 0; x < players.length; x++) {
      var pool = drawPool.pop();
      players[x].Selection.push(pool);
      renderPool(pool, x);
    }    
  }
  updatePool();
}

// it looks into the players hand and appends one ball to the player
function renderPool(pool, player) {
  var selection = document.getElementById('selection_' + player);
  selection.appendChild(getPoolUI(pool));
}

// it takes a pool number object and returns a new html element (el)
// displays the number
function getPoolUI(pool) {
  var el = document.createElement('div');
  el.className = 'pool2'
  el.innerHTML = pool.Value + '';
  return el;
}

// pop a number from the draw pool to the current player (numbers are pre-randomised in mix59 function)
function lucky() {
  var pool = drawPool.pop();
  players[currentPlayer].Selection.push(pool);
  renderPool(pool, currentPlayer);
  updatePool();
}

// updates the counter
function updatePool() {
  document.getElementById('poolCount').innerHTML = drawPool.length;
}

// this is where the main thread begins and it unlocks the buttons to be used
window.addEventListener('load', function () {
  startBtn = document.getElementById("start");
  startBtn.addEventListener('click', start);
  pickBtn = document.getElementById("pick");
  pickBtn.addEventListener('click', pick);
  luckyBtn = document.getElementById("lucky");
  luckyBtn.addEventListener('click', lucky);
});

// function pick(){
// var choice = new Array(5);

// 	for(count = 0; count < choice.length; count++)
// 	{
// 		choice[count] = prompt("Choose a number: ", "");;
// 		document.write("Number " + choice[count] + "<br/>");
//   }
// }



  // var nr1 = document.getElementById('nr1');

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


