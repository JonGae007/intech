var name;
var button_press;
var punkte = 0;
var apfelx = randomNumber(14, 290);
var apfely=randomNumber(10, 430);
var bananex = randomNumber(10, 300);
var bananey=randomNumber(20, 435);
var kokosnussx = randomNumber(20, 307);
var kokosnussy=randomNumber(20, 435);
var Feindx = randomNumber(20, 298);
var Feindy = randomNumber(15, 330);
onEvent("button_wie", "click", function( ) {
  setScreen("screen_Anleitung");
});
onEvent("back", "click", function( ) {
  window.open("https://it.gaertnet.de", '_self');
});
onEvent("back2", "click", function( ) {
  window.open("https://it.gaertnet.de", '_self');
});
onEvent("button_start", "click", function( ) {
    name = getText("text_name");
  button_press = 1; 
  if (button_press === 1 && name !== "") {
    setScreen("screen_spiel");
  }
  button_press = 1;
});
onEvent("button_sofortstart", "click", function( ) {
  name = getText("text_name");
  button_press = 1; 
  if (button_press === 1 && name !== "") {
    setScreen("screen_spiel");
  }
  button_press = 1;
});
onEvent("screen_spiel", "click", function( ) {
  punkte = punkte - 1;
  setText("label_punktzahl", punkte);
});
//beginn mit direkt loslegen
onEvent("button_sofortstart", "click", function( ) {
  timedLoop(20, function() {
    setPosition("apfel", apfelx, apfely, 40, 40);
    apfely = apfely + 2;
    if (apfely >= 435) {
      apfely = randomNumber(10, 430);
      apfelx = randomNumber(14, 290);
    }
  });
});
onEvent("button_sofortstart", "click", function( ) {
  timedLoop(20, function() {
    setPosition("banane", bananex, bananey, 80, 80);
    bananey = bananey - 2;
    if (bananey <= 4) {
      bananex = randomNumber(10, 300);
      bananey = randomNumber(40, 435);
    }
  });
});
onEvent("button_sofortstart", "click", function( ) {
  timedLoop(20, function() {
    setPosition("kokosnuss", kokosnussx, kokosnussy, 80, 80);
    kokosnussx = kokosnussx - 2;
    if (kokosnussx <= 2) {
      kokosnussx = randomNumber(20, 307);
      kokosnussy = randomNumber(20, 435);
    }
  });
}); 
//beginn mit button start
onEvent("button_start", "click", function( ) {    
  timedLoop(20, function() {
    setPosition("apfel", apfelx, apfely, 40, 40);
    apfely = apfely + 2;
    if (apfely >= 435) {
  apfely = randomNumber(10, 430);
  apfelx = randomNumber(14, 290);
}
  });
});
onEvent("button_start", "click", function( ) {
  timedLoop(20, function() {
    setPosition("banane", bananex, bananey, 80, 80);
    bananey = bananey - 2;
    if (bananey <= 4) {
      bananex = randomNumber(10, 300);
      bananey = randomNumber(40, 435);
    }
  });
});
onEvent("button_start", "click", function( ) {
  timedLoop(20, function() {
    setPosition("kokosnuss", kokosnussx, kokosnussy, 70, 70);
    kokosnussx = kokosnussx - 2;
    if (kokosnussx <= 2) {
      kokosnussx = randomNumber(20, 307);
      kokosnussy = randomNumber(20, 435);
    }
  });
});
onEvent("button_sofortstart", "click", function( ) {
  setTimeout(function() {
    showElement("Feind");
  }, 2000);
  timedLoop(20, function() {
    setPosition("Feind", Feindx, Feindy, 80, 80);
    Feindy = Feindy + 2;
    if (Feindy >= 433) {
      Feindx = randomNumber(20, 298);
      Feindy = randomNumber(15, 330);
    }
  });
});
onEvent("button_start", "click", function( ) {
  setTimeout(function() {
    showElement("Feind");
  }, 2000);
  timedLoop(20, function() {
    setPosition("Feind", Feindx, Feindy, 80, 80);
    Feindy = Feindy + 2;
    if (Feindy >= 433) {
      Feindx = randomNumber(20, 298);
      Feindy = randomNumber(15, 330);
    }
  });
});
onEvent("banane", "click", function( ) {
  punkte = punkte + 2;
  setText("label_punktzahl", punkte);
});
onEvent("apfel", "click", function( ) {
  punkte = punkte + 2;
  setText("label_punktzahl", punkte);
});
onEvent("kokosnuss", "click", function( ) {
  punkte = punkte + 2;
  setText("label_punktzahl", punkte);
});
onEvent("Feind", "click", function( ) {
  setScreen("game_over");
  setText("Punkteentstand", punkte);
  window.open(("https://it.gaertnet.de/fruitninja/url.php?s=" + punkte.toString()) + "&n=" + name);
});
onEvent("button_tryagain", "mouseover", function( ) {
  punkte = 0;
  setScreen("screen_spiel");
  setText("label_punktzahl",punkte);
});
