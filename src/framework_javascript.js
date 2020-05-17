const toppings = document.getElementsByClassName("toppings");

Array.from(toppings).forEach(function (element) {
    element.innerHTML += `<div class="toppings_box">
        <div class="topping_amount">
            <label class="container">
                <input class="img_radio" type="radio" name="topping_amount" value="Extra">
                <img class="topping_resize" src="../images/Extra.png">
            </label>
            <label class="container">
                <input class="img_radio" type="radio" name="topping_amount" value="Normal" checked>
                <img class="topping_resize" src="../images/Normal.png">
            </label>
            <label class="container">
                <input class="img_radio" type="radio" name="topping_amount" value="None">
                <img class="topping_resize" src="../images/None.png">
            </label>
        </div>
        <div class="portion_of_pizza">
            <label>
                <input class="img_radio" type="radio" name="test" value="left">
                <img class="img_resize" src="../images/PizzaPortionLeft.png">
            </label>

            <label>
                <input class="img_radio" type="radio" name="test" value="full" checked>
                <img class="img_resize" src="../images/PizzaPortionFull.png">
            </label>

            <label>
                <input class="img_radio" type="radio" name="test" value="right">
                <img class="img_resize" src="../images/PizzaPortionRight.png">
            </label>
        </div>
</div>`;});