let canvas1 = window.document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

ctx1.fillStyle = 'rgba(0,0,255,.5)';
ctx1.fillRect(10,10,10,10);

// rectangulo
ctx1.beginPath();
ctx1.moveTo(50,50);
ctx1.lineTo(200,50);
ctx1.strokeStyle = "#fa34a3";
ctx1.stroke();

// circulo
ctx1.beginPath();
ctx1.arc(100,100,30,0,Math.PI * 2, false);
ctx1.strokeStyle = "red";
ctx1.stroke();

for (let i = 0; i <= 10; i++){
    let x = Math.random() * canvas1.width;
    let y = Math.random() * canvas1.height;
    ctx1.beginPath();
    ctx1.arc(x,y,10,0,Math.PI * 2, false);
    ctx1.strokeStyle = "blue";
    ctx1.stroke();
}