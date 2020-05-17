import './style.css';
import { toppings } from './framework_javascript';
import { isChecked } from './prices';

// document.getElementById('pizza').innerHTML = pizza_app;

// const image_holder = document.getElementById('image_holder');

// const pizza_image = document.createElement('IMG');
// image_holder.appendChild(pizza_image);
// pizza_image.setAttribute('src', './images/pizza.png');

// let toppings = [];

// const topping_loader = () => {
//     data.toppings.forEach((topping, idx) => {
//         console.log(topping.name, idx);
//         toppings[idx] = {};
//         toppings[idx].left = document.createElement('IMG');
//         image_holder.appendChild(toppings[idx].left);
//         toppings[idx].left.setAttribute('src', `./images/${topping.file_prefix}_left.png`);

//         toppings[idx].right = document.createElement('IMG');
//         image_holder.appendChild(toppings[idx].right);
//         toppings[idx].right.setAttribute('src', `./images/${topping.file_prefix}_right.png`);
//     });
// };

// topping_loader();

// const canvas = document.getElementById('pizza_view');
// canvas.width = 270;
// canvas.height = 270;
// const ctx = canvas.getContext('2d');

// let pep_left = false;
// let pep_right = true;

// const loop = () => {
//     ctx.clearRect(0, 0, 270, 270);
//     ctx.drawImage(pizza_image, 10, 10);
//     if (pep_left) {
//         ctx.drawImage(toppings[0].left, 10, 10);
//     }
//     if (pep_right) {
//         ctx.drawImage(toppings[0].right, 10, 10);
//     }

// };

// setInterval(loop, 100);