var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input#size").val();
    var inputtedCrust = $("input#crust").val();
    var inputtedTopping = $("input#topping").val();
    var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedTopping);

    if(inputtedSize == 'small'){
      return 500 + 100 + 50;
    };
    $("ul#contacts").append("<li><span class='contact'>" + newPizza.pizza() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newPizza.pizza());
      $(".first-name").text(newPizza.size);
      $(".last-name").text(newPizza.crust);
      $("ul#addresses").text("");
    });
    
    $("input#size").val("");
    $("input#crust").val("");
    $("input#topping").val("");
  });