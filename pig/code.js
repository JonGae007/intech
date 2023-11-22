var punkte = 0;
var name = "";
var button_press = 0;
setScreen("screen1");

function start() {
  setScreen("sreen_spiel");
  setTimeout(function() {
    ende();
  }, 20000);
}

onEvent("button2", "click", function() {
  name = getText("text_input1");
  button_press = 1; 
  if (button_press === 1 && name !== "") {
    start();
  }
});

onEvent("image_pig", "mousedown", function() {
  setSize("image_pig", 105, 120);
  punkte = punkte + 2;
  setText("label_punkte", punkte);
});

onEvent("image_pig", "mouseup", function() {
  setTimeout(function() {
    setSize("image_pig", 95, 110);
  }, 100);
});

onEvent("sreen_spiel", "click", function() {
  punkte = punkte - 1;
  setText("label_punkte", punkte);
});

setInterval(function() {
  showElement("image_pig");
  setTimeout(function() {
    hideElement("image_pig");
    setPosition("image_pig", randomNumber(0, 200), randomNumber(0, 270));
  }, 2000);
}, 3000);

function ende() {
  setText("p", punkte);
  window.open(("https://it.gaertnet.de/pig/url.php?s=" + punkte.toString()) + "&n=" + name);
  setScreen("game_over");
}

onEvent("button1", "click", function() {
  setScreen("sreen_spiel");
  punkte = 0;
  setText("label_punkte", punkte);
  start();
});
onEvent("back", "click", function( ) {
  window.location.href = "https://it.gaertnet.de";
});
