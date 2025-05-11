let boxes=document.querySelectorAll(".box");
let restbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector('#new-btn');
let msgcontainer=document.querySelector('.msg-container')
let msg=document.querySelector("#msg");
let turno=true;
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const restGame= ()=>{
    turno=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
  };
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    });
  });
  const gamedraw=()=>{
    msg.innerText=`Game is a Draw`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  };
  const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
  };
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const checkwinner=()=>{
    for(let patterns of winPatterns){
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;
        if(pos1!= "" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                showwinner(pos1);
                return true;
            }
        }
    }
};
const showwinner=(winner)=>{
    msg.innerText=`Congratulations, The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
newGamebtn.addEventListener("click",restGame);
restbtn.addEventListener("click",restGame);