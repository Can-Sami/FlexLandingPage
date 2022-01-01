
const text = ['Powerfull, Reliable, Flexible']

let currentText = '';
let letter = '';
let count = 0;
let index = 0;



(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count]
    letter = currentText.slice(0, ++index)

    document.querySelector('.type').textContent = letter

    setTimeout(type, 100)
}());