//creating constants to access the classes and id's from the html file
const ground = document.querySelector('.ground');
const ctx = ground.getContext('2d');
const scorecard = document.querySelector('.score');
const ResetBtn = document.querySelector('#Reset');
const pauseBtn = document.querySelector('#pause');


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

let paused = false;
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

//eventlistener checks for changes made by the user and triggers the function accordingly
window.addEventListener("keydown",changeDirection);
ResetBtn.addEventListener("click",resetGame);
pauseBtn.addEventListener("click", function(){
    paused = !paused;
})

gameStart();

function gameStart(){
    running=true;
    paused= false;
    scorecard.textContent = score;
    createFood();
    drawfood();
    updatePauseBtn();
    nextTick();
};
function nextTick(){
//this function checks and calls all the block of function during the beginning 
    if(running && !paused){
        setTimeout(()=>{
            clearBoard();
            drawfood();
            moveSnake();
            drawSnake();
            checkGameover();
            nextTick();
        },75);
    }
    else if(paused){
        setTimeout(nextTick , 75);
        displayPauseMessage();
        updatePauseBtn();
    }
    else{
        displayGameOver();
    }
};
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0,0 , groundWidth,groundHeight);
};

//this function displayes the pause so basicaly styling the text
function displayPauseMessage(){
    clearBoard();
    drawfood();
    drawSnake();

    ctx.font="30px MV boli";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("PAUSED" , groundWidth /2, groundHeight/2 - 30);

    ctx.font = "16px MV boli";
    ctx.fillText("Click pause button to resume" , groundWidth /2, groundHeight/2 + 10);

}
function updatePauseBtn(){
    if(paused){
        pauseBtn.textContent ="▶";
    } else{
        pauseBtn.textContent = "⏸";
    }
};

//generates random co-ordinates within the canvas in order to display the apple
function createFood(){
    function randomFood(min , max){
        const randNum = Math.round((Math.random() * (max-min) + min) / unitSize) * unitSize;
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
function moveSnake(){
    //the movement of snake depends by adding the xvelocity value with x value of snake[0] 
    // which means the head and the y value respectively
    // snake[0].x means its accessing the value of the x from the array of snake same for y
    const head ={ x : snake[0].x + xVelocity, y: snake[0].y + yVelocity};
    snake.unshift(head);
    //if food is eaten
    if(snake[0].x== foodX && snake[0].y == foodY){
        score +=1;
        scorecard.textContent = score;
        createFood();
    }
    else{
        snake.pop();
    }
};
//drawing of sanke in the canvas 
function drawSnake (){
    ctx.fillStyle= snakeColor;
    snake.forEach(snakePart =>{
        ctx.fillRect(snakePart.x ,snakePart.y , unitSize , unitSize);
    })
};
function changeDirection(event){
//specific arrow keys have specific codes which helps in detecting and changing the direction of the snake
    const keyPressed = event.keyCode;
    const LEFT = 37 ;
    const RIGHT = 39 ;
    const UP =38 ;
    const DOWN = 40 ;

    const goingUp =(yVelocity == -unitSize);
    const goingDown =(yVelocity ==  unitSize);
    const goingRight =(xVelocity ==  unitSize);
    const goingLeft =(xVelocity == -unitSize);
    
//here the switch statement helps in changing the diretion of the snake
//this means the change of xVelocity and yVelocity.
    switch(true){
        case(keyPressed == LEFT && !goingRight ):
            xVelocity= -unitSize;
            yVelocity= 0 ;
            break;
        case(keyPressed == UP && !goingDown ):
            xVelocity= 0;
            yVelocity= -unitSize;
            break;
        case(keyPressed == RIGHT && !goingLeft):
            xVelocity= unitSize;
            yVelocity= 0;
            break;
        case(keyPressed == DOWN && !goingUp):
            xVelocity= 0;
            yVelocity= unitSize;
            break;
    }
};
function checkGameover(){
//this switch case checks whether the snake leaves the canvas or not
    switch(true){
        case(snake[0].x < 0):
            running =false;
            break;
        case(snake[0].x >= groundWidth):
            running = false;
            break;
        case (snake [0].y <0):
            running = false;
            break;
        case( snake [0].y >= groundHeight):
            running= false;
            break;
    }
    //this for loop checks wheather the snake bites itself or not
    for(let i = 1 ; i < snake.length ; i +=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};
function displayGameOver(){
//displays gameover and contains styling....
    ctx.font = "50px MV boli";
    ctx.fillStyle="White";
    ctx.textAlign="center";
    ctx.fillText("GAME OVER!" , groundWidth /2,groundHeight/2);
    running=false;
};
function resetGame(){
//resets the game to its initial stage, check above ,the values are same
    paused = false;
    score=0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
    {x:unitSize * 4, y :0},
    {x:unitSize * 3, y :0},
    {x:unitSize * 2, y :0},
    {x:unitSize, y :0},
    {x:0, y :0}
    ];
    gameStart();
};