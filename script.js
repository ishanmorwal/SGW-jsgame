//Declaration of important variables, let instead of const because there is no need, the values are to be reset after each playthrough
let playerSelections=[];
let timeout=null;
let score=0;
let Computer=document.getElementById('ComIcon');

//This function is used to return whatever the Player has chosen, combined with a timeout variable 
function getPlayerSelection(){
    let timeout=null;
    let SnakePress=document.getElementById('snek');
    let WaterPress=document.getElementById('water');
    let GunPress=document.getElementById('gun');
    SnakePress.addEventListener('click',()=>{
        console.log('Snakebite');
        clearTimeout(timeout);
        setTimeout(Game('Snake'),1000);
    });
    WaterPress.addEventListener('click',()=>{
        console.log('WaterSplash');
        clearTimeout(timeout);
        setTimeout(Game('Water'),1000);
    });
    GunPress.addEventListener('click',()=>{
        console.log('Gunshot');
        clearTimeout(timeout);
        setTimeout(Game('Gun'),1000);
    });    
}
//This is the Game function, it takes playerSelection as an arguement, the firstChoice denotes the 1/3 probability of either Snake, water or gun happening on the first pass
function Game(playerSelection){
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
          let timeout=null;
          //checks if score is greater than or equal to 5, winmsg
        if(score>=5){
            console.log("you win");
            let body=document.querySelector('body');
            body.style.overflowY='hidden';
            let winmsg=document.querySelector('.Win');
            winmsg.classList.remove('hidden');       
        }
        else{
            //if score is 0 then the first round is played
            if(score==0){  
                playerSelections[0]=playerSelection;
                console.log(playerSelection);
                clearTimeout(timeout);
                setTimeout(
                playRound(playerSelection,firstChoice),5000);
                console.log(score);  
            }
            //if score is 0 or less than 0, you lose
            else if(score <=0){
                console.log('You Lose');
                let body=document.querySelector('body');
                body.style.overflowY='hidden';
                let lossmsg=document.querySelector('.Loss');
                lossmsg.classList.remove('hidden');        
                
            }
            else{
                //plays round
                playerSelections[score] = playerSelection
                console.log(playerSelections[score]);
                let comSelection=computerChoice(playerSelections[score-1]);
                clearTimeout(timeout);
                setTimeout(
                playRound(playerSelection,comSelection),5000);
                console.log(score); 
            }
        
        }
}



//This function returns the computer's choice on the basis of previous user choice
function computerChoice(playerSelection){   
    //if the previous selection was snake, then there is a 50-50 chance that the computer will play Gun or snake , for the best case scenario of either a victory or a draw
    if(playerSelection=='Snake' || playerSelection==='snake'){
        let random=Math.floor(Math.random()*10);
         if(random%2==0){

             return 'Gun';
         }
         else{  
             
             return 'Snake'}
    }
    else if(playerSelection=='Water' || playerSelection==='water'){
        let random=Math.floor(Math.random()*10);
        if(random%2==0){
            
            return 'Snake';

        }
        else{
            
            return 'Water'}
    }
    else if(playerSelection =='Gun' || playerSelection === 'gun'){
        let random=Math.floor(Math.random()*10);
        if(random%2==0){
           
            return 'Water'
        }
        else
        { 
            return 'Gun'}
    }
    
}
 

//This function plays the rounds,takes playerSelection and comSelection as arguments,score is increased or decreased on victory and defeat,icons are displayed for .5 seconds
function playRound(playerSelection,comSelection){
    let timeout=null;
    if(playerSelection===comSelection){
        if(comSelection=='Snake'){
            let icon=document.getElementById('snekCom');
        icon.classList.remove('hidden');
        clearTimeout(timeout);
        setTimeout(()=>{
            icon.classList.add('hidden');
        },500);
        }
        else if(comSelection=='Water'){
        let icon=document.getElementById('waterCom');
        icon.classList.remove('hidden');
        clearTimeout(timeout);
        setTimeout(()=>{
            icon.classList.add('hidden');
        },500);

        }
        else if(comSelection=='Gun'){
            let icon=document.getElementById('snekCom');
        icon.classList.remove('hidden');
        clearTimeout(timeout);
        setTimeout(()=>{
            icon.classList.add('hidden');
        },500);
        }
        console.log("It is a draw")
    }
    else{
        if(playerSelection==='Snake' && comSelection==='Water'){
            let scoreCard=document.getElementById('score');
            score++;
            scoreCard.innerText=score;
            let icon=document.getElementById('waterCom');
            icon.classList.remove('hidden');
            clearTimeout(timeout);
            setTimeout(()=>{
                icon.classList.add('hidden');
            },500);
            console.log(`Victory!.you chose ...${playerSelection} and the computer chose ...${comSelection}`)
            

        }
        else if(playerSelection ==='Water' && comSelection==='Gun'){
            let scoreCard=document.getElementById('score');
            score++;
            scoreCard.innerText=score;
            let icon=document.getElementById('gunCom');
            icon.classList.remove('hidden');
            clearTimeout(timeout);
            setTimeout(()=>{
                icon.classList.add('hidden');
            },500);
            console.log(`Victory!.you chose ...${playerSelection} and the computer chose ...${comSelection}`)
        }
        else if(playerSelection ==='Gun' && comSelection==='Snake'){
            let scoreCard=document.getElementById('score');
            score++;
            scoreCard.innerText=score;
            let icon=document.getElementById('snekCom');
            icon.classList.remove('hidden');
            clearTimeout(timeout);
            setTimeout(()=>{
                icon.classList.add('hidden');
            },500);
            console.log(`Victory!.you chose ...${playerSelection} and the computer chose ...${comSelection}`)
        }
        else{
            let scoreCard=document.getElementById('score');
            score--;
            scoreCard.innerText=score;
            if(comSelection=='Snake'){
                let icon=document.getElementById('snekCom');
            icon.classList.remove('hidden');
            clearTimeout(timeout);
            setTimeout(()=>{
                icon.classList.add('hidden');
            },500);
            }
            else if(comSelection=='Water'){
            let icon=document.getElementById('waterCom');
            icon.classList.remove('hidden');
            clearTimeout(timeout);
            setTimeout(()=>{
                icon.classList.add('hidden');
            },500);

            }
            else if(comSelection=='Gun'){
                let icon=document.getElementById('snekCom');
            icon.classList.remove('hidden');
            clearTimeout(timeout);
            setTimeout(()=>{
                icon.classList.add('hidden');
            },500);
            }
            console.log(`Defeat!.you chose ...${playerSelection} and the computer chose ...${comSelection}`)
        }
}
}

//Transitions
function anim(){
    let timeout=null;
    let modal=document.getElementById('modal');
    modal.classList.add('move');
    clearTimeout(timeout);
    setTimeout(()=>{
        let header=document.getElementById('header');
        header.classList.remove('hidden');
        let container=document.getElementById('contain');
        container.classList.remove('hidden');
        modal.classList.add('hidden');
        let greeter=document.querySelector('.Greet');
        greeter.classList.remove('hidden');
    },2000);
}
//for a parallax effect on scroll
window.addEventListener("scroll",function(){
    let heading=document.querySelector('#header');
    heading.classList.toggle('sticky',window.scrollY > 0);
    let container=document.querySelector('.container');
    container.classList.toggle('sticky2',window.scrollY >0);
})

function quit(){
    window.close();
}
function replay(){
    window.location.reload();
}
