let gameseq=[];
let userseq=[];
let btns = ["yellow","red","green","purple"];

let started=false;
let level=0;

let h2= document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started = true;


        levelup()

    }

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;

let randIdx = Math.floor(Math.random() * 3);
let randclr = btns [randIdx];
let randbtn = document.querySelector(`.${randclr}`);
// console.log(randbtn);
// console.log(randIdx);
// console.log(randclr);
gameseq.push(randclr);
console.log(gameseq);

    gameFlash(randbtn);

}
function checkAns(idx){

    if(userseq[idx] === gameseq[idx]){
      if(userseq.length == gameseq.length){
       setTimeout(levelup,1000);

      }
    }else{
        h2.innerHTML = `Game Over!Your score was <b>${level}</b> <br>Press any Key`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();

    }
}



function btnPress () {
let btn = this;
userFlash(btn);

usercolour=btn.getAttribute("id");

userseq.push(usercolour);


checkAns(userseq.length-1);

}


let allbtns = document.querySelectorAll (".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress)

}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}