var name_1 = localStorage.getItem("player 1 name");
var name_2 = localStorage.getItem("player 2 name");

document.getElementById("player1").innerHTML = name_1;
document.getElementById("player2").innerHTML = name_2;

var score_1 = 0;
var score_2 = 0;

document.getElementById("output1").innerHTML = score_1;
document.getElementById("output2").innerHTML = score_2;

function send() {
    document.getElementById("out").style.display = "visible";
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    answer = parseInt(num1) * parseInt(num2);

    console.log(answer);

    document.getElementById("display").innerHTML = num1 + " X " + num2;
    document.getElementById("question").innerHTML = "question turn: " + name_1;
    document.getElementById("answer").innerHTML = "answer turn: " + name_2;
}

var answer_turn = "player 2";
var question_turn = "player 1";

function check() {
   var get_num = document.getElementById("input").value;
   var num = get_num.toLowerCase();
   
   if(num == answer) 
   {
      if(answer_turn == "player 1")
      {
          score_1 = score_1 + 1;
          document.getElementById("output1").innerHTML = score_1;
      }else{
        score_2 = score_2 + 1;
        document.getElementById("output2").innerHTML = score_2;
      }
   }

   if(question_turn == "player 1")
   {
       question_turn = "player 2";
       document.getElementById("question").innerHTML = "question turn: " + name_2;
   }else{
       question_turn = "player 1";
       document.getElementById("question").innerHTML = "question turn: " + name_1;
   }
   if(answer_turn == "player 1")
   {
       answer_turn = "player 2";
       document.getElementById("answer").innerHTML = "answer turn: " + name_2;
   }else {
       answer_turn = "player 1";
       document.getElementById("answer").innerHTML = "answer turn: " + name_1;
   }
   document.getElementById("display").innerHTML = "";
   document.getElementById("input").value = "";
   document.getElementById("num1").value = "";
   document.getElementById("num2").value = "";
}