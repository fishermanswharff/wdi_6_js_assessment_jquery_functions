$(document).ready(function(){

  // Question 1 Use jQuery to add two more elements to the the UL in the 'question-1' div
  // —————————————————————————————————————————————————————————
  var addItems = function(text){
    $("#question-1 ul").append("<li>"+text+"</li>");
  };
  addItems("beaver");
  addItems("fish");

  
  // Question 2 // Add a click event handler to the paragraph in the 'question-2' div which triggers a method called 'alertClicked', which will display an alert with the text of "Question 2 Success".
  // —————————————————————————————————————————————————————————
  var alertClicked = function() {
    alert("Question 2 Success");
  };
  $("#question-2").on("click","p", alertClicked);
  

  // Question 3 Why won't the following code make clicking on anything the 'question-3' div invoke the alertClicked method?
  // —————————————————————————————————————————————————————————
  $('#question-3').on('click', alertClicked);
  // is this a trick question? because it does invoke the alertClicked function. In order for this code to NOT work, I would need to alter the alertClicked function to take a parameter.


  // Question 4 Make the HTML in the 'question-4' div fade out when you hover over it, and fade back in when you move your mouse away from it
  // —————————————————————————————————————————————————————————
  $("#question-4").hover(function(){$(this).fadeOut(100)},function(){$(this).fadeIn(100)});


  // Question 5 Make question 5's h2 turn blue when someone types 'winning' in its input element and hits enter
  // —————————————————————————————————————————————————————————
  $("#q-5-input").change(function(){
    $(this).val() === "winning" ? $(this).siblings('h2').css("color","blue") : "";
  });


  // Question 6 Add a method to the String prototype called 'reverse' which will return the string reversed. You should be able to run 'foo'.reverse() and get 'oof' Use this method to reverse the text in the h2 in the 'question-6' div
  // —————————————————————————————————————————————————————————
  String.prototype.reverse = function(){
    return this.split("").reverse().join("");
  };
  string = $("#question-6 h2").html();
  $("#question-6 h2").html(string.reverse());


  // Question 7 Write a method called 'highLightHeaders' that will add a class of 'highlight' to all h2's when it is invoked
  // —————————————————————————————————————————————————————————
  var highLightHeaders = function(){
    $("h2").addClass("highlight");
  };
  highLightHeaders();


  // Question 8 Define a constructor function called `Cat`,that accepts a `name`, an `age`, and a `color`, and stores these values as properties.
  // —————————————————————————————————————————————————————————
  var Cat = function(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
  };


  // Question 9 Add a function called `description` to the `Cat` prototype that returns a string describing the cat in this format: "<name> is a <age>-year-old <color> cat."
  // —————————————————————————————————————————————————————————
  Cat.prototype.description = function(){
    return this.name + " is a " + this.age + "-year-old " + this.color + " cat.";
  };

  var cat = new Cat("woodrow", 10,"blue-point");
  console.log(cat.description());


  // Question 10 Use the methods of .map and .reduce to return the sum of the prices of the objects in the array below. Do *not* use a for loop
  // —————————————————————————————————————————————————————————
  var items = [
    {name: 'iPhone 5c', price: 99.99},
    {name: 'iPhone 5s', price: 149.99},
    {name: 'iPhone 6', price: 249.99},
    {name: 'iPhone 6 plus', price: 399.99}
  ];

  var prices = items.map(function(element){
    return element.price;
  });
  var sum = prices.reduce(function(previousValue, currentValue, index, array){
    return previousValue + currentValue;
  });
  console.log(prices);
  console.log(sum);
});