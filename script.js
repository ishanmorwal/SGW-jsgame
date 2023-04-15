let playerSelection=[];
function Game(){
    let random=Math.floor(((Math.random())*(3))+1);
    let firstChoice;
      if(random ===1){
         firstChoice='Snake';
      }
      else if(random ===2){
          firstChoice='Water';
      }
      else if(random ===3){
          firstChoice='Gun';
      }
      else console.log('error');
      try{
        for(let i=0;i<5;i++){
            playerSelection[i] = getPlayerSelection();
            if(i===0){      
                playRound(playerSelection[i],firstChoice);
            }
            else{
              let comSelection=computerChoice(playerSelection[i-1]);
              playRound(playerSelection[i],comSelection);
            }
           
        }
      }
      catch(e){
          console.log(e);
      }

  }

  function getPlayerSelection(){
    const choice=document.querySelector('icon');
    choice.children.namedItem('Snek').addEventListener('click',()=>{
        console.log("Snake bit")
        return 'Snake';
    });
    choice.children.namedItem('water').addEventListener('click',()=>{
        console.log("Water splashed");
        return 'Water';
    });
    choice.children.namedItem('gun').addEventListener('click',()=>{
        console.log("Gun Shot");
        return 'Gun';
    })
}
function playRound(playerSelection,comSelection){
    if(playerSelection===comSelection){
        console.log("It is a draw")
    }
    else{
        if(playerSelection==='Snake' && comSelection==='Water'){
            console.log(`Victory!.you chose ...${playerSelection} and the computer chose ...${comSelection}`)
        }
        else if(playerSelection ==='Water' && comSelection==='Gun'){
            console.log(`Victory!.you chose ...${playerSelection} and the computer chose ...${comSelection}`)
        }
        else if(playerSelection ==='Gun' && comSelection==='Snake'){
            console.log(`Victory!.you chose ...${playerSelection} and the computer chose ...${comSelection}`)
        }
        else{
            console.log(`Loss!.you chose ...${playerSelection} and the computer chose ...${comSelection}`)
        }
}
}

function computerChoice(playerSelection){
    if(playerSelection=='Snake' || playerSelection==='snake'){
        let random=Math.floor(Math.random()*10);
         if(random%2==0){
             return 'Gun'
         }
         else{return 'Snake'}
    }
    else if(playerSelection=='Water' || playerSelection==='water'){
        let random=Math.floor(Math.random()*10);
        if(random%2==0){
            return 'Snake'
        }
        else{return 'Water'}
    }
    else if(playerSelection =='Gun' || playerSelection === 'gun'){
        let random=Math.floor(Math.random()*10);
        if(random%2==0){
            return 'Water'
        }
        else{return 'Gun'}
    }
    
}


let something=getPlayerSelection();