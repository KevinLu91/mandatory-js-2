let turn = "X";
let winner = null;
let counter = 0;

let square = (document.querySelectorAll(".square"));

function startGame (){
  for(let i = 1; i <= 9; i++){
    clearBox(i);
  }
  setMessage(turn + " get's to start.")
}
startGame ()

for(let i = 0; i<square.length; i++){
  square[i].addEventListener("click", nextMove);
}

function nextMove(e){
  if (winner != null){
    setMessage(turn + " aldready won!");
  } else if(e.target.innerHTML === "") {
    e.target.innerHTML = turn;
    switchTurn ();
  } else if(winner === null && counter >= 8){
    setMessage ("it's a tie!");
  } else {
    setMessage("Pick another square");
  }

}

function switchTurn (){
   if(checkForWinner(turn)){
    setMessage("The winner is " + turn);
    winner = turn;
  } else if(turn == "X"){
    turn = "O";
    counter ++;
    setMessage ("It's " + turn +"'s turn!");
  } else {
    turn = "X";
    counter ++;
    setMessage ("It's " + turn +"'s turn!");
  }

}

function setMessage (msg){
  document.querySelector("#text").innerText = msg;
}

function checkForWinner(move){
  let result = false;
  if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)) {
        result = true;
      }
      return result;
}

function checkRow(a, b, c, move){
  let results = false;
  if(getBox(a) == move && getBox (b) == move && getBox(c) == move){
    results = true;
  }
  return results;
}

function getBox (number){
 return  document.getElementById("s" + number).innerHTML;
}

let ahref = document.querySelector("a");


ahref.addEventListener("click", clearBox);

function clearBox (){
  for(let i = 0; i<square.length; i++){
    square[i].innerHTML="";
  }
  turn = "X";
  winner = null;
  counter = 0;
  setMessage(turn + " get's to start.")
}
