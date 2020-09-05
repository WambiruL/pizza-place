//User Interface.
$(document).ready(function(){
    //lists
    $(".sizes").click(function(){
        $(".sizes h4").toggle(1000);
    })
    $(".sizes").click(function(){
        $(".hidden").toggle(1000);
    })

    $(".crust").click(function(){
        $(".crust h4").toggle(1000);
    })
    $(".crust").click(function(){
        $(".hidden-two").toggle(1000);
    })

    $(".toppings").click(function(){
        $(".toppings h4").toggle(1000);
    })
    $(".toppings").click(function(){
        $(".hidden-three").toggle(1000);
    })

    //order
    $("form#select-order").submit(function(event){
        event.preventDefault();
    })
     
});

//Business Logic
function Charges(Sizes, Crust, Toppings){
   this.sizeCharge=Sizes;
   this.crustCharge=Crust;
   this.toppingsCharge=Toppings;    
}

function sizes(){
  return large, medium, small
}
    let large= 800;
    let medium= 550;
    let small= 320;



function crust(){
    return stuffed, crunchy, brooklyn, gluten_free, handmade
}
let stuffed= 150;
let crunchy=200;
let brooklyn=250;
let gluten_free=300;
let handmade=350;

function toppings(){
    return pepperoni, sausage, mushroom, olive, greenpepper
}
let pepperoni=70;
let sausage=80;
let mushroom=100;
let olive=120;
let greenpepper=150; 

Charges.prototype.total=function(){
    return this.Sizes + this.Crust + this.Toppings;
}

