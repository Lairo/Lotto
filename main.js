
var values = []
var drawPool = [];
var players = [];
var currentPlayer = 0;
var e = 0;
var sharedArray = [];
var addBtn, pickBtn, beginBtn, luckyBtn, readyBtn, startBtn;

//filling our values number 59 gets generated here
for (let e = 1; e < 10 + 1; e++) {
  values.push(e);
}


//this is creating the number selection pool
function createDrawPool() {
  drawPool = [];
  for (var i = 0; i < values.length; i++) {
    // var pool = { Value: values[i] };
    drawPool.push(values[i]);
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
    div_player.className = 'col';
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
function begin() {
  createDrawPool();
  mix59();
  createPlayers(2);
  createPlayersUI();
  currentPlayer = 0;
  sharedArray = [];


  document.getElementById('player_' + currentPlayer).classList.add('active');
  luckyBtn.removeAttribute("disabled");
  startBtn.removeAttribute("disabled");
  pickBtn.removeAttribute("disabled");
  document.getElementById("poolCount").style.visibility = "hidden";
}

// this initialises the initial numbers (one at a time) and takes it out of the draw pool,
// pushes it to the players hand and removes it from the draw pool
function luckySelection() {

  for (var i = 0; i < 1; i++) {
    for (var x = 0; x < players.length; x++) {
      pool = drawPool.pop();
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
  el.innerHTML = pool + '';
  return el;
}

// pop a number from the draw pool to the current player (numbers are pre-randomised in mix59 function)
function lucky() {
  if (players[0].Selection.length == 5) {
    luckyBtn.disabled = true;
    readyBtn.disabled = false;

  } else if (players[1].Selection.length == 5)
    luckyBtn.disabled = true;

  var pool = drawPool.pop();
  players[currentPlayer].Selection.push(pool);
  sharedArray.push(pool);
  renderPool(pool, currentPlayer);
  e++;
  updatePool();
}
// Disables all option buttons, to not affect the current numbers, Initiates the rolls for the comparison
function ready() {
  currentPlayer = 1;
  luckyBtn.disabled = true;
  readyBtn.disabled = true;
  startBtn.disabled = true;
  pickBtn.disabled = true;
  nText.disabled = true;  
  createDrawPool();
  mix59();
  for (x = 0; x < 6; x++) {
    var pool = drawPool.pop();
    players[currentPlayer].Selection.push(pool);
    sharedArray.push(pool);
    renderPool(pool, currentPlayer);
    e++;
    updatePool();
  }
  evaluate(compare(players[0].Selection, players[1].Selection));
  // compare(players[0].Selection, players[1].Selection);
  console.log(compare(players[0].Selection, players[1].Selection));
}

// The function compares two player arrays and pushes the numbers that match into single array
function compare(arr1, arr2) {
  return arr1.filter(
    item => arr1.includes(item) && arr2.includes(item)
  )  
}

// draws six balls for the player 
function start() {
  
  createDrawPool();
  mix59();
  for (x = 0; x < 6; x++) {
    if (players[0].Selection.length == 5) {
      luckyBtn.disabled = true;
      readyBtn.disabled = false; }    
    var pool = drawPool.pop();
    players[currentPlayer].Selection.push(pool);
    sharedArray.push(pool);
    renderPool(pool, currentPlayer);
    e++;
    updatePool(); 
    
}
  luckyBtn.disabled = true;
  readyBtn.disabled = false;
  startBtn.disabled = true;
  pickBtn.disabled = true;
  nText.disabled = true;
  
}

//Scoring system, based on the number of the values withing the array 
function evaluate(item) {
  var pool = document.getElementById('poolCount');
  if (item.length == 6) {
    document.getElementById("poolCount").style.visibility = "visible";
    return document.getElementById('poolCount').innerHTML = 'YOU WON 500 POINTS!';
  } else if (item.length == 5) {
    document.getElementById("poolCount").style.visibility = "visible";
    return document.getElementById('poolCount').innerHTML = 'YOU WON 200 POINTS!';
  } else if (item.length == 4) {
    document.getElementById("poolCount").style.visibility = "visible";
    return document.getElementById('poolCount').innerHTML = 'YOU WON 100 POINTS!';
  } else if (item.length == 3) {
    document.getElementById("poolCount").style.visibility = "visible";
    return document.getElementById('poolCount').innerHTML = 'YOU WON 50 POINTS!';
  } 
}

//TODO suppose to allow player to manualy insert numbers, under construction
function pick() {
  var choice = new Array(5);

  for(count = 0; count < 5; count++)
  {
  	choice[count] = prompt("Choose a number: ", "");;
  	document.write(choice[count]+ ", ");
  }
  
  for (var i = 0; i < 1; i++) {
    for (var x = 0; x < players.length; x++) {
      pool = drawPool.pop();
      players[x].Selection.push(pool);
      renderPool(pool, x);
    }
  }
  // updatePool();
//   readyBtn.disabled = false;
//   var myArr = [];
//   var inputText = document.getElementById('inputText').value;

//   myArr.push(inputText);
//   var pval = "";
//   var pool = prompt("Choose a number: ", "");
// for (i = 0; i <= myArr.length; i++) {   
//  values.push(e);
//   pval = pval + myArr[i];
  
// }
//   console.log(i);
// document.getElementById('player_0').innerHTML = pool;

// sharedArray.push(pool);
// renderPool(pool, players[0].Selection);
// e++;
// updatePool();
// luckyBtn.disabled = true;

  // var inputText = document.getElementById('inputText').value;

  // players[currentPlayer].Selection.push(inputText);
  // var pval = "";
  // for (x = 0; x < 6; x++) {

  //   pval = pool + players[currentPlayer].Selection.values[i];
  // }
  // console.log(x);
  // document.getElementById('player_0').innerHTML = pool;

  // sharedArray.push(pool);
  // renderPool(pool, currentPlayer);
  // e++;
  // updatePool();
  // luckyBtn.disabled = true;
}

// updates the counter
function updatePool() {
  document.getElementById('poolCount').innerHTML = drawPool.length;
}

// this is where the main thread begins and it unlocks the buttons to be used
window.addEventListener('load', function () {
  beginBtn = document.getElementById("begin");
  beginBtn.addEventListener('click', begin);
  pickBtn = document.getElementById("pick");
  pickBtn.addEventListener('click', pick);
  luckyBtn = document.getElementById("lucky");
  luckyBtn.addEventListener('click', lucky);
  readyBtn = document.getElementById("ready");
  readyBtn.addEventListener('click', ready);
  startBtn = document.getElementById("start");
  startBtn.addEventListener('click', start);
  // addBtn = document.getElementById("add");
  // addBtn.addEventListener('click', start);

});

