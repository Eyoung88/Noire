import './style.scss';
import { pizza } from './framework_javascript';
import { toppingArray } from './framework_javascript';
import { isChecked } from './prices';
import { data } from './data';

document.getElementById('pizza').innerHTML = pizza;

const image_holder = document.getElementById('image_holder');
console.log(image_holder);
const pizza_image = document.createElement('IMG');
pizza_image.setAttribute('src', './images/pizza_canvas.png');

let topping = [];

const topping_loader = () => {
    data.toppings.forEach((topping1, idx) => {
        console.log(topping1.name, idx);
        topping[idx] = {};
        topping[idx].left = document.createElement('IMG');
        topping[idx].left.setAttribute('src', `./images/${topping1.file_prefix}_left.png`);

        topping[idx].right = document.createElement('IMG');
        topping[idx].right.setAttribute('src', `./images/${topping1.file_prefix}_right.png`);
    });
};
topping_loader();

Array.from(toppingArray).forEach(function (element) {
    element.innerHTML += `<div class="toppings_box">
        <div class="topping_amount">
            <label class="container">
                <input class="img_radio extra_radio" type="radio" name="topping_amount_${element.id}" value="Extra">
                <img class="topping_resize" src="./images/Extra.png">
            </label>
            <label class="container">
                <input class="img_radio normal_radio" type="radio" name="topping_amount_${element.id}" value="Normal">
                <img class="topping_resize" src="./images/Normal.png">
            </label>
            <label class="container">
                <input class="img_radio none_radio" type="radio" name="topping_amount_${element.id}" value="None" checked>
                <img class="topping_resize" src="./images/None.png">

            </label>
        </div>
        <div class="portion_of_pizza">
            <label>
                <input class="img_radio left_radio" type="radio" name="pizza_portion_${element.id}" value="left">
                <img class="img_resize" src="./images/PizzaPortionLeft.png">
            </label>

            <label>
                <input class="img_radio full_radio" type="radio" name="pizza_portion_${element.id}" value="full" checked>
                <img class="img_resize" src="./images/PizzaPortionFull.png">
            </label>

            <label>
                <input class="img_radio right_radio" type="radio" name="pizza_portion_${element.id}" value="right">
                <img class="img_resize" src="./images/PizzaPortionRight.png">
            </label>
        </div>
</div>`;
});

const canvas = document.getElementById('pizza_view');

canvas.width = 630;
canvas.height = 630;
const ctx = canvas.getContext('2d');

let anchovy_left = false;
let anchovy_right = false;
let bacon_left = false;
let bacon_right = false;
let bellPepper_left = false;
let bellPepper_right = false;
let cheese_left = false;
let cheese_right = false;
let ham_left = false;
let ham_right = false;
let jalapeno_left = false;
let jalapeno_right = false;
let olive_left = false;
let olive_right = false;
let pepperoni_left = false;
let pepperoni_right = false;
let pineapple_left = false;
let pineapple_right = false;
let sausage_left = false;
let sausage_right = false;

const loop = () => {
    ctx.clearRect(0, 0, 0, 0);
    ctx.drawImage(pizza_image, 0, 0);
    if (anchovy_left) {
        ctx.drawImage(topping[0].left, 0, 0);
    }
    if (anchovy_right) {
        ctx.drawImage(topping[0].right, 0, 0);
    }
    if (bacon_left) {
        ctx.drawImage(topping[1].left, 0, 0);
    }
    if (bacon_right) {
        ctx.drawImage(topping[1].right, 0, 0);
    }
    if (bellPepper_left) {
        ctx.drawImage(topping[2].left, 0, 0);
    }
    if (bellPepper_right) {
        ctx.drawImage(topping[2].right, 0, 0);
    }
    if (cheese_left) {
        ctx.drawImage(topping[3].left, 0, 0);
    }
    if (cheese_right) {
        ctx.drawImage(topping[3].right, 0, 0);
    }
    if (ham_left) {
        ctx.drawImage(topping[4].left, 0, 0);
    }
    if (ham_right) {
        ctx.drawImage(topping[4].right, 0, 0);
    }
    if (jalapeno_left) {
        ctx.drawImage(topping[5].left, 0, 0);
    }
    if (jalapeno_right) {
        ctx.drawImage(topping[5].right, 0, 0);
    }
    if (olive_left) {
        ctx.drawImage(topping[6].left, 0, 0);
    }
    if (olive_right) {
        ctx.drawImage(topping[6].right, 0, 0);
    }
    if (pepperoni_left) {
        ctx.drawImage(topping[7].left, 0, 0);
    }
    if (pepperoni_right) {
        ctx.drawImage(topping[7].right, 0, 0);
    }
    if (pineapple_left) {
        ctx.drawImage(topping[8].left, 0, 0);
    }
    if (pineapple_right) {
        ctx.drawImage(topping[8].right, 0, 0);
    }
    if (sausage_left) {
        ctx.drawImage(topping[10].left, 0, 0);
    }
    if (sausage_right) {
        ctx.drawImage(topping[10].right, 0, 0);
    }
};

setInterval(loop, 100);

const extraRadioBtn = document.getElementsByClassName("extra_radio");
const normalRadioBtn = document.getElementsByClassName("normal_radio");
const noneRadioBtn = document.getElementsByClassName("none_radio");
const leftRadioBtn = document.getElementsByClassName("left_radio");
const fullRadioBtn = document.getElementsByClassName("full_radio");
const rightRadioBtn = document.getElementsByClassName("right_radio");

extraRadioBtn.addEventListener('click', addExtraAmount);
normalRadioBtn.addEventListener('click', addNormalAmount);
noneRadioBtn.addEventListener('click', removeTopping);
leftRadioBtn.addEventListener('click', toppingsOnLeft);
fullRadioBtn.addEventListener('click', toppingsOnWholePizza);
rightRadioBtn.addEventListener('click', toppingsOnRight);

const addExtraAmount = () => {
    
}


const addNormalAmount = () => {
    
}


const removeTopping = () => {
    
}


const toppingsOnLeft = () => {
    
}


const toppingsOnWholePizza = () => {
    
}


const toppingsOnRight = () => {
    
}