var startTime;
var isRunning = false;
var ende = 0;
var button_press = 0;
var name = "";
var woerter = ["usah", "kpra", "nhab", "hulst", "otmot", "wlkeo", "ripapka", "gelov", "dernuw", "tberhs", "schipfir", "damenin", "gerliale", "etigertw", "ramensap", "saftriwcht", "ngfrifa", "lemiwerokl", "sergruvieren", "themenrennu", "meinmehlstern", "tamlisan", "rechtuntri", "weinchatenh", "chufbrau"];
onEvent("Start", "click", function() {
  name = getText("text_input6");
  button_press = 1; 
  if (button_press === 1 && name !== "") {
    start();
  }
});
function start() {
  setScreen("screen2");
}

onEvent("Start", "click", function( ) {
  if (!isRunning) {
    isRunning = true;
    startTime = getTime();
    timedLoop(1000, function() {
      var currentTime = getTime();
      var elapsedTime = currentTime - startTime;
      elapsedTime = Math.round(elapsedTime/1000);
    setText("Zeit1", "Zeit:" + elapsedTime);
    setText("Zeit2", "Zeit:" + elapsedTime);
    setText("Zeit3", "Zeit:" + elapsedTime);
    setText("Zeit4", "Zeit:" + elapsedTime);
    setText("Zeit5", "Zeit:" + elapsedTime);
    });
  }
});
onEvent("zurückn", "click", function( ) {
  setScreen("screen2");
});
onEvent("Anleitung", "click", function( ) {
  setScreen("anleitung");
});
onEvent("zurücka", "click", function( ) {
  setScreen("screen1");
});
onEvent("Level1", "click", function( ) {
  setScreen("level1");
  var index = randomNumber(0, 4);
  setText("wort1", woerter[index]);//random verschlüsseltes wort
  onEvent("fertig1", "click", function( ) {
  if (getText("wort1") == "usah" &&  (getText("text_input1") == "haus" || getText("text_input1") == "Haus")) {
    ende = ende + 1;
    setProperty("Level1", "background-color", "green");
    setScreen("weiterso");
  } else if ((getText("wort1") == "kpra" &&  (getText("text_input1") == "park" || getText("text_input1") == "Park"))) {
    ende = ende + 1;
    setProperty("Level1", "background-color", "green");
    setScreen("weiterso");
  } else if ((getText("wort1") == "nhab" &&  (getText("text_input1") == "bahn" || getText("text_input1") == "Bahn"))) {
    ende = ende + 1;
    setProperty("Level1", "background-color", "green");
    setScreen("weiterso");
  } else if ((getText("wort1") == "hulst" &&  (getText("text_input1") == "stuhl" || getText("text_input1") == "Stuhl"))) {
    ende = ende + 1;
    setProperty("Level1", "background-color", "green");
    setScreen("weiterso");
  } else if ((getText("wort1") == "otmot" &&  (getText("text_input1") == "motto" || getText("text_input1") == "Motto"))) {
    ende = ende + 1;
    setProperty("Level1", "background-color", "green");
    setScreen("weiterso");
  } else {
    setText("text_input1", "");
  }
  onEvent("zurückw", "click", function( ) {
    setScreen("screen2");
  });
  });
});
onEvent("Level2", "click", function( ) {
  setScreen("level2");
  var index = randomNumber(5, 9);
  setText("wort2", woerter[index]);//random verschlüsseltes wort
  onEvent("fertig2", "click", function( ) {
  if (getText("wort2") == "wlkeo" &&  (getText("text_input2") == "wolke" || getText("text_input2") == "Wolke")) {
    ende = ende + 1;
    setProperty("Level2", "background-color", "green");
    setScreen("Super");
  } else if ((getText("wort2") == "ripapka" &&  (getText("text_input2") == "paprika" || getText("text_input2") == "Paprika"))) {
    ende = ende + 1;
    setProperty("Level2", "background-color", "green");
    setScreen("Super");
  } else if ((getText("wort2") == "gelov" &&  (getText("text_input2") == "vogel" || getText("text_input2") == "Vogel"))) {
    ende = ende + 1;
    setProperty("Level2", "background-color", "green");
    setScreen("Super");
  } else if ((getText("wort2") == "dernuw" &&  (getText("text_input2") == "wunder" || getText("text_input2") == "Wunder"))) {
    ende = ende + 1;
    setProperty("Level2", "background-color", "green");
    setScreen("Super");
  } else if ((getText("wort2") == "tberhs" &&  (getText("text_input2") == "herbst" || getText("text_input2") == "Herbst"))) {
    ende = ende + 1;
    setProperty("Level2", "background-color", "green");
    setScreen("Super");
  } else {
    setText("text_input2", "");
  }
  } );
  onEvent("zurücks", "click", function( ) {
    setScreen("screen2");
  } );
});
onEvent("Level3", "click", function( ) {
  setScreen("level3");
  var index = randomNumber(10,14);
  setText("wort3", woerter[index]);//random verschlüsseltes wort
  onEvent("fertig3", "click", function( ) {
  if (getText("wort3") == "schipfir" &&  (getText("text_input3") == "pfirsich" || getText("text_input3") == "Pfirsich")) {
    ende = ende + 1;
    setProperty("Level3", "background-color", "green");
    setScreen("richtig");
  } else if ((getText("wort3") == "damenin" &&  (getText("text_input3") == "niemand" || getText("text_input3") == "Niemand"))) {
    ende = ende + 1;
    setProperty("Level3", "background-color", "green");
    setScreen("richtig");
  } else if ((getText("wort3") == "gerliale" &&  (getText("text_input3") == "allergie" || getText("text_input3") == "Allergie"))) {
    ende = ende + 1;
    setProperty("Level3", "background-color", "green");
    setScreen("richtig");
  } else if ((getText("wort3") == "etigertw" &&  (getText("text_input3") == "gewitter" || getText("text_input3") == "Gewitter"))) {
    ende = ende + 1;
    setProperty("Level3", "background-color", "green");
    setScreen("richtig");
  } else if ((getText("wort3") == "ramensap" &&  (getText("text_input3") == "parmesan" || getText("text_input3") == "Parmesan"))) {
    ende = ende + 1;
    setProperty("Level3", "background-color", "green");
    setScreen("richtig");
  } else {
    setText("text_input3", "");
  }
  onEvent("zurückr", "click", function( ) {
  setScreen("screen2");
    });
  });
});
onEvent("Level4", "click", function( ) {
  setScreen("level4");
  var index = randomNumber(15,19);
  setText("wort4", woerter[index]);//random verschlüsseltes wort
  onEvent("fertig4", "click", function( ) {
  if (getText("wort4") == "saftriwcht" &&  (getText("text_input4") == "wirtschaft" || getText("text_input4") == "Wirtschaft")) {
    ende = ende + 1;
    setProperty("Level4", "background-color", "green");
    setScreen("einlevel");
  } else if ((getText("wort4") == "ngfrifa" &&  (getText("text_input4") == "angriff" || getText("text_input4") == "Angriff"))) {
    ende = ende + 1;
    setProperty("Level4", "background-color", "green");
    setScreen("einlevel");
  } else if ((getText("wort4") == "lemiwerokl" &&  (getText("text_input4") == "mikrowelle" || getText("text_input4") == "Mikrowelle"))) {
    ende = ende + 1;
    setProperty("Level4", "background-color", "green");
    setScreen("einlevel");
  } else if ((getText("wort4") == "sergruvieren" &&  (getText("text_input4") == "reservierung" || getText("text_input4") == "Reservierung"))) {
    ende = ende + 1;
    setProperty("Level4", "background-color", "green");
    setScreen("einlevel");
  } else if ((getText("wort4") == "themenrennu" &&  (getText("text_input4") == "unternehmen" || getText("text_input4") == "Unternehmen"))) {
    ende = ende + 1;
    setProperty("Level4", "background-color", "green");
    setScreen("einlevel");
  } else {
    setText("text_input4", "");
  onEvent("zurück1", "click", function( ) {
    setScreen("screen2");
  });
  }
  });
  onEvent("zurück1", "click", function( ) {
    setScreen("screen2");
  });
  });
onEvent("Level5", "click", function( ) {
  setScreen("level5");
  var index = randomNumber(20,24);
  setText("wort5", woerter[index]);//random verschlüsseltes wort
  onEvent("fertig5", "click", function( ) {
  if (getText("wort5") == "rechtuntri" &&  (getText("text_input5") == "unterricht" || getText("text_input5") == "Unterricht")) {
    ende = ende + 1;
    setProperty("Level5", "background-color", "green");
    setScreen("allelevel");
    if (ende > 4) {
      isRunning = false;
      stopTimedLoop();
      var currentTime = getTime();
      var elapsedTime = currentTime - startTime;
      elapsedTime = Math.round(elapsedTime/1000);
      setText("label11", "Innerhalb von: " + elapsedTime + " Sekunden");
      setScreen("end");
      window.open(("https://it.gaertnet.de/wörterspiel/url.php?s=" + elapsedTime.toString()) + "&n=" + name);
    } else {
      setScreen("allelevel");
    }
  } else if ((getText("wort5") == "meinmehlstern" &&  (getText("text_input5") == "sternenhimmel" || getText("text_input5") == "Sternenhimmel"))) {
    ende = ende + 1;
    setProperty("Level5", "background-color", "green");
    setScreen("allelevel");
    if (ende > 4) {
      isRunning = false;
      stopTimedLoop();
      var currentTime = getTime();
      var elapsedTime = currentTime - startTime;
      elapsedTime = Math.round(elapsedTime/1000);
      setText("label11", "Innerhalb von: " + elapsedTime + " Sekunden");
      setScreen("end");
      window.open(("https://it.gaertnet.de/wörterspiel/url.php?s=" + elapsedTime.toString()) + "&n=" + name);
    } else {
      setScreen("allelevel");
    }
  } else if ((getText("wort5") == "tamlisan" &&  (getText("text_input5") == "talisman" || getText("text_input5") == "Talisman"))) {
    ende = ende + 1;
    setProperty("Level5", "background-color", "green");
    setScreen("allelevel");
    if (ende > 4) {
      isRunning = false;
      stopTimedLoop();
      var currentTime = getTime();
      var elapsedTime = currentTime - startTime;
      elapsedTime = Math.round(elapsedTime/1000);
      setText("label11", "Innerhalb von: " + elapsedTime + " Sekunden");
      setScreen("end");
      window.open(("https://it.gaertnet.de/wörterspiel/url.php?s=" + elapsedTime.toString()) + "&n=" + name);
    } else {
      setScreen("allelevel");
    }
  } else if ((getText("wort5") == "weinchatenh" &&  (getText("text_input5") == "weihnachten" || getText("text_input5") == "Weihnachten"))) {
    ende = ende + 1;
    setProperty("Level5", "background-color", "green");
    setScreen("allelevel");
    if (ende > 4) {
      isRunning = false;
      stopTimedLoop();
      var currentTime = getTime();
      var elapsedTime = currentTime - startTime;
      elapsedTime = Math.round(elapsedTime/1000);
      setText("label11", "Innerhalb von: " + elapsedTime + " Sekunden");
      setScreen("end");
      window.open(("https://it.gaertnet.de/wörterspiel/url.php?s=" + elapsedTime.toString()) + "&n=" + name);
    } else {
      setScreen("allelevel");
    }
  } else if ((getText("wort5") == "chufbrau" &&  (getText("text_input5") == "aufbruch" || getText("text_input5") == "Aufbruch"))) {
    ende = ende + 1;
    setProperty("Level5", "background-color", "green");
    setScreen("allelevel");
    if (ende > 4) {
      isRunning = false;
      stopTimedLoop();
      var currentTime = getTime();
      var elapsedTime = currentTime - startTime;
      elapsedTime = Math.round(elapsedTime/1000);
      setText("label11", "Innerhalb von: " + elapsedTime + " Sekunden");
      setScreen("end");
      window.open(("https://it.gaertnet.de/wörterspiel/url.php?s=" + elapsedTime.toString()) + "&n=" + name);
    } else {
      setScreen("allelevel");
    }
  } else {
    setText("text_input5", "");
  onEvent("zurück1", "click", function( ) {
    setScreen("screen2");
  });
  
  }
  });
  }
  );
  
onEvent("zurück1", "click", function( ) {
  setScreen("screen2");
});
onEvent("zurück", "click", function( ) {
  ende = 0;
  setProperty("Level1", "background-color", "#69CAFF");
  setProperty("Level2", "background-color", "#69CAFF");
  setProperty("Level3", "background-color", "#69CAFF");
  setProperty("Level4", "background-color", "#69CAFF");
  setProperty("Level5", "background-color", "#69CAFF");
  hideElement("beenden");
  setScreen("screen1");
});
onEvent("back", "click", function( ) {
  window.open("https://it.gaertnet.de", '_self');
});
onEvent("back1", "click", function( ) {
  window.open("https://it.gaertnet.de", '_self');
});