var punkte = 0;
function start() {
  setTimeout(function() {
    ende();
  }, 10000);
}
start();
onEvent("image_pig", "mousedown", function( ) {
  setSize("image_pig", 105, 120);
  punkte = punkte + 2;
  setText("label_punkte", punkte);
});
onEvent("image_pig", "mouseup", function( ) {
  setTimeout(function() {
    setSize("image_pig", 95, 110);
  }, 100);
});
onEvent("sreen_spiel", "click", function( ) {
  punkte = punkte - 1;
  setText("label_punkte", punkte);
});
setInterval(function(){
  showElement("image_pig");
  setTimeout(function(){
    hideElement("image_pig");
    setPosition("image_pig", randomNumber(0, 200), randomNumber(0, 270));
    },2000);
 },3000);
function ende() {
  setText("p", punkte);
  var newWindow = window.open("https://it.gaertnet.de/url.php", "_blank");
  newWindow.close();
  setScreen("game_over");
}
onEvent("button1", "click", function( ) {
  setScreen("sreen_spiel");
  punkte = 0;
  start();
});
