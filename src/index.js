import './style.scss';
import { pizza } from './framework_javascript';
import { toppingArray } from './framework_javascript';
import { isChecked } from './prices'; //CHANGE
import { data } from './data';

document.getElementById('pizza').innerHTML = pizza;

const image_holder = document.getElementById('image_holder');
const pizza_image = document.createElement('IMG');
// image_holder.appendChild(pizza_image);
pizza_image.setAttribute('src', './images/pizza_canvas.png');

let topping = [];

const topping_loader = () => {
    data.toppings.forEach((topping1, idx) => {
        // console.log(topping1.name, idx);
        topping[idx] = {};
        topping[idx].left = document.createElement('IMG');
        // image_holder.appendChild(topping[idx].left);
        topping[idx].left.setAttribute('src', `./images/${topping1.file_prefix}_left.png`);

        topping[idx].right = document.createElement('IMG');
        // image_holder.appendChild(topping[idx].right);
        topping[idx].right.setAttribute('src', `./images/${topping1.file_prefix}_right.png`);
    });
};
topping_loader();

let counter = 0;
Array.from(toppingArray).forEach(function (element) {
    // console.log(data.toppings[counter].name);
    element.innerHTML += `<div class="toppings_box">
        <div class="topping_amount">
            <label class="container">
                <input class="img_radio extraBtn" type="radio" name="topping_amount_${element.id}" value="Extra">
                <img class="topping_resize" src="./images/Extra.png">
            </label>
            <label class="container">
                <input class="img_radio normalBtn" type="radio" name="topping_amount_${element.id}" value="Normal" checked>
                <img class="topping_resize" src="./images/Normal.png">
            </label>
            <label class="container">
                <input class="img_radio noneBtn" type="radio" name="topping_amount_${element.id}" value="None">
                <img class="topping_resize" src="./images/None.png">

            </label>
        </div>
        <div class="portion_of_pizza">
            <label>
                <input class="img_radio" type="radio" name="pizza_portion_${element.id}" value="left">
                <img class="img_resize" src="./images/PizzaPortionLeft.png">
            </label>

            <label>
                <input class="img_radio" type="radio" name="pizza_portion_${element.id}" value="full" checked>
                <img class="img_resize" src="./images/PizzaPortionFull.png">
            </label>

            <label>
                <input class="img_radio" type="radio" name="pizza_portion_${element.id}" value="right">
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
        price = 2;
        document.getElementById("total").innerHTML = "Your current price is: " + totalPrice;
    }
}
for (let iterator of document.getElementsByClassName('extraBtn')) {
    iterator.addEventListener('click', addDoublePrice);
}

totalPrice = price;

const addPrice = (evt) => {
    toppingCounter += 1;
    if (evt.target.checked == true) {
        totalPrice = price + 1;
        document.getElementById("total").innerHTML = "Your current price is: " + totalPrice;
    }

}
for (let iterator of document.getElementsByClassName('normalBtn')) {
    iterator.addEventListener('click', addPrice);
}

const subPrice = (evt) => {
    toppingCounter -= 1;
    if (evt.target.checked == true) {
        if (totalPrice == 0) {
            console.log("If price is 0", price);
            price = 0;
            document.getElementById("total").innerHTML = "Your current price is: " + totalPrice;
        }
        else {
            totalPrice--;
            price = 0;
            console.log("If price is subtraced", price);
            document.getElementById("total").innerHTML = "Your current price is: " + totalPrice;
        }
    }
    if (evt.target.checked == false) {
        totalPrice = price + 1;
        document.getElementById("total").innerHTML = "Your current price is: " + totalPrice;
    }
}
for (let iterator of document.getElementsByClassName('noneBtn')) {
    iterator.addEventListener('click', subPrice);
}

// if(toppingCounter == 5) {
//     totalPrice - 3;
// }


const canvas = document.getElementById('pizza_view');

canvas.width = 630;
canvas.height = 630;
const ctx = canvas.getContext('2d');

let anchovy_left = true;
let anchovy_right = true;
let bacon_left = true;
let bacon_right = true;
let bellPepper_left = true;
let bellPepper_right = true;
let cheese_left = true;
let cheese_right = true;
let ham_left = true;
let ham_right = true;
let jalapeno_left = true;
let jalapeno_right = true;
let olive_left = true;
let olive_right = true;
let pepperoni_left = true;
let pepperoni_right = true;
let pineapple_left = true;
let pineapple_right = true;
let sausage_left = true;
let sausage_right = true;

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
        ctx.drawImage(topping[9].left, 0, 0);
    }
    if (sausage_right) {
        ctx.drawImage(topping[9].right, 0, 0);
    }

};

setInterval(loop, 100);