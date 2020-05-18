
export const pizza = `<div id="toppings_row">
<div id="pepperoni" class="toppings">Pepperoni</div>
<div id="ham" class="toppings">Ham</div>
<div id="olives" class="toppings">Olives</div>
<div id="pineapple" class="toppings">Pineapple</div>
<div id="sausage" class="toppings">Sausage</div>
<div id="bacon" class="toppings">Bacon</div>
<div id="bell_peppers" class="toppings">Bell Peppers</div>
<div id="cheese" class="toppings">Cheese</div>
<div id="anchovies" class="toppings">Anchovies</div>
<div id="jalapenos" class="toppings">Jalapenos</div>
</div>
<div id="image_holder">
<canvas id="pizza_view"></canvas>
</div>`;

export const toppingArray = document.getElementsByClassName("toppings");

Array.from(toppingArray).forEach(function (element) {
    element.innerHTML += `<div class="toppings_box">
        <div class="topping_amount">
            <label class="container">
                <input class="img_radio" type="radio" name="topping_amount_${element.id}" value="Extra">
                <img class="topping_resize" src="./images/Extra.png">
            </label>
            <label class="container">
                <input class="img_radio" type="radio" name="topping_amount_${element.id}" value="Normal" checked>
                <img class="topping_resize" src="./images/Normal.png">
            </label>
            <label class="container">
                <input class="img_radio" type="radio" name="topping_amount_${element.id}" value="None">
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
});