//This will be used hide the sign when they dont have 5 topping but when they do we will modify it to show
toggle_visibility('special-deal');

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

//Add functionality to count selected toppings until 5