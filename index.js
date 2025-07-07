//creating constants to access the classes and id's from the html file
const ground = document.querySelector('.ground');
const ctx = ground.getContext('2d');
const scorecard = document.querySelector('.score');
const ResetBtn = document.querySelector('#Reset');


//here clientWidth means that to get the height and width of the canvas from css styling
ground.width = ground.clientWidth;
ground.height = ground.clientHeight;

//the value is not directly accesible hence a constant is made to access such value
const groundWidth = ground.width;
const groundHeight = ground.height;

//setting up the color of the snake and the apple 
const snakeColor= "lightgreen";
const foodColor = "red";
const boardBackground = "#151B23"; 


//setting the unit size of the snake and apple
const unitSize = 10;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;

let foodX;
let foodY;

let score = 0;
//setting up the body of the snake 
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

function gameStart(){
    running=true;
    scorecard.textContent = score;
    createFood();
    drawfood();
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawfood();
            moveSnake();
            drawSnake();
            checkGameover();
            nextTick();
        },75);
    }
    else{
        displayGameOver();
    }
};
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0,0 , groundWidth,groundHeight);
};

function createFood(){
    function randomFood(min , max){
        const randNum = Math.round((Math.random() * (max-min) + min));
        return randNum;
    }
    //setting munimum and maximum value for random food
    foodX= randomFood(0 , groundWidth - unitSize);
    foodY= randomFood(0 , groundHeight - unitSize);
    
};
// ctx is a canvas style that is used to create or draw in canvas
function drawfood(){
    ctx.fillStyle = foodColor;
    //setting up the co-ordinate of the food that is being created, 
    // random values of x and y are generated in oder to position the food randomly in the canvas,
    //  unitesize represents as the length and breath 
    ctx.fillRect(foodX, foodY, unitSize,unitSize);
};
function moveSnake(){};
function drawSnake (){
    ctx.fillStyle= snakeColor;
    snake.forEach(snakePart =>{
        ctx.fillRect(snakePart.x ,snakePart.y , unitSize , unitSize);
    })
};
function changeDirection(){};
function checkGameover(){};
function displayGameOver(){};
function resetGame(){};




