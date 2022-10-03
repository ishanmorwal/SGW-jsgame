const comSel = (round,flag,value)=>{
    let rand=Math.floor(Math.random()*3+1);
    if(round===1){
        if(rand==1){
            value="Snake";
        }
        else if(rand==2){
            value="Water";
        }
        else{value="Gun"}
    }
    else{
        let prevUserSel=userSel[round-1];
        switch(prevUserSel){
            case "Snake": 
            if(rand%2==0){
                value="Gun";
                flag=true
            }
            else value="Snake";
            case "Water":
                if(rand%2==0){
                    value="Snake";
                    flag=true
                }
                else value="Water";
            case "Gun":
                if(rand%2==0){
                    value="Water";
                    flag=true
                }
                else value="Gun";
        }
    }
    console.log(comSel);
    return comSel;
}
const userSel={};

const Game= (Uscore,Cscore) =>{
    let numRound = 5;
    for(let i=1;i<=numRound;i++){
        comSel['round']=i;
        userSel[i]=window.prompt("Enter your champion!:");
        if(comSel['value']===userSel[i]){
            console.log("DRAW");
            return (Uscore,Cscore)+1;
        }
        else{
            if(comSel['flag']==true){
                return Cscore+1
            }
            else return Uscore+1;
        }
    }
    if(Cscore>Uscore) console.log('You lose');
    else if(Cscore<Uscore) console.log('You win');
}