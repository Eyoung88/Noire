//This will be used hide the sign when they dont have 5 topping but when they do we will modify it to show

// toggle_visibility('special-deal');

// function toggle_visibility(id) {
//    var e = document.getElementById(id);
//    if (e.style.display == 'block')
//       e.style.display = 'none';
//    else
//       e.style.display = 'block';
// }

// var radioChecked = document.getElementById('inputBtn').addEventListener('click', isChecked);

export const isChecked = (evt)  => {
   let price = 0;
   
   if(document.getElementById('inputBtn').click()) {
      document.getElementById("order").innerHTML = "Your current price is: " + price;
   }
   else {
      document.getElementById('order').innerHTML = "Please select an option";
      evt.preventDefault();
   }

}



//Add functionality to count selected toppings until 5
// e.preventDefault function on form