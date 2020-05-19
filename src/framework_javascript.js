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
    <div id="total">Your current price</div>
    <div id="image_holder">
        <canvas id="pizza_view"></canvas>
        <div id="pizza_size">
            <ul class="size_options_list">
                <li>
                    <label>X-Large
                    <input class="size_radio" type="radio" name="pizza_size" value="x-large" />
                </li>
                <li>
                    <label>Large
                    <input class="size_radio" type="radio" name="pizza_size" value="large" checked />
                </li>
                <li>
                    <label>Medium
                    <input class="size_radio" type="radio" name="pizza_size" value="medium" />
                </li>
                <li>
                    <label>Small
                    <input class="size_radio" type="radio" name="pizza_size" value="small" />
                </li>
            </ul>
        </div>
        <div id="add_to_order"><h2 class="topping_font">Add To Order</h2>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close"></span>
                    <h1>Thank you for your order!</h1>
                    <p id="total_amount"></p>
                </div>
            </div>
        </div>
    </div>
</div>`;

export const toppingArray = document.getElementsByClassName("toppings");
