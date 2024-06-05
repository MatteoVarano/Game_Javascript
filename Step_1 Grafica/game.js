const canvas = document.getElementById('Mycanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(20, 20, 1080, 720);

// Dimensioni del canvas
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Dimensioni del triangolo
const triangleBase = 35;
const triangleHeight = 45;

// Calcola le coordinate per centrare il triangolo
const centerX = canvasWidth / 2;
const centerY = canvasHeight / 2;

// Coordinate dei vertici del triangolo
const x1 = centerX;
const y1 = centerY - (triangleHeight / 3);
const x2 = centerX - (triangleBase / 3);
const y2 = centerY + (triangleHeight / 3);
const x3 = centerX + (triangleBase / 3);
const y3 = centerY + (triangleHeight / 3);

// Disegna il triangolo bianco centrato
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.closePath();

ctx.strokeStyle = 'white';
ctx.lineWidth   = 2;
ctx.stroke();