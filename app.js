let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#newbtn");
let newgamebtn= document.querySelector(".newbtn");
let msgcontainer=document.querySelector(".message-cont")
let msg=document.querySelector(".mes")
let turnO=true;



const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const reset=()=>{
    turO=true;
    enableboxes();
    msgcontainer.classList.add("hide")

}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       
        if(turnO===true){
            box.innerText="O";
            turnO=false;
           
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
         checkwinner();
    });
});

const checkwinner=()=>{
            for(let pattern of winpatterns){
                
                    let position1=boxes[pattern[0]].innerText;
                    let position2=boxes[pattern[1]].innerText;
                   let position3= boxes[pattern[2]].innerText;

                   if(position1!="" && position2!=""  && position3!="" ){
                       if(position1==position2 &&position2==position3){
                        
                        showwinner(position1)
                       }
                       else
                       Mes.innerText="match draw "
                   }
            }
        }

const showwinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

newgamebtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);