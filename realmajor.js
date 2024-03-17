console.log("tic tac toe")

let music = new Audio("music.mp3")

let Turn = new Audio("ting.mp3")

let gameover = new Audio("gameover.mp3")

let turn = "X";
let winningImage = document.getElementById('imagebox');

let isGameover = false;
// function to change thr turn 

const changeTurn = () =>{

return turn === "X" ? "0": "X"

}



const checkWin = () =>{
let boxtext = document.getElementsByClassName('boxtext');

let wins = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

wins.forEach(e =>{
if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== "")){

 document.querySelector('.info').innerText = boxtext [e[0]].innerText + "....Won"

 document.querySelector('.info').style.fontSize = '40px'; // Adjust the size as needed

isGameover = true;




winningImage.style.display = 'block';
document.querySelector('.info').style.color = 'green'; 
    
setTimeout(()=>{

resetGame();



} ,2000 );

}




}

)


}




document.getElementById('restart').addEventListener('click', ()=>{

resetGame();

}
)

document.getElementById('onn').addEventListener('click', ()=>{

    music.play();
    
    }
    )



document.getElementById('off').addEventListener('click', ()=>{
music.pause();

        }
        )
            

const resetGame = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(box => {
        box.innerText = "";
    });

    // Additional reset logic if needed
    isGameover = false;
    turn = "X";
    document.querySelector('.info').innerText = "Turn for " + turn;
    document.querySelector('.info').style.fontSize = '20px'; // Adjust the size as needed
    document.querySelector('.info').style.color = 'black'; 


    winningImage.style.display = 'none';

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  
    let boxtext = element.querySelector('.boxtext');

    element.addEventListener('click',()=>{

        if(boxtext.innerText ===''){
         boxtext.innerText = turn;
         turn = changeTurn();

         Turn.play();
         checkWin();

         if(!isGameover){
         document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
         }
        }
    }

    );

});






