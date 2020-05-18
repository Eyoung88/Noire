const head = document.getElementsByTagName('head');
const pizza = document.getElementById("pizza");
const toppings = document.getElementsByClassName("toppings");

head.innerHTML = `<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap" rel="stylesheet">`;

pizza.innerHTML = `<div id="toppings_row">
<div id="Pepperoni" class="toppings"></div>
<div id="Ham" class="toppings"></div>
<div id="Olives" class="toppings"></div>
<div id="Pineapple" class="toppings"></div>
<div id="Sausage" class="toppings"></div>
<div id="Bacon" class="toppings"></div>
<div id="Bell Peppers" class="toppings"></div>
<div id="Cheese" class="toppings"></div>
<div id="Anchovies" class="toppings"></div>
<div id="Jalapenos" class="toppings"></div>
</div>
<div id="pizza_canvas">
<canvas id="pizza_view" width="270" height="270"></canvas>
</div>`;

Array.from(toppings).forEach(function (element) {
    element.innerHTML += `<div class="toppings_box">

        <div class="grid-container">
            <div class="grid-item topping_font">${element.id}</div>
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
                        <input class="img_radio" type="radio" name="topping_amount_${element.id}" value="Normal" checked>
                        <img class="topping_resize" src="./images/Normal.png">
                    </label>
                    <label class="container">
                        <input class="img_radio" type="radio" name="topping_amount_${element.id}" value="None">
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
                    <input class="img_radio" type="radio" name="pizza_portion_${element.id}" value="full" checked>
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
<<<<<<< HEAD
});

// export const pizza_app = `
// <h2>Pizza Ordering</h2>
//     <div class="topping_amount">
//     <label class="container">Extra
//         <input type="radio" id="pepExtra" name="topping_amount" value="Extra">
//         <span class="checkmark"></span>
//     </label>
//     </div>
//     <div class="portion_of_pizza">
//             <label class="container">Left Half
//                 <input type="radio" id="pepLeft" name="pizza_portion" value="left">
//                 <span class="checkmark"></span>
//             </label>
//             <label class="container">Normal
//                 <input type="radio" id="pepRight" name="pizza_portion" value="right">
//                 <span class="checkmark"></span>
//             </label>
//             <label class="container">None
//                 <input type="radio" id="pepFull" name="pizza_portion" value="full">
//                 <span class="checkmark"></span>
//             </label>
//         </div>
//     <div>
//       <canvas id='pizza_view'></canvas>
//     </div>
//     <div id='image_holder'></div>
// `;
=======
});
>>>>>>> 2147ab5ba82117a93fc6e601aef260509bc76c8b
