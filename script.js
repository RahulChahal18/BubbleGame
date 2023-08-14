var timer=2;
var score=0;
var newHit;

//event bubbling :-> jispe clcik kroge wo element par event raise hoga, aur event listener naa milne par
//                   event element ke parent par listener dhundega, vha bhi na milne par event parent ke 
//                   parent ke parent par listener dhundega

document.querySelector("#pnlbtm").addEventListener("click",
    function(details){
        // alert("chal rha hu bhai");
        // console.log(details.target);   // it'll give us a div
        // console.log(details.target.textContent);  // it'll give us the number in the form of string  
        var clickedNum = Number(details.target.textContent);   // it'll give us the number in the form of int

        if(clickedNum == newHit){
            increaseScore(); 
            getNewHit();
            makeBubbles();
        }
    }
)

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    newHit = Math.floor(Math.random()*10); 
    document.querySelector("#hitval").textContent = newHit;
}

function runTimer  (){
    var timerInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            // document.querySelector("#pnlbtm").innerHTML = "";
            //or
            document.querySelector("#pnlbtm").innerHTML = `<h1>Game Over</h1>`;
        }
            
        
    },1000)
}

function makeBubbles(){
    var curr="";

    for(var i=1;i<=161;i++){
        curr += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }

    document.querySelector("#pnlbtm").innerHTML = curr;
}

makeBubbles();
runTimer();
getNewHit();
// increaseScore();