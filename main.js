const cursBanca1 = document.querySelector('#cursBanca1');
const cursBanca2 = document.querySelector('#cursBanca2');
const sumaSchimbata = document.querySelector('#sumaSchimbata');
const totalBanca1 = document.querySelector('#totalBanca1');
const totalBanca2 = document.querySelector('#totalBanca2');
const diferentaBanci = document.querySelector('#difBanci');
const calculeaza = document.querySelector('#btnCalc');
const sterge = document.querySelector('#btnClear');

totalBanca1.value = 0;
totalBanca2.value = 0;
diferentaBanci.value = 0;

window.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        executa();
    }
})

window.addEventListener("keydown", function (e) {
    if (e.key == "Delete") {
        clearall()
        cursBanca1.focus();
    }
})

window.onload = function () {
    cursBanca1.focus();
}

calculeaza.addEventListener("click", executa);
sterge.addEventListener("click", clearall)


function executa() {
    if (cursBanca1.value == '' || cursBanca2.value == '' || sumaSchimbata.value == '') {
        cursBanca1.style.borderColor = 'red';
        cursBanca2.style.borderColor = 'red';
        sumaSchimbata.style.borderColor = 'red';
    }
    else {
        cursBanca1.style.borderColor = 'black';
        cursBanca2.style.borderColor = 'black';
        sumaSchimbata.style.borderColor = 'black';
        let curs1 = parseFloat(cursBanca1.value);
        let curs2 = parseFloat(cursBanca2.value);
        let suma = parseFloat(sumaSchimbata.value);
        let total1 = parseFloat(suma / curs1);
        let total2 = parseFloat(suma / curs2);
        let dif = parseFloat(diferentaBanci.value);
        let difBanci = Math.abs(total1 - total2);
        totalBanca1.value = total1.toFixed(3);
        totalBanca2.value = total2.toFixed(3);
        diferentaBanci.value = difBanci.toFixed(3);
    }

}

function clearall() {
    let elements = document.querySelectorAll("input")
    for (let i = 0; i < elements.length; i++) {
        elements[i].value = '';
        totalBanca1.value = 0;
        totalBanca2.value = 0;
        diferentaBanci.value = 0;
        cursBanca1.style.borderColor = 'black';
        cursBanca2.style.borderColor = 'black';
        sumaSchimbata.style.borderColor = 'black';
        cursBanca1.focus();
    }
}