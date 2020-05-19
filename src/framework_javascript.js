import { data } from './data';

export const pizza = `
<div id="special_pizzas"></div>
<div">
    <div id="toppings_row">
        <div id="${data.toppings[0].name}" class="toppings"></div>
        <div id="${data.toppings[1].name}" class="toppings"></div>
        <div id="${data.toppings[2].name}" class="toppings"></div>
        <div id="${data.toppings[3].name}" class="toppings"></div>
        <div id="${data.toppings[4].name}" class="toppings"></div>
        <div id="${data.toppings[5].name}" class="toppings"></div>
        <div id="${data.toppings[6].name}" class="toppings"></div>
        <div id="${data.toppings[7].name}" class="toppings"></div>
        <div id="${data.toppings[8].name}" class="toppings"></div>
        <div id="${data.toppings[9].name}" class="toppings"></div>
    </div>
    <div id="image_holder">
        <canvas id="pizza_view"></canvas>
        <div id="pizza_size">
            <div id="x-large"></div>
            <div id="large"></div>
            <div id="medium"></div>
            <div id="small"></div>
        </div>
    </div>
</div>`;

export const toppingArray = document.getElementsByClassName("toppings");
