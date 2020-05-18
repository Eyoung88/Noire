import './style.scss';
import { pizza } from './framework_javascript';
import { toppings } from './framework_javascript';
import { isChecked } from './prices';
import {data} from './data';

document.getElementById('pizza').innerHTML = toppings;

const image_holder = document.getElementById('image_holder');

const pizza_image = document.createElement('IMG');
image_holder.appendChild(pizza_image);
pizza_image.setAttribute('src', './images/pizza_canvas.png');

let topping = [];

const topping_loader = () => {
    data.toppings.forEach((topping1, idx) => {
        console.log(topping1.name, idx);
        topping[idx] = {};
        topping[idx].left = document.createElement('IMG');
        image_holder.appendChild(topping[idx].left);
        topping[idx].left.setAttribute('src', `./images/${topping1.file_prefix}_left.png`);

        topping[idx].right = document.createElement('IMG');
        image_holder.appendChild(topping[idx].right);
        topping[idx].right.setAttribute('src', `./images/${topping1.file_prefix}_right.png`);
    });
};

topping_loader();

const canvas = document.getElementById('pizza_view');
canvas.width = 270;
canvas.height = 270;
const ctx = canvas.getContext('2d');

let pep_left = false;
let pep_right = false;
let ham_left = false;
let ham_right = false;
let olive_left = false;
let olive_right = false;
let pineapple_left = false;
let pineapple_right = false;
let sausage_left = false;
let sausage_right = false;
let bacon_left = false;
let bacon_right = false;
let pepper_left = false;
let pepper_right = false;
let cheese_left = false;
let cheese_right = false;
let anchovy_left = false;
let anchovy_right = false;
let jalapeno_left = false;
let jalapeno_right = false;

const loop = () => {
    ctx.clearRect(0, 0, 270, 270);
    ctx.drawImage(pizza_image, 0, 0);
    if (pep_left) {
        ctx.drawImage(topping[0].left, 0, 0);
    }
    if (pep_right) {
        ctx.drawImage(topping[0].right, 0, 0);
    }
    if (ham_left) {
        ctx.drawImage(topping[1].left, 0, 0);
    }
    if (ham_right) {
        ctx.drawImage(topping[1].right, 0, 0);
    }
    if (olive_left) {
        ctx.drawImage(topping[2].left, 0, 0);
    }
    if (olive_right) {
        ctx.drawImage(topping[2].right, 0, 0);
    }
    if (pineapple_left) {
        ctx.drawImage(topping[3].left, 0, 0);
    }
    if (pineapple_right) {
        ctx.drawImage(topping[3].right, 0, 0);
    }
    if (sausage_left) {
        ctx.drawImage(topping[4].left, 0, 0);
    }
    if (sausage_right) {
        ctx.drawImage(topping[4].right, 0, 0);
    }
    if (bacon_left) {
        ctx.drawImage(topping[5].left, 0, 0);
    }
    if (bacon_right) {
        ctx.drawImage(topping[5].right, 0, 0);
    }
    if (pepper_left) {
        ctx.drawImage(topping[6].left, 0, 0);
    }
    if (pepper_right) {
        ctx.drawImage(topping[6].right, 0, 0);
    }
    if (cheese_left) {
        ctx.drawImage(topping[7].left, 0, 0);
    }
    if (cheese_right) {
        ctx.drawImage(topping[7].right, 0, 0);
    }
    if (anchovy_left) {
        ctx.drawImage(topping[8].left, 0, 0);
    }
    if (anchovy_right) {
        ctx.drawImage(topping[8].right, 0, 0);
    }
    if (jalapeno_left) {
        ctx.drawImage(topping[9].left, 0, 0);
    }
    if (jalapeno_right) {
        ctx.drawImage(topping[9].right, 0, 0);
    }
};

setInterval(loop, 100);