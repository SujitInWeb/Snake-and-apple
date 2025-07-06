const ground = document.querySelector('.ground');
const ctx = ground.getContext('2d');
const scorecard = document.querySelector('.score');
const ResetBtn = document.querySelector('#Reset');

ground.width = ground.clientWidth;
ground.height = ground.clientHeight;



const groundWidth = ground.width;
const groundHeight = ground.height;

const snakeColor= "lightgreen";
const foodColor = "red";

const unitSize = 15;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitSize * 4, y :0},
    {x:unitSize * 3, y :0},
    {x:unitSize * 2, y :0},
    {x:unitSize, y :0},
    {x:0, y :0}
]

window.addEventListener("keydown",changeDirection);
ResetBtn.addEventListener("click",resetGame);

gameStart();
createFood();
drawfood();
function gameStart(){};
function nextTick(){};
function clearBoard(){};
function createFood(){
    function randomFood(min , max){
        const randNum = Math.round((Math.random() * (max-min) + min));
        return randNum;
    }
    foodX= randomFood(0 , groundWidth - unitSize);
    foodY= randomFood(0 , groundWidth - unitSize);
    
};
function drawfood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize,unitSize);
};
function moveSnake(){};
function drawSnake (){};
function changeDirection(){};
function checkGameover(){};
function displayGameOver(){};
function resetGame(){};




