$(".buy-button").click(function(){
    $(".buy-button").text("ADDED TO CART")
})

  var men = $(".men");
  var women = $(".women");
  var boys = $(".boys");
  var girls = $(".girls");
  var customize = $(".customize");
  var help = $(".help");
  var myaccount = $(".myaccount");
  var shoppingcart = $(".shoppingcart");

  shoppingcart.click(function(){
    shoppingcart.toggleClass("nav-underline")
    shoppingcart.css("text-decoration-color", "red")
  })
