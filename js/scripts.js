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

        let sizes= $("input#sizes").val();
        let crust=$("input#crust").val();
        let toppings=$("input#toppings").val();
        let quantity= parseInt($("#quantity").val());

        let newOrder= new Pizza(sizes, crust, toppings, quantity, false);
        $("#size-price").text("You have ordered " + newOrder.sizes+" pizza @"+ "KSH. " + sizePrice() + " with").css("background-color", "pink");
        $("#crust-price").text(newOrder.crust+ " Crust @" + "KSH. " + crustPrice() + " with" ).css("background-color", "pink");
        $("#toppings-price").text(newOrder.toppings+ " Topping @" + "KSH. " + toppingsPrice()).css("background-color", "pink");
        $("#total").text( "Total is KSH. " + totalPriceMinusDelivery()+ " Click the delivery button below, to get your order delivered to your door step.").css("background-color", "white");
        console.log(newOrder);
    
    });
    //deliver
    $("form#delivery").submit(function(event){
        event.preventDefault;
    })
     
});

//Business Logic
function Pizza(sizes,crust, toppings, quantity,delivery){
    this.sizes=sizes;
    this.crust=crust;
    this.toppings=toppings;
    this.quantity=quantity;
    this.delivery=delivery;

    sizePrice= function(){
        if(this.sizes=="Large"){
            return 800;
        }else if(this.sizes=="Medium"){
            return 550;
        }else{
            return 320;
        }
    }

    crustPrice=function(){
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

    toppingsPrice=function(){
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

    totalPriceMinusDelivery=function(){
        let priceSize=this.sizePrice();
        let priceCrust=this.crustPrice();
        let priceToppings=this.toppingsPrice();

        return priceSize + priceCrust + priceToppings;
    }

    priceInQuantity=function(){
        let originalPrice=this.totalPriceMinusDelivery();
        return originalPrice * this.quantity;
    }

    totalPlusDelivery=function(){
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
         alert(name + ", phone number " + number + " zip code" + zip_code + " , we have received your location and we shall deliver your order shortly. Your total charge including deliver is " + newOrder.totalPlusDelivery());
     }
}

