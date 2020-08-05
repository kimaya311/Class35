class Form {
constructor(){}
display(){
    var Title = createElement("H2");
    Title.html("Car Racing Game");
    Title.position(130,0);
  var input = createInput("Name");
  var Button = createButton("play");
  var Greeting =createElement("H3");
  input.position(130,60);
  Button.position(250,100);

  Button.mousePressed(function(){
      input.hide();
      Button.hide();
      var name = input.value();
      playerCount++;
      player.update(name);
      player.updateCount(playerCount);

      Greeting.html("Hello"+name);
      Greeting.position(330,160);
  })
}
}