const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const blockSize = 10;
const width = canvas.width / blockSize;
const height = canvas.height / blockSize;

let snake = [
  { x: 5, y: 5 },
  { x: 4, y: 5 },
  { x: 3, y: 5 },
];
let food = { x: 10, y: 10 };
let direction = 'right';
let intervalId;
let score = 0;
let duration = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  ctx.fillStyle = 'green';
  snake.forEach(segment => {
    ctx.fillRect(segment.x * blockSize, segment.y * blockSize, blockSize, blockSize);
  });

  // Draw the food
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * blockSize, food.y * blockSize, blockSize, blockSize);

  // Draw the score and duration
  ctx.fillStyle = 'white';
  ctx.font = '16 Arial';
  ctx.fillText(`Score: ${score}`, 10, 20);
  ctx.fillText(`Duration: ${duration} seconds`, 10, 40);
}

function move() {
  // Move the snake
  let head = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
    case 'right':
      head.x++;
      break;
  }
  snake.unshift(head);

  // Check if the snake ate the food
  if (head.x === food.x && head.y === food.y) {
    food.x = Math.floor(Math.random() * width);
    food.y = Math.floor(Math.random() * height);
    score++;
  } else {
    snake.pop();
  }

  // Update the duration
  duration++;
  if (duration >= 300) {
    clearInterval(intervalId);
    alert(`Game over! Your score is ${score}.`);
    document.getElementById('play').disabled = false;
    document.getElementById('pause').disabled = false;
    document.getElementById('restart').disabled = false;
  }
}

function changeDirection(event) {
  switch (event.keyCode) {
    case 37:
      direction = 'left';
      break;
    case 38:
      direction = 'up';
      break;
    case 39:
      direction = 'right';
      break;
    case 40:
      direction = 'down';
      break;
  }
}

function play() {
  intervalId = setInterval(() => {
    move();
    draw();
  }, 200);
  document.getElementById('play').disabled = true;
  document.getElementById('pause').disabled = false;
  document.getElementById('restart').disabled = true;
}

function pause() {
  clearInterval(intervalId);
  document.getElementById('play').disabled = false;
  document.getElementById('pause').disabled = true;
  document.getElementById('restart').disabled = false;
}

function restart() {
  clearInterval(intervalId);
  snake = [
    { x: 5, y: 5 },
    { x: 4, y: 5 },
    { x: 3, y: 5 },
  ];
  food = { x: 10, y: 10 };
  direction = 'right';
  score = 0;
  duration = 0;
  draw();
  document.getElementById('play').disabled = false;
  document.getElementById('pause').disabled = true;
  document.getElementById('restart').disabled = true;
}

document.addEventListener('keydown', changeDirection);
document.getElementById('play').addEventListener('click', play);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('restart').addEventListener('click', restart);
