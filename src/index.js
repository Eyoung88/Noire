import './style.scss';
import { pizza } from './framework_javascript';
import { toppingArray } from './framework_javascript';
import { isChecked } from './prices';
import { data } from './data';

document.getElementById('pizza').innerHTML = pizza;

const image_holder = document.getElementById('image_holder');
console.log(image_holder);
const pizza_image = document.createElement('IMG');
// image_holder.appendChild(pizza_image);
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

canvas.width = 630;
canvas.height = 630;
const ctx = canvas.getContext('2d');

let pep_left = false;
let pep_right = true;

const loop = () => {
    ctx.clearRect(0, 0, 0, 0);
    ctx.drawImage(pizza_image, 0, 0);
    if (pep_left) {
        ctx.drawImage(topping[0].left, 0, 0);
    }
    if (pep_right) {
        ctx.drawImage(topping[0].right, 0, 0);
    }

};

setInterval(loop, 100);