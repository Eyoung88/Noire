export const toppings = document.getElementsByClassName("toppings");

Array.from(toppings).forEach(function (element) {
    element.innerHTML += `<div class="toppings_box">
    <form class="pizza_topping_form">
        <div class="topping_amount">
            <label class="container">Extra
                <input type="radio" id="inputBtn" name="topping_amount" value="Extra">
                <span class="checkmark"></span>
            </label>
            <label class="container">Normal
                <input type="radio" id="inputBtn" name="topping_amount" value="Normal">
                <span class="checkmark"></span>
            </label>
            <label class="container">None
                <input type="radio" id="inputBtn" name="topping_amount" value="None" checked="checked">
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="portion_of_pizza">
            <label class="container">Left Half
                <input type="radio" name="pizza_portion" value="left">
                <span class="checkmark"></span>
            </label>
            <label class="container">Normal
                <input type="radio" name="pizza_portion" value="right">
                <span class="checkmark"></span>
            </label>
            <label class="container">None
                <input type="radio" name="pizza_portion" value="full">
                <span class="checkmark"></span>
            </label>
        </div>
    </form>
        <div>
            <p id="order">Hello</p>
        </div>
        <div id='image_holder'></div>
</div>`;
});