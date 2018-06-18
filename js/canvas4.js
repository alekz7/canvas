let canvas4 = window.document.getElementById('canvas4');
let ctx4 = canvas4.getContext('2d');
let canvasPos4 = getPosition(canvas4);

let mouse4 = {
    x: undefined,
    y: undefined
}

let gravity = 1;
let friction = 0.99;

var colorArray = ["#F2009D","#0B89D7","#34D801","#F1E42D","#F37024"];

window.addEventListener('mousemove',
    function(event){
        mouse4.x = event.x - canvasPos4.x;
        mouse4.y = event.y - canvasPos4.y;
        // ctx4.font = "14px Avenir";
		// ctx4.fillText(" mouseX: " + mouse.x + "mouseY: " + mouse.y, 50, 50);
})

window.addEventListener('resize', 
    function(){
        canvas4.width   = window.innerWidth;
        canvas4.height  = window.innerHeight;
})

function Ball(x,y,dx,dy,radio){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radio = radio;    
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        ctx4.beginPath();
        ctx4.arc(this.x,this.y, this.radio,0,Math.PI * 2, false);
        ctx4.strokeStyle = "blue";
        ctx4.stroke();
        ctx4.fillStyle = this.color;
        ctx4.fill();
    }
    this.update = function(){        
        if (this.y + this.radio + this.dy > canvas4.height){
            this.dy = -this.dy * friction;

        } else {
            this.dy += gravity;
        }

        if(this.x + this.radio + this.dx> canvas4.width || this.x - this.radio <= 0){
            this.dx = -this.dx;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

let circuloArray4 = [];
for (let i = 0 ; i <= 100; i ++){
    let radio = Math.random() * 3 + 1;
    let x = Math.random() * (canvas4.width - radio * 2) + radio;    
    let y = Math.random() * (canvas4.height - radio * 2) + radio;    
    var dx = ((Math.random() - 0.5) * 2) + 1; 
    var dy = ((Math.random() - 0.5) * 2) + 1;
    circuloArray4.push(new Ball(x,y,dx,dy,radio));
}
