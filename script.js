function currentGrade(){
    z = 0;
    overallGrade = 0;
    var hwGrade = avg(stringToArray(document.getElementById("hwGrade").value));
    var qzGrade = avg(stringToArray(document.getElementById("quizGrade").value));
    var tstGrade = avg(stringToArray(document.getElementById("testGrade").value));
    var mtmGrade = avg(stringToArray(document.getElementById("midtermGrade").value));
    var overallWeight = parseInt(document.getElementById("hwWeight").value)+ parseInt(document.getElementById("quizWeight").value)+parseInt(document.getElementById("testWeight").value)+parseInt(document.getElementById("midtermWeight").value);
    if (z>0){
        document.getElementById("totalGrade").innerHTML = "All Values Must Be Numbers";
        return;
    }
    if(isNaN(document.getElementById("hwWeight").value + document.getElementById("quizWeight").value + document.getElementById("testWeight").value + document.getElementById("midtermWeight").value) === true){
        document.getElementById("totalGrade").innerHTML = "All Values Must Be Numbers";
        return;
    }
    colorRow(document.getElementById("hw"),hwGrade);
    colorRow(document.getElementById("quiz"),qzGrade);
    colorRow(document.getElementById("test"),tstGrade);
    colorRow(document.getElementById("midterm"),mtmGrade);
    overallGrade += (hwGrade * document.getElementById("hwWeight").value / overallWeight);
    overallGrade += (qzGrade * document.getElementById("quizWeight").value / overallWeight);
    overallGrade += (tstGrade * document.getElementById("testWeight").value / overallWeight);
    overallGrade += (mtmGrade * document.getElementById("midtermWeight").value / overallWeight);
    document.getElementById("totalGrade").innerHTML = "Current Grade: "+overallGrade+"%";

}
function stringToArray(a){
    var x = a.split(",");
    for(var i = 0; i < x.length; i++){
        if(isNaN(x[i]) == true){
            z++;

        }
        x[i]=parseInt(x[i]);
    }
    return x;

}

function avg(s){
    var y = 0;
    for (var i = 0; i < s.length; i++){
    y += s[i];
}
    y = y / s.length;
    return y;
}

function requiredGrade(){
    if(isNaN(document.getElementById("finalWeight").value) == true){
        document.getElementById("requiredGrade").innerHTML = "All Values Must Be Numbers";
        return;
    }
    var n = 100 - document.getElementById("finalWeight").value;
    var d = parseInt(document.getElementById("desiredGrade").value) - overallGrade * n/100;
    var f = document.getElementById("finalWeight").value/100;
    var g = d/f;
    document.getElementById("requiredGrade").innerHTML ="Grade Required: " + g + "%";
    if(parseInt(document.getElementById("hwWeight").value) + parseInt(document.getElementById("quizWeight").value) + parseInt(document.getElementById("testWeight").value) + parseInt(document.getElementById("midtermWeight").value) + parseInt(document.getElementById("finalWeight").value) !== 100){
        document.getElementById("requiredGrade").innerHTML = "Total Weights Must Add UP To 100%";
    }
}
function colorRow(elem,score){
    if(score > 89){
        elem.style.backgroundColor = "green";
    }
    else if(score > 79){
        elem.style.backgroundColor = "yellow";
    }
    else if(score > 69){
        elem.style.backgroundColor = "orange";
    }
    else if(score > 59){
        elem.style.backgroundColor = "red";
    }
    else{
        elem.style.backgroundColor = "pink";
    }
}