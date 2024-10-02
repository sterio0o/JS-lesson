//Гипербола
function buttons() {
    var numX = Number(document.getElementById('enterX').value);
    var numY = Number(document.getElementById('enterY').value);
    var radius = Number(document.getElementById('radius').value);
    var offsetByX = Number(document.getElementById('enterOffsetX').value);
    var offsetByY = Number(document.getElementById('enterOffsetY').value);
    console.log("Значение: ", numX, numY);
    if (((numX - offsetByX) * (numY - offsetByY)) <= radius) {
        var result = "Попадание";
    }
    else {
        var result = "Промах";
    }
    document.getElementById('result').value = result;
}