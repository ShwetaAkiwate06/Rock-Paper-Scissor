function pick(choice) {

    let yourpick = choice; //directly we are taking it from the argument

    let options = ["Rock", "Paper", "scissor"];//ROCK=0,PAPER=1,SICSSOR=2;
    let compin = Math.floor(3 * Math.random());
    console.log(compin);
    let compick = options[compin];
    console.log(compick);
    
    document.getElementById("your").innerHTML=`<img src="${yourpick}.png" alt=""> `
    document.getElementById("computer").innerHTML=`<img src="${compick}.png" alt="">`
    
    yoursr = parseInt(document.getElementsByClassName("yourscore")[0].innerText);
    compsr = parseInt(document.getElementsByClassName("compscore")[0].innerText);
    let msge = document.getElementsByClassName("msg")[0];

    if (compick == yourpick) {
        msge.innerText = `It's a Draw!!`
        document.getElementsByClassName("yourscore")[0].innerText = yoursr;
        document.getElementsByClassName("compscore")[0].innerText = compsr;
        document.getElementsByClassName("msg")[0].classList.remove("win");
        document.getElementsByClassName("msg")[0].classList.remove("lose");
        document.getElementsByClassName("msg")[0].classList.add("draw");

    }
    else if ((compick == "Rock" && yourpick == "Scissor") ||
        (compick == "Paper" && yourpick == "Rock") ||
        (compick == "Scissor" && yourpick == "Paper")) {
        msge.innerText = `Congo,You Won!!\n`;
        document.getElementsByClassName("yourscore")[0].innerText = yoursr + 1;
        document.getElementsByClassName("msg")[0].classList.remove("lose");
        document.getElementsByClassName("msg")[0].classList.remove("draw");
        document.getElementsByClassName("msg")[0].classList.add("win");

    }
    else {
        msge.innerText = `Oops,You Lost!!\n`;
        document.getElementsByClassName("compscore")[0].innerText = compsr + 1;
        document.getElementsByClassName("msg")[0].classList.remove("draw");
        document.getElementsByClassName("msg")[0].classList.remove("win");
        document.getElementsByClassName("msg")[0].classList.add("lose");

    }
    
}
function reset(){
   // document.getElementById("myForm").reset(); this doesnt work beacuse they are  not form inputs.
   
    document.getElementsByClassName("yourscore")[0].innerText = "0";
    document.getElementsByClassName("compscore")[0].innerText = "0";
    document.getElementById("your").innerHTML = "You";
    document.getElementById("computer").innerHTML = "Computer";
    document.getElementsByClassName("msg")[0].innerText = "Pick your Move!!";
    document.getElementsByClassName("msg")[0].className = "msg"; // Remove all classes
}