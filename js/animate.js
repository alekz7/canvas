function animate(){    

    ctx2.clearRect(0,0,canvas2.width, canvas2.height);
    circuloArray.forEach(function(elem){
        elem.update();
    });                

    ctx3.clearRect(0,0,canvas3.width, canvas3.height);
    circuloArray2.forEach(function(elem){
        elem.update();
    });            

    ctx4.clearRect(0,0,canvas4.width, canvas4.height);
    circuloArray4.forEach(function(elem){
        elem.update();
    });            

    // ctx5.clearRect(0,0,canvas5.width, canvas5.height);
    ctx5.fillStyle = 'rgba(255,255,255,0.05)';
    ctx5.fillRect(0,0,canvas5.width, canvas5.height);
    circuloArray5.forEach(function(elem){
        elem.update();
    });            

    requestAnimationFrame(animate);
}
animate();