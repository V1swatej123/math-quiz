function addUser() {
    var num1 = document.getElementById("player1_name").value;
    var num2 = document.getElementById("player2_name").value;

    localStorage.setItem("player 1 name", num1);
    localStorage.setItem("player 2 name", num2);

    window.location = "index2.html";
}