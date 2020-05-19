import './style.scss';
import { pizza } from './framework_javascript';
import { toppingArray } from './framework_javascript';
import { isChecked } from './prices';
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
    element.innerHTML += `<div class="toppings_box">
    <div class="grid-container">
        <div class="grid-item topping_font">${data.toppings[counter].name}</div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>  
        <div class="grid-item"></div>
        <div class="grid-item">
            <div class="topping_amount">
                <label class="container">
                    <input class="img_radio" type="radio" name="topping_amount_${element.id}" value="Extra">
                    <img class="topping_resize" src="./images/Extra.png">
                </label>
                <label class="container">
                    <input class="img_radio" type="radio" name="topping_amount_${element.id}" value="Normal">
                    <img class="topping_resize" src="./images/Normal.png">
                </label>
                <label class="container">
                    <input class="img_radio" type="radio" name="topping_amount_${element.id}" value="None" checked>
                    <img class="topping_resize" src="./images/None.png">
                </label>
            </div>
        </div>
        <div class="grid-item">
            <div class="portion_of_pizza">
            <label>
                <input class="img_radio" type="radio" name="pizza_portion_${element.id}" value="left">
                <img class="img_resize" src="./images/PizzaPortionLeft.png">
            </label>
            <label>
                <input class="img_radio" type="radio" name="pizza_portion_${element.id}" value="full">
                <img class="img_resize" src="./images/PizzaPortionFull.png">
            </label>
            <label>
                <input class="img_radio" type="radio" name="pizza_portion_${element.id}" value="right">
                <img class="img_resize" src="./images/PizzaPortionRight.png">
            </label>
        </div>
    </div>
</div>
</div>`;
    counter++;
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

document.getElementById("special1").addEventListener('click', createSpecialPizza1);
document.getElementById("special2").addEventListener('click', createSpecialPizza2);
document.getElementById("special3").addEventListener('click', createSpecialPizza3);
document.getElementById("special4").addEventListener('click', createSpecialPizza4);
document.getElementById("special5").addEventListener('click', createSpecialPizza5);

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

function createSpecialPizza1() {
    anchovy_left = false;
    anchovy_right = false;
    bacon_left = false;
    bacon_right = false;
    ham_left = false;
    ham_right = false;
    jalapeno_left = false;
    jalapeno_right = false;
    pepperoni_left = false;
    pepperoni_right = false;
    pineapple_left = false;
    pineapple_right = false;
    sausage_left = false;
    sausage_right = false;

    cheese_left = true;
    cheese_right = true;
    bellPepper_left = true;
    bellPepper_right = true;
    olive_left = true;
    olive_right = true;

    // console.log(document.getElementById(`topping_amount_${data.toppings[2].name}`));
    // console.log(document.getElementsByName(`topping_amount_${data.toppings[2].name}`)[checked]);

}

function createSpecialPizza2() {
    anchovy_left = false;
    anchovy_right = false;
    bacon_left = false;
    bacon_right = false;
    bellPepper_left = false;
    bellPepper_right = false;
    cheese_left = false;
    cheese_right = false;
    ham_left = false;
    ham_right = false;
    jalapeno_left = false;
    jalapeno_right = false;
    olive_left = false;
    olive_right = false;
    pepperoni_left = false;
    pepperoni_right = false;
    pineapple_left = false;
    pineapple_right = false;
    sausage_left = false;
    sausage_right = false;

    cheese_left = true;
    cheese_right = true;
    ham_left = true;
    ham_right = true;
    jalapeno_left = true;
    jalapeno_right = true;
    anchovy_left = true;
    anchovy_right = true;
}

function createSpecialPizza3() {
    anchovy_left = false;
    anchovy_right = false;
    bacon_left = false;
    bacon_right = false;
    bellPepper_left = false;
    bellPepper_right = false;
    cheese_left = false;
    cheese_right = false;
    ham_left = false;
    ham_right = false;
    jalapeno_left = false;
    jalapeno_right = false;
    olive_left = false;
    olive_right = false;
    pepperoni_left = false;
    pepperoni_right = false;
    pineapple_left = false;
    pineapple_right = false;
    sausage_left = false;
    sausage_right = false;

    jalapeno_left = true;
    jalapeno_right = true;
    bellPepper_left = true;
    bellPepper_right = true;
    olive_left = true;
    olive_right = true;
    pineapple_left = true;
    pineapple_right = true;
}

function createSpecialPizza4() {
    anchovy_left = false;
    anchovy_right = false;
    bacon_left = false;
    bacon_right = false;
    bellPepper_left = false;
    bellPepper_right = false;
    cheese_left = false;
    cheese_right = false;
    ham_left = false;
    ham_right = false;
    jalapeno_left = false;
    jalapeno_right = false;
    olive_left = false;
    olive_right = false;
    pepperoni_left = false;
    pepperoni_right = false;
    pineapple_left = false;
    pineapple_right = false;
    sausage_left = false;
    sausage_right = false;

    cheese_left = true;
    cheese_right = true;
    ham_left = true;
    ham_right = true;
    anchovy_left = true;
    anchovy_right = true;
    bacon_left = true;
    bacon_right = true;
    sausage_left = true;
    sausage_right = true;
    pepperoni_left = true;
    pepperoni_right = true;
}

function createSpecialPizza5() {
    anchovy_left = false;
    anchovy_right = false;
    bacon_left = false;
    bacon_right = false;
    bellPepper_left = false;
    bellPepper_right = false;
    cheese_left = false;
    cheese_right = false;
    ham_left = false;
    ham_right = false;
    jalapeno_left = false;
    jalapeno_right = false;
    olive_left = false;
    olive_right = false;
    pepperoni_left = false;
    pepperoni_right = false;
    pineapple_left = false;
    pineapple_right = false;
    sausage_left = false;
    sausage_right = false;

    cheese_left = true;
    cheese_right = true;
    ham_left = true;
    ham_right = true;
    pineapple_left = true;
    pineapple_right = true;
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