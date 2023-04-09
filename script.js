let playerSelection=[];
function Game(){
    const name=window.prompt("Enter your name:");
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
  for(let i=0;i<5;i++){
      playerSelection[i] = window.prompt(`Enter your choice ${name}:`);
      if(i===0){      
          playRound(playerSelection[i],firstChoice);
      }
      else{
        let comSelection=computerChoice(playerSelection[i-1]);
        playRound(playerSelection[i],comSelection);
      }
     
  }
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
        /*
        switch(playerSelection,comSelection){
             case 'Snake','Water':
                 console.log("You win1");
             case  'Water','Gun':
                 console.log("You win2");
             case  'Gun','Snake':
                 console.log("you win3");
             default: console.log("you lose");        

        }
    }*/
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
    else{
        throw 'INVALID';
        console.log('invalid input. Enter either Snake, Water or Gun');
        
    }
    
}


