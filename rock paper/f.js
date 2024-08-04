let user_s=0;
let comp_s=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#mssg");
const cntu=document.querySelector("#user_score");
const cntc=document.querySelector("#comp_score");
const comp_c=()=>{
    const options=["stone","paper","scissor"];
    let idx=Math.floor(Math.random()*3); /* math.random() gemerate no in btw 0 and 1)*/
    return options[idx];
    
}
const winnig=(win,cpc,ch)=>{
    if(win){
        msg.innerText=`YOU WIN ${ch} BEATS ${cpc}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        user_s++;
        cntu.innerText=user_s;
        console.log("you win");
    }
    else{
        comp_s++;
        cntc.innerText=comp_s;
        msg.innerText=`YOU LOSE ${cpc} BEATS ${ch}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
        cntc++;
        console.log("you lose");
    }
}
const playgame=(ch)=>{
    const cpc=comp_c();
    console.log("Computer chice",cpc);
    if(cpc===ch){
        msg.style.backgroundColor="grey";
        msg.style.color="white";
        msg.innerText="GAME DRAW";
        console.log("GAME DRAW");
    }
    else{
        let win=true;
        if(ch==="rock"){
            win=cpc==="paper"?false:true;
        }
        else if(ch==="paper"){
            win=cpc==="scissor"?false:true;
        }
        else{
            win=cpc==="rock"?false:true;
        }
        winnig(win,cpc,ch);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const ch=choice.getAttribute("id");
        console.log("your choice",ch);
        playgame(ch);
    });
});