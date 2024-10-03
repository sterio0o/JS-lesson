//Объединение фигур
function buttons() {
    var numX = Number(document.getElementById('enterX').value);
    var numY = Number(document.getElementById('enterY').value);
    var radius = Number(document.getElementById('radius').value);
    var offsetByX = Number(document.getElementById('enterOffsetX').value);
    var offsetByY = Number(document.getElementById('enterOffsetY').value);
    var shot = Number(document.getElementById('enterShot').value);
    var result = 0;
    x = numX - offsetByX;
    y = numY - offsetByY;
    let count = 0;
    let points = 0;
    console.log("Значение: ", x, y);

    function random(min, max) {
        return Math.random(max - min);
    }
    
    for (let i = 0; i <= count; i++) {
        return shotToPoint();
    }


    function shotToPoint(x, y) {
        if (x === 0 && y === 0){
            points += 10;
        }
        else {
            return shotToCircle();
        }
    }


    function shotToCircle(x, y){
        if (Math.sqrt(x ** 2 + y ** 2) <= radius) {
            points += 2;
        }
        else {
            return shotToSquare();
        }
    }

    function shotToSquare (x, y) {
        if (Math.abs(x && y) <= radius/2) {
            points += 1;
        }
        else {
            return shotToRhombus();
        }
    }

    function shotToRhombus (x, y) {
        if (Math.abs(x + y) <= radius) {
            points += 3; 
        }
        else {
            return shotToHyperbola();
        }
    }

    function shotToHyperbola (x, y) {
        if (x * y <= radius) {
            points += 4;
        }
        else {
            return 0;
        }
    }
    document.getElementById('result').value = result;
}