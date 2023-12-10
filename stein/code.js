var bilder = ["assets/Schere.jpg", "assets/Stein.jpg", "assets/Papier.jpg"];
onEvent("button5", "click", function() {
  setScreen("screen1");
});
onEvent("button_bild", "click", function() {
  setProperty("button_bild", "image", bilder[randomNumber(0,2)]);
  if (getProperty("button_bild", "image") == "assets/Schere.jpg") {
    setText("label_text", "Schere");
  } else if ((getProperty("button_bild", "image") == "assets/Stein.jpg")) {
    setText("label_text", "Stein");
  } else {
    setText("label_text", "Papier");
  }
});
var punkte_sp1 = 0;
var punkte_sp2 = 0;
onEvent("button1", "click", function() {
  punkte_sp1 = punkte_sp1 + 1;
  setText("Computer", punkte_sp1);
});
onEvent("button2", "click", function() {
  punkte_sp2 = punkte_sp2 + 1;
  setText("Ich", punkte_sp2);
});
onEvent("button3", "click", function() {
  punkte_sp1 = punkte_sp1 - 1;
  setText("Computer", punkte_sp1);
});
onEvent("button4", "click", function() {
  punkte_sp2 = punkte_sp2 - 1;
  setText("Ich", punkte_sp2);
});
onEvent("Fertig", "click", function() {
  if (punkte_sp1 > punkte_sp2) {
    setText("label2", "Computer hat gewonnen!");
  } else if ((punkte_sp2 > punkte_sp1)) {
    setText("label2", "Du hast gewonnen!");
  } else {
    setText("label2", "Gleichstand!");
  }
  setScreen("screen2");
});
onEvent("Fertig2", "click", function() {
  punkte_sp1 = 0;
  setText("Computer", punkte_sp1);
  punkte_sp2 = 0;
  setText("Ich", punkte_sp2);
  setScreen("screen");
});
onEvent("back", "click", function( ) {
  window.open("https://it.gaertnet.de", '_self');
});
onEvent("back1", "click", function( ) {
  window.open("https://it.gaertnet.de", '_self');
});