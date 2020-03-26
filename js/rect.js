//사각형을 만드는 함수

window.onload = function drawRects(){
    var canvas = document.getElementById("rect1");

    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgb(255, 0, 0)';       
    ctx.fillRect(10, 10, 80, 80);
        }else{
    alert("캔버스를 지원하지 않는 텍스쳐입니다.");
    }
}

