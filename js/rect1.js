var rect_array = new Array( 1, 5, 4, 6, 2, 7, 3 );

function drawRect(positionX, positionY, witdh, height, color)
{
    var canvas = document.getElementById("canvas");

    if(canvas.getContext)
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(positionX, positionY, witdh, height);
    }
    else
    {
        alert("캔버스를 지원하지 않는 텍스쳐 입니다.")
    }
}

  
function drawRect(positionX, positionY, witdh, height, color){

    var canvas = document.getElementById("canvas");

    if(canvas.getContext)
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(positionX, positionY, witdh, height);
    }
    else
    {
        alert("캔버스를 지원하지 않는 텍스쳐 입니다.")
    }
}


function initializeRect(){
    rect_array = new Array( 1, 5, 4, 6, 2, 7, 3 );
    clearCanvas();
    drawRects(rect_array);
}

function drawRects(rect_array)
{    
    for(var i = 0; i < 7; ++i)
    {
        drawRect(100 + (i * 80), 200 - (rect_array[i] * 20) , 60, 60 + ((rect_array[i] * 20)), 
            'rgb(' + 255 + ',' + (100 + (rect_array[i] * 15)) + ',' + 100 + ')');
    }
}

function clearCanvas(){
    var canvas = document.getElementById("canvas");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}

function bubble_sort(rect_array)
{
if(rect_array[5] > rect_array[6])
{   
    var temp = rect_array[6];
    rect_array[6] = rect_array[5];
    rect_array[5] = temp;

    clearCanvas();
}
drawRects(rect_array);
}


function initializeRect()
{
    rect_array = new Array( 1, 5, 4, 6, 2, 7, 3 );
    clearCanvas();
    drawRects(rect_array);
}

function drawRects(rect_array)
{    
    for(var i = 0; i < 7; ++i)
    {
        drawRect(100 + (i * 80), 200 - (rect_array[i] * 20) , 60, 60 + ((rect_array[i] * 20)), 
            'rgb(' + 255 + ',' + (100 + (rect_array[i] * 15)) + ',' + 100 + ')');
    }
}

function clearCanvas()
{
    var canvas = document.getElementById("canvas");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}

function bubble_sort(rect_array)
{
    if(rect_array[5] > rect_array[6])
    {   
    var temp = rect_array[6];
    rect_array[6] = rect_array[5];
    rect_array[5] = temp;

    clearCanvas();
    }
    drawRects(rect_array);
}
