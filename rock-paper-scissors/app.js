let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const gencompChoices=()=>{
    const options=['rock','paper','scissors'];
    const random=Math.floor(Math.random()*3);
    return options[random];
};
const drawGame=()=>{
    msg.innerText=`Game is Draw`;
    msg.style.backgroundColor = "#081b31";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`computer win! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userchoice)=>{
    const compchoice=gencompChoices();
    if(userchoice===compchoice){
        drawGame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});