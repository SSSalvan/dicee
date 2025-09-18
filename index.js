function rollDice(){
    var randomNum1 = Math.floor(Math.random() * 6) + 1
    var image1Path = "images/dice" + randomNum1 + ".png"
    console.log(randomNum1)
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",image1Path)

    var randomNum2 = Math.floor(Math.random() * 6) + 1
    var image2Path = "images/dice" + randomNum2 + ".png"
    console.log(randomNum2)
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",image2Path)
    
    if (randomNum1 > randomNum2) {
    document.getElementById("h1").textContent="Player 1 Wins!";
    } else if (randomNum2 > randomNum1) {
    document.getElementById("h1").textContent="Player 2 Wins! ";
    } else {
    document.getElementById("h1").textContent="Draw!";
    }

}

document.getElementById("button").onclick = rollDice


