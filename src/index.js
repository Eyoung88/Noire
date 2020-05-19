import './style.scss';
import { pizza } from './framework_javascript';
import { toppingArray } from './framework_javascript';
import { isChecked } from './prices';
import { data } from './data';

document.getElementById('pizza').innerHTML = pizza;

const image_holder = document.getElementById('image_holder');
const pizza_image = document.createElement('IMG');
pizza_image.setAttribute('src', './images/pizza_canvas.png');

let topping = [];

const topping_loader = () => {
    data.toppings.forEach((topping1, idx) => {
        // console.log(topping1.name, idx);
        topping[idx] = {};
        topping[idx].left = document.createElement('IMG');
        topping[idx].left.setAttribute('src', `./images/${topping1.file_prefix}_left.png`);

        topping[idx].right = document.createElement('IMG');
        topping[idx].right.setAttribute('src', `./images/${topping1.file_prefix}_right.png`);
    });
};
topping_loader();

const special_pizzas = document.getElementById("special_pizzas");
special_pizzas.innerHTML = `
<div id="special1" class="btn topping_font">Special 1</div>
<div id="special2" class="btn topping_font">Special 2</div>
<div id="special3" class="btn topping_font">Special 3</div>
<div id="special4" class="btn topping_font">Special 4</div>
<div id="special5" class="btn topping_font">Special 5</div>
`;

let counter = 0;
Array.from(toppingArray).forEach(function (element) {
    // console.log(data.toppings[counter].name);
    element.innerHTML += `<div class="toppings_box">
    <div class="grid-container">
        <div class="grid-item topping_font">${data.toppings[counter].name}</div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>  
        <div class="grid-item"></div>
        <div class="grid-item">
            <div class="topping_amount">
                <label class="container">
                    <input class="img_radio extra_radio extraBtn" type="radio" name="topping_amount_${element.id}" value="Extra">
                    <img class="topping_resize" src="./images/Extra.png">
                </label>
                <label class="container">
                    <input class="img_radio normal_radio normalBtn" type="radio" name="topping_amount_${element.id}" value="Normal">
                    <img class="topping_resize" src="./images/Normal.png">
                </label>
                <label class="container">
                    <input class="img_radio none_radio noneBtn" type="radio" name="topping_amount_${element.id}" value="None" checked>
                    <img class="topping_resize" src="./images/None.png">
                </label>
            </div>
        </div>
        <div class="grid-item">
            <div class="portion_of_pizza">
            <label>
                <input class="img_radio left_radio" type="radio" name="pizza_portion_${element.id}" value="left">
                <img class="img_resize" src="./images/PizzaPortionLeft.png">
            </label>
            <label>
                <input class="img_radio full_radio"" type="radio" name="pizza_portion_${element.id}" value="full">
                <img class="img_resize" src="./images/PizzaPortionFull.png">
            </label>
            <label>
                <input class="img_radio right_radio" type="radio" name="pizza_portion_${element.id}" value="right">
                <img class="img_resize" src="./images/PizzaPortionRight.png">
            </label>
        </div>
</div>`;

    counter++;
});

var totalPrice = 0;
var dealPrice = 0;
var price = 0;
var toppingCounter = 0;

const addDoublePrice = (evt) => {
    toppingCounter += 2;
    if (evt.target.checked == true) {
        price += 2;
        document.getElementById("total").innerHTML = "Your current price is: " + totalPrice;
    }
}
for (let iterator of document.getElementsByClassName('extraBtn')) {
    iterator.addEventListener('click', addDoublePrice);
}

const addPrice = (evt) => {
    toppingCounter += 1;
    if (evt.target.checked == true) {
        price++;
        document.getElementById("total").innerHTML = "Your current price is: " + totalPrice;
    }

}
for (let iterator of document.getElementsByClassName('normalBtn')) {
    iterator.addEventListener('click', addPrice);
}

const subPrice = (evt) => {
    toppingCounter -= 1;
    if (evt.target.checked == true) {
        if (price == 0) {
            console.log("If price is 0", price);
            price = 0;
            document.getElementById("total").innerHTML = "Your current price is: " + totalPrice;
        }
        else {
            price--;
            console.log("If price is subtraced", price);
            document.getElementById("total").innerHTML = "Your current price is: " + totalPrice;
        }
    }
    if (evt.target.checked == false) {
        price++;
        document.getElementById("total").innerHTML = "Your current price is: " + totalPrice;
    }
}
for (let iterator of document.getElementsByClassName('noneBtn')) {
    iterator.addEventListener('click', subPrice);
}

if(toppingCounter == 5) {
    totalPrice - 3;
}


const canvas = document.getElementById('pizza_view');

canvas.width = 630;
canvas.height = 630;
const ctx = canvas.getContext('2d');

let anchovy_left = false;
let anchovy_right = false;
let anchovy_display = false;
let bacon_left = false;
let bacon_right = false;
let bacon_display = false;
let bell_peppers_left = false;
let bell_peppers_right = false;
let bell_peppers_display = false;
let cheese_left = false;
let cheese_right = false;
let cheese_display = false;
let ham_left = false;
let ham_right = false;
let ham_display = false;
let jalepenos_left = false;
let jalepenos_right = false;
let jalepenos_display = false;
let olives_left = false;
let olives_right = false;
let olives_display = false;
let pepperoni_left = false;
let pepperoni_right = false;
let pepperoni_display = false;
let pineapple_left = false;
let pineapple_right = false;
let pineapple_display = false;
let sausage_left = false;
let sausage_right = false;
let sausage_display = false;

document.getElementById("special1").addEventListener('click', createSpecialPizza1);
document.getElementById("special2").addEventListener('click', createSpecialPizza2);
document.getElementById("special3").addEventListener('click', createSpecialPizza3);
document.getElementById("special4").addEventListener('click', createSpecialPizza4);
document.getElementById("special5").addEventListener('click', createSpecialPizza5);

const extraRadioBtn = document.getElementsByClassName("extra_radio");
const normalRadioBtn = document.getElementsByClassName("normal_radio");
const noneRadioBtn = document.getElementsByClassName("none_radio");
const leftRadioBtn = document.getElementsByClassName("left_radio");
const fullRadioBtn = document.getElementsByClassName("full_radio");
const rightRadioBtn = document.getElementsByClassName("right_radio");

const loop = () => {
    ctx.clearRect(0, 0, 0, 0);
    ctx.drawImage(pizza_image, 0, 0);
    if(anchovy_display){
        if (anchovy_left) {
            ctx.drawImage(topping[0].left, 0, 0);
        }
        if (anchovy_right) {
            ctx.drawImage(topping[0].right, 0, 0);
        }
    }
    if(bacon_display){
        if (bacon_left) {
            ctx.drawImage(topping[1].left, 0, 0);
        }
        if (bacon_right) {
            ctx.drawImage(topping[1].right, 0, 0);
        }
    }
    if(bell_peppers_display){
        if (bell_peppers_left) {
            ctx.drawImage(topping[2].left, 0, 0);
        }
        if (bell_peppers_right) {
            ctx.drawImage(topping[2].right, 0, 0);
        }
    }
    if(cheese_display){
        if (cheese_left) {
            ctx.drawImage(topping[3].left, 0, 0);
        }
        if (cheese_right) {
            ctx.drawImage(topping[3].right, 0, 0);
        }
    }
    if(ham_display){
        if (ham_left) {
            ctx.drawImage(topping[4].left, 0, 0);
        }
        if (ham_right) {
            ctx.drawImage(topping[4].right, 0, 0);
        }
    }
    if(jalepenos_display){
        if (jalepenos_left) {
            ctx.drawImage(topping[5].left, 0, 0);
        }
        if (jalepenos_right) {
            ctx.drawImage(topping[5].right, 0, 0);
        }
    }
    if(olives_display){
        if (olives_left) {
            ctx.drawImage(topping[6].left, 0, 0);
        }
        if (olives_right) {
            ctx.drawImage(topping[6].right, 0, 0);
        }
    }
    if(pepperoni_display){
        if (pepperoni_left) {
            ctx.drawImage(topping[7].left, 0, 0);
        }
        if (pepperoni_right) {
            ctx.drawImage(topping[7].right, 0, 0);
        }
    }
    if(pineapple_display){
        if (pineapple_left) {
            ctx.drawImage(topping[8].left, 0, 0);
        }
        if (pineapple_right) {
            ctx.drawImage(topping[8].right, 0, 0);
        }
    }
    if(sausage_display){
        if (sausage_left) {
            ctx.drawImage(topping[9].left, 0, 0);
        }
        if (sausage_right) {
            ctx.drawImage(topping[9].right, 0, 0);
        }
    }

    for(let i=0;i<extraRadioBtn.length;i++){
        if(extraRadioBtn[i].checked){            
            eval(data.toppings[i].name+"_display = true;");
        }
    }
    for(let i=0;i<normalRadioBtn.length;i++){
        if(normalRadioBtn[i].checked){
            eval(data.toppings[i].name+"_display = true;");
        }
    }
    for(let i=0;i<noneRadioBtn.length;i++){
        if(noneRadioBtn[i].checked){
            eval(data.toppings[i].name+"_display = false;");
        }
    }
    for(let i=0;i<leftRadioBtn.length;i++){
        if(leftRadioBtn[i].checked){
            eval(data.toppings[i].name+"_left = true;");
            eval(data.toppings[i].name+"_right = false;");
        }
    }
    for(let i=0;i<fullRadioBtn.length;i++){
        if(fullRadioBtn[i].checked){
            eval(data.toppings[i].name+"_left = true;");
            eval(data.toppings[i].name+"_right = true;");
        }
    }
    for(let i=0;i<rightRadioBtn.length;i++){
        if(rightRadioBtn[i].checked){
            eval(data.toppings[i].name+"_left = false;");
            eval(data.toppings[i].name+"_right = true;");
        }
    }
};

setInterval(loop, 100);

function createSpecialPizza1() {
    noneRadioBtn[0].checked = true;
    fullRadioBtn[0].checked = true;
    noneRadioBtn[1].checked = true;
    fullRadioBtn[1].checked = true;
    noneRadioBtn[2].checked = true;
    fullRadioBtn[2].checked = true;
    noneRadioBtn[3].checked = true;
    fullRadioBtn[3].checked = true;
    noneRadioBtn[4].checked = true;
    fullRadioBtn[4].checked = true;
    noneRadioBtn[5].checked = true;
    fullRadioBtn[5].checked = true;
    noneRadioBtn[6].checked = true;
    fullRadioBtn[6].checked = true;
    noneRadioBtn[7].checked = true;
    fullRadioBtn[7].checked = true;
    noneRadioBtn[8].checked = true;
    fullRadioBtn[8].checked = true;
    noneRadioBtn[9].checked = true;
    fullRadioBtn[9].checked = true;

    normalRadioBtn[3].checked = true;
    fullRadioBtn[3].checked = true;
    normalRadioBtn[2].checked = true;
    fullRadioBtn[2].checked = true;
    normalRadioBtn[6].checked = true;
    fullRadioBtn[6].checked = true;

    // console.log(document.getElementById(`topping_amount_${data.toppings[2].name}`));
    // console.log(document.getElementsByName(`topping_amount_${data.toppings[2].name}`)[checked]);

}

function createSpecialPizza2() {
    noneRadioBtn[0].checked = true;
    fullRadioBtn[0].checked = true;
    noneRadioBtn[1].checked = true;
    fullRadioBtn[1].checked = true;
    noneRadioBtn[2].checked = true;
    fullRadioBtn[2].checked = true;
    noneRadioBtn[3].checked = true;
    fullRadioBtn[3].checked = true;
    noneRadioBtn[4].checked = true;
    fullRadioBtn[4].checked = true;
    noneRadioBtn[5].checked = true;
    fullRadioBtn[5].checked = true;
    noneRadioBtn[6].checked = true;
    fullRadioBtn[6].checked = true;
    noneRadioBtn[7].checked = true;
    fullRadioBtn[7].checked = true;
    noneRadioBtn[8].checked = true;
    fullRadioBtn[8].checked = true;
    noneRadioBtn[9].checked = true;
    fullRadioBtn[9].checked = true;

    normalRadioBtn[0].checked = true;
    fullRadioBtn[0].checked = true;
    normalRadioBtn[3].checked = true;
    fullRadioBtn[3].checked = true;
    normalRadioBtn[4].checked = true;
    fullRadioBtn[4].checked = true;
    normalRadioBtn[5].checked = true;
    fullRadioBtn[5].checked = true;
}

function createSpecialPizza3() {
    noneRadioBtn[0].checked = true;
    fullRadioBtn[0].checked = true;
    noneRadioBtn[1].checked = true;
    fullRadioBtn[1].checked = true;
    noneRadioBtn[2].checked = true;
    fullRadioBtn[2].checked = true;
    noneRadioBtn[3].checked = true;
    fullRadioBtn[3].checked = true;
    noneRadioBtn[4].checked = true;
    fullRadioBtn[4].checked = true;
    noneRadioBtn[5].checked = true;
    fullRadioBtn[5].checked = true;
    noneRadioBtn[6].checked = true;
    fullRadioBtn[6].checked = true;
    noneRadioBtn[7].checked = true;
    fullRadioBtn[7].checked = true;
    noneRadioBtn[8].checked = true;
    fullRadioBtn[8].checked = true;
    noneRadioBtn[9].checked = true;
    fullRadioBtn[9].checked = true;

    normalRadioBtn[2].checked = true;
    fullRadioBtn[2].checked = true;
    normalRadioBtn[5].checked = true;
    fullRadioBtn[5].checked = true;
    normalRadioBtn[6].checked = true;
    fullRadioBtn[6].checked = true;
    normalRadioBtn[8].checked = true;
    fullRadioBtn[8].checked = true;
}

function createSpecialPizza4() {
    noneRadioBtn[0].checked = true;
    fullRadioBtn[0].checked = true;
    noneRadioBtn[1].checked = true;
    fullRadioBtn[1].checked = true;
    noneRadioBtn[2].checked = true;
    fullRadioBtn[2].checked = true;
    noneRadioBtn[3].checked = true;
    fullRadioBtn[3].checked = true;
    noneRadioBtn[4].checked = true;
    fullRadioBtn[4].checked = true;
    noneRadioBtn[5].checked = true;
    fullRadioBtn[5].checked = true;
    noneRadioBtn[6].checked = true;
    fullRadioBtn[6].checked = true;
    noneRadioBtn[7].checked = true;
    fullRadioBtn[7].checked = true;
    noneRadioBtn[8].checked = true;
    fullRadioBtn[8].checked = true;
    noneRadioBtn[9].checked = true;
    fullRadioBtn[9].checked = true;

    normalRadioBtn[0].checked = true;
    fullRadioBtn[0].checked = true;
    normalRadioBtn[1].checked = true;
    fullRadioBtn[1].checked = true;
    normalRadioBtn[3].checked = true;
    fullRadioBtn[3].checked = true;
    normalRadioBtn[4].checked = true;
    fullRadioBtn[4].checked = true;
    normalRadioBtn[7].checked = true;
    fullRadioBtn[7].checked = true;
    normalRadioBtn[9].checked = true;
    fullRadioBtn[9].checked = true;
}

function createSpecialPizza5() {
    noneRadioBtn[0].checked = true;
    fullRadioBtn[0].checked = true;
    noneRadioBtn[1].checked = true;
    fullRadioBtn[1].checked = true;
    noneRadioBtn[2].checked = true;
    fullRadioBtn[2].checked = true;
    noneRadioBtn[3].checked = true;
    fullRadioBtn[3].checked = true;
    noneRadioBtn[4].checked = true;
    fullRadioBtn[4].checked = true;
    noneRadioBtn[5].checked = true;
    fullRadioBtn[5].checked = true;
    noneRadioBtn[6].checked = true;
    fullRadioBtn[6].checked = true;
    noneRadioBtn[7].checked = true;
    fullRadioBtn[7].checked = true;
    noneRadioBtn[8].checked = true;
    fullRadioBtn[8].checked = true;
    noneRadioBtn[9].checked = true;
    fullRadioBtn[9].checked = true;

    normalRadioBtn[3].checked = true;
    fullRadioBtn[3].checked = true;
    normalRadioBtn[4].checked = true;
    fullRadioBtn[4].checked = true;
    normalRadioBtn[8].checked = true;
    fullRadioBtn[8].checked = true;
}



// if (document.getElementById(`topping_amount_${data.toppings[0].name}`).value == 'Extra') {
//     if(document.getElementById(`pizza_portion_${data.toppings[0].name}`).value == 'left') {
//         anchovy_left = true;
//         anchovy_right = false;
//         console.log('It went into left')
//     }
//     if(document.getElementById(`pizza_portion_${data.toppings[0].name}`).value == 'right') {
//         anchovy_left = false;
//         anchovy_right = true;
//         console.log('It went into right')
//     }
//     if(document.getElementById(`pizza_portion_${data.toppings[0].name}`).value == 'full') {
//         anchovy_left = true;
//         anchovy_right = true;
//         console.log('It went into full')
//     }
// }

// topping_amount_${element.id}
// pizza_portion_${element.id}
