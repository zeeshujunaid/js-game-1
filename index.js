var clickedBoxCount = 0;
var totalSum = 0;
var winlose = document.getElementById("heading")
function box1() {
    if (clickedBoxCount < 3) {
        var box = document.getElementById("box1");
        var number = 1;
        box.innerHTML = number;
        totalSum += number;
        clickedBoxCount++;
        checkTotal();
    }
} function box2() {
    if (clickedBoxCount < 3) {
        var box = document.getElementById("box2");
        var number = 10;
        box.innerHTML = number;
        totalSum += number;
        clickedBoxCount++;
        checkTotal();
    }
} function box3() {
    if (clickedBoxCount < 3) {
        var box = document.getElementById("box3");
        var number = 33;
        box.innerHTML = number;
        totalSum += number;
        clickedBoxCount++;
        checkTotal();
    }
} function box4() {
    if (clickedBoxCount < 3) {
        var box = document.getElementById("box4");
        var number = 22;
        box.innerHTML = number;
        totalSum += number;
        clickedBoxCount++;
        checkTotal();
    }
} function box5() {
    if (clickedBoxCount < 3) {
        var box = document.getElementById("box5");
        var number = 59;
        box.innerHTML = number;
        totalSum += number;
        clickedBoxCount++;
        checkTotal();
    }
} function box6() {
    if (clickedBoxCount < 3) {
        var box = document.getElementById("box6");
        var number = 34;
        box.innerHTML = number;
        totalSum += number;
        clickedBoxCount++;
        checkTotal();
    }
}
function box7() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box7");
    var number = 56;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}}
function box8() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box8");
    var number = 99;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}} function box9() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box9");
    var number = 78;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}} function box10() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box10");
    var number = 43;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}} function box11() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box11");
    var number = 100;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}}
function box12() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box12");
    var number = 36;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}} function box13() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box13");
    var number = 70;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}} function box14() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box14");
    var number = 68;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}} function box15() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box15");
    var number = 57;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
} }function box16() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box16");
    var number = 26;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}} function box17() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box17");
    var number = 11;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}} function box18() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box18");
    var number = 83;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}} function box19() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box19");
    var number = 33;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}} function box20() {
    if (clickedBoxCount < 3) {
    var box = document.getElementById("box20");
    var number = 50;
    box.innerHTML = number;
    totalSum += number;
    clickedBoxCount++;
    checkTotal();
}}

function checkTotal() {
    if (totalSum >= 100) {
        winlose.innerHTML="congragulation you win the game "
    } else if (clickedBoxCount === 3) {
        winlose.innerHTML="sorry you lose the game "
    }
}


    











