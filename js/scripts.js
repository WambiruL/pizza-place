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
});

//Business Logic
function chargeCalculate(){

}
function validation(){
    var sizes= document.getElementsByName("sizes").value();
    var crust=document.getElementsByName("crust").value();
    var toppings=document.getElementsByName("toppings").value();
      
    if(sizes==""){
        alert("Choose one option")
    }else if(crust==""){
        alert("Choose one option")
    }else if(toppings==""){
        alert("Choose one option")
    }else{
        alert("You have choosen "+ sizes+ "," + crust + "," + toppings +"." + "Your total charge is ")//come and add the charge function.
        let response=prompt("Would you like a delivery? Enter Yes or NO")
        if(response=="yes", "Yes", "YES"){
            alert("Insert your details below and launch delivery.")
        }else if(response=="no", "No", "NO"){
            alert("Thank you dear customer. Enjoy your meal and have a slice day.")
        }else{
            alert("I am sorry, I didn't understand your response")
        }
    }
}
