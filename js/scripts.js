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

        let pizzaSize= $("input:radio#sizes").val();
        let toppingType=$("input:radio#toopings").val();
        let crustType=$(".input:radio#crust").val();
        let pizzaQuantity= Number($(".quantity").val());

        let newOrder= new Pizza(pizzaSize, toppingType, crustType, pizzaQuantity, false);
        $("#size-price").text("You have ordered " + newOrder.pizzaSize+""+ "KSH. " + newOrder.sizePrice());
        $("#crust-price").text(newOrder.crustType+ " Crust" + "  KSH. " + newOrder.crustPrice());
        $("#toppings-price").text(newOrder.toppingType+ " Topping" + " KSH. " + newOrder.toppingsPrice());
        $("#total").text("Total is KSH. " + newOrder.totalPriceMinusDelivery());
        
    });
    //delivery
    $("form#delivery").submit(function(event){
        event.preventDefault;
    })
     
});

//Business Logic
class Pizza{
    constructor(sizes,crust, toppings, quantity,delivery){
    this.sizes=sizes;
    this.crust=crust;
    this.toppings=toppings;
    this.quantity=quantity;
    this.delivery=delivery;

    }
    sizePrice(){
        if(this.sizes=="Large"){
            return 800;
        }else if(this.sizes=="Medium"){
            return 550;
        }else{
            return 320;
        }
    }

    crustPrice(){
        if(this.crust=="Stuffed"){
            return 150;
        }else if(this.crust=="Crunchy"){
            return 200;
        }else if(this.crust=="Brooklyn"){
            return 250;
        }else if(this.crust=="Gluten-free"){
            return 300;
        }else{
            return 350;
        }
    }

    toppingsPrice(){
        if(this.toppings=="Pepperoni"){
            return 70;
        }else if(this.toppings=="Sausage"){
            return 80;
        }else if(this.toppings=="Mushroom"){
            return 100;
        }else if(this.toppings=="Olive"){
            return 120;
        }else{
            return 150;
        }
    }

    totalPriceMinusDelivery(){
        let priceSize=this.sizePrice();
        let priceCrust=this.crustPrice();
        let priceToppings=this.toppingsPrice();

        return priceSize + priceCrust + priceToppings;
    }

    priceInQuantity(){
        let originalPrice=this.totalPriceMinusDelivery();
        return originalPrice * this.quantity;
    }

    totalPlusDelivery(){
        let withoutDelivery=this.priceInQuantity();
        let priceDelivery=this.deliveryPrice();
        return priceDelivery + withoutDelivery;
    }


}
//Delivery form validation
function deliveryValidation(){
     var name= document.getElementById("name").value;
     var number=document.getElementById("number").value;
     var zip_code=document.getElementById("zip-code").value;

     if (name==""){
         alert("Please enter name");
     }else if(number==""){
         alert("Please enter valid phone number");
     }else if(zip_code==""){
         alert("Please enter valid zip code");
     }else{
         alert(name + ", phone number " + number + " zip code" + zip_code + " , we have received your location and we shall deliver your order shortly. Your total charge is ")
     }
}

