var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ff811404-5278-4977-819d-cceca1786199","cba76434-bcef-4acd-948e-d8b0e171edd8","93bea76a-41bf-4f6a-9571-cd10096991f4","3509c3fa-8697-41cf-8485-f4320983cab4","8aade79b-3e3a-427e-9187-300be254ba94","e3f3cb15-e321-4b83-8456-09860babf7a0","2d3fee53-d609-4450-a771-79bce087e470","3e3de4c3-d739-4e3e-97af-ba4d4535586e","5d4e80b0-00c8-4e09-ad9a-3fc9e37f6d6a","8250d727-2d97-44a8-b776-426d8b72f520","310e1f13-767e-439a-9619-e1ee821e08ed","a89357b5-2fe0-410e-8bed-acee9b8b0e96","68c28cf5-1013-4506-a77f-e03e61830389","93d77c79-7ca2-40aa-bf7c-28607e8afb5a","89a4ac89-0d41-4e25-a349-1e5f22d4443d","8c568d35-2f1a-4914-8d3e-839ac788e927","0a7fec13-d7b8-4d46-a4d8-5bfab84f28a3","23cc707f-9a10-4abc-8047-796c31169d7e","a90d6c62-e69b-4ad2-b2fd-dc231d21bc08","0a4fffa3-c661-48c9-8832-a460f7193edc"],"propsByKey":{"ff811404-5278-4977-819d-cceca1786199":{"name":"wolke1","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZFP0NKkXWX_AYoY65SVzcWYB_bXCrrB.","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/ff811404-5278-4977-819d-cceca1786199.png"},"cba76434-bcef-4acd-948e-d8b0e171edd8":{"name":"wolke2","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"qB9ESyh.8c9tLkAQHhSGgx58fYBUb7iL","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/cba76434-bcef-4acd-948e-d8b0e171edd8.png"},"93bea76a-41bf-4f6a-9571-cd10096991f4":{"name":"wolke3","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"dy2xWUKpt9m.F0RhW8oa48HIhG9KsCTz","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/93bea76a-41bf-4f6a-9571-cd10096991f4.png"},"3509c3fa-8697-41cf-8485-f4320983cab4":{"name":"wolke4","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"oqoml7pPMq3eoFVPfWIk.ZcEJEnUxRic","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/3509c3fa-8697-41cf-8485-f4320983cab4.png"},"8aade79b-3e3a-427e-9187-300be254ba94":{"name":"wolke5","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"V9ZiGf.BUP04nzbDmPb4zkubq587k3Ax","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/8aade79b-3e3a-427e-9187-300be254ba94.png"},"e3f3cb15-e321-4b83-8456-09860babf7a0":{"name":"wolke6","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"2vxlRDdqEM9veRFSIaNw9sC7WpRlNHiQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/e3f3cb15-e321-4b83-8456-09860babf7a0.png"},"2d3fee53-d609-4450-a771-79bce087e470":{"name":"wolke7","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"HPUFxTHyf1AJK6uNmnOAhf7tCu0RTbSi","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/2d3fee53-d609-4450-a771-79bce087e470.png"},"3e3de4c3-d739-4e3e-97af-ba4d4535586e":{"name":"wolke8","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"xB_PQZkmQetK3ymAJ69X9dcN6fN6Jgdt","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/3e3de4c3-d739-4e3e-97af-ba4d4535586e.png"},"5d4e80b0-00c8-4e09-ad9a-3fc9e37f6d6a":{"name":"wolke9","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"exhOW12Ihg9FPf7EecE0v0gW3o6wXlrO","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/5d4e80b0-00c8-4e09-ad9a-3fc9e37f6d6a.png"},"8250d727-2d97-44a8-b776-426d8b72f520":{"name":"wolke10","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"6PKqoz0pwdhz0FDdhkQ3FH1lDjRevPI.","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/8250d727-2d97-44a8-b776-426d8b72f520.png"},"310e1f13-767e-439a-9619-e1ee821e08ed":{"name":"wolke11","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"ye0x2N5WQv4qcGYJJaFKlCm1RyTKoKZl","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/310e1f13-767e-439a-9619-e1ee821e08ed.png"},"a89357b5-2fe0-410e-8bed-acee9b8b0e96":{"name":"wolke12","sourceUrl":null,"frameSize":{"x":49,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"z9x08xmBvMNSQ62WvnYSczheX3rQqsT4","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":7},"rootRelativePath":"assets/a89357b5-2fe0-410e-8bed-acee9b8b0e96.png"},"68c28cf5-1013-4506-a77f-e03e61830389":{"name":"mouseL","sourceUrl":null,"frameSize":{"x":58,"y":34},"frameCount":2,"looping":true,"frameDelay":12,"version":"6dqWsOJDgHg45IqHSDcl.Ub_tKjVULP7","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":68},"rootRelativePath":"assets/68c28cf5-1013-4506-a77f-e03e61830389.png"},"93d77c79-7ca2-40aa-bf7c-28607e8afb5a":{"name":"mouseR","sourceUrl":null,"frameSize":{"x":58,"y":34},"frameCount":2,"looping":true,"frameDelay":12,"version":"6LlS36lherm2xjB3lo1rxSEhPcv2lUnW","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":68},"rootRelativePath":"assets/93d77c79-7ca2-40aa-bf7c-28607e8afb5a.png"},"89a4ac89-0d41-4e25-a349-1e5f22d4443d":{"name":"background1","sourceUrl":"assets/api/v1/animation-library/gamelab/MrqOCr9Ohv9fBn.29A1qtGvPFAuj8gVJ/category_backgrounds/texture_17.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"MrqOCr9Ohv9fBn.29A1qtGvPFAuj8gVJ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MrqOCr9Ohv9fBn.29A1qtGvPFAuj8gVJ/category_backgrounds/texture_17.png"},"8c568d35-2f1a-4914-8d3e-839ac788e927":{"name":"Munze","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"wZch7oLr2_9159XLv4fYyfj.sDz..Is3","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/8c568d35-2f1a-4914-8d3e-839ac788e927.png"},"0a7fec13-d7b8-4d46-a4d8-5bfab84f28a3":{"name":"button","sourceUrl":"assets/api/v1/animation-library/gamelab/J9BTQrhVZ423u2LL0.f5j1tn.Mhq9sml/category_video_games/start_button.png","frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":2,"version":"J9BTQrhVZ423u2LL0.f5j1tn.Mhq9sml","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/api/v1/animation-library/gamelab/J9BTQrhVZ423u2LL0.f5j1tn.Mhq9sml/category_video_games/start_button.png"},"23cc707f-9a10-4abc-8047-796c31169d7e":{"name":"Munze2","sourceUrl":null,"frameSize":{"x":122,"y":79},"frameCount":1,"looping":true,"frameDelay":12,"version":"oB8nEUWUFrK8ITsxjltXOMzRAL12fP4h","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":79},"rootRelativePath":"assets/23cc707f-9a10-4abc-8047-796c31169d7e.png"},"a90d6c62-e69b-4ad2-b2fd-dc231d21bc08":{"name":"background2","sourceUrl":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"33483OYhVDVsX.GNODCgRASPM5bNdz.q","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png"},"0a4fffa3-c661-48c9-8832-a460f7193edc":{"name":"background","sourceUrl":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"oy1yIltrLNQf4iGHFFcLGgYTezk0.f73","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var punkte = 0;
var Kase = createSprite(200, 200);
Kase.setAnimation("background");
Kase.scale = 1;
Kase.visible = false;
var button = createSprite(200, 300);
button.setAnimation("button");
button.scale = 1.5;
var player  = createSprite(50, 300);
player.setAnimation("mouseR");
player.scale = 1;
player.visible = false;
var ground1 = createSprite(50, 350);
ground1.setAnimation("wolke1");
ground1.scale = 1;
ground1.visible = false;
var ground2 = createSprite(250, 350);
ground2.setAnimation("wolke2");
ground2.scale = 1;
ground2.visible = false;
var ground3 = createSprite(150, 300);
ground3.setAnimation("wolke3");
ground3.scale = 1;
ground3.visible = false;
var ground4 = createSprite(350, 300);
ground4.setAnimation("wolke4");
ground4.scale = 1;
ground4.visible = false;
var ground5 = createSprite(50, 250);
ground5.setAnimation("wolke5");
ground5.scale = 1;
ground5.visible = false;
var ground6 = createSprite(250, 250);
ground6.setAnimation("wolke6");
ground6.scale = 1;
ground6.visible = false;
var ground7 = createSprite(150, 200);
ground7.setAnimation("wolke7");
ground7.scale = 1;
ground7.visible = false;
var ground8 = createSprite(350, 200);
ground8.setAnimation("wolke8");
ground8.scale = 1;
ground8.visible = false;
var ground9 = createSprite(50, 150);
ground9.setAnimation("wolke9");
ground9.scale = 1;
ground9.visible = false;
var ground10 = createSprite(250, 150);
ground10.setAnimation("wolke10");
ground10.scale = 1;
ground10.visible = false;
var ground11 = createSprite(150, 100);
ground11.setAnimation("wolke11");
ground11.scale = 1;
ground11.visible = false;
var ground12 = createSprite(350, 100);
ground12.setAnimation("wolke12");
ground12.scale = 1;
ground12.visible = false;
var start = false;
//Münzen
var positions = [[50,330],[50,230],[50,330],[150,280],[150,180],[150,80],[250,330],[250,230],[250,130],[350,280],[350,180],[350,80]];
var randomIndex = Math.floor(Math.random()*positions.length);
var selectedPosition = positions[randomIndex];
var Munze = createSprite("Munze");
Munze.setAnimation("Munze");
Munze.x = selectedPosition[0];
Munze.y = selectedPosition[1];
Munze.scale = 1;
function update() {
if (player.overlap(Munze)){
  Munze.visible = false;
  randomIndex = Math.floor(Math.random()*positions.length);
  punkte = punkte + 1;
  selectedPosition = positions[randomIndex];
  Munze.x = selectedPosition[0];
  Munze.y = selectedPosition[1];
  }
  else {
    Munze.visible = true;
  }
}
//setInterval(update, 100)
setInterval(update, 100);
// Munze ende 
function draw() {
  player.velocityY = 5;
  player.collide(ground1);
  player.collide(ground2);
  player.collide(ground3);
  player.collide(ground4);
  player.collide(ground5);
  player.collide(ground6);
  player.collide(ground7);
  player.collide(ground8);
  player.collide(ground9);
  player.collide(ground10);
  player.collide(ground11);
  player.collide(ground12);
  background("white");
  if (mousePressedOver(button)) {
    start = true;
    ground1.visible = true;
    ground2.visible = true;
    ground3.visible = true;
    ground4.visible = true;
    ground5.visible = true;
    ground6.visible = true;
    ground7.visible = true;
    ground8.visible = true;
    ground9.visible = true;
    ground10.visible = true;
    ground11.visible = true;
    ground12.visible = true;
    player.visible = true;
    Kase.visible = true;
    button.visible = false;
  }
  if (start === false) {
    Munze.visible = false;
    textSize(17);
    fill("black");
    text("Drücke START zum spielen.", 10, 50);
    textSize(17);
    fill("black");
    text("Sammel in 45sec so viele Münzen wie möglich! ", 10, 90);
    textSize(17);
    fill("black");
    text("Wenn du fällst, hast du verloren.", 10, 130);
    textSize(17);
    fill("black");
    text("Mit links, rechts und space steuerst du.", 10, 170);
  }
  if (Kase.visible === true) {
    var timer = 45 - World.seconds;
    textSize(30);
    text(timer, 200, 50);
  }
  if (keyDown("right")) {
    player.setAnimation("mouseR");
    player.x = player.x + 10;
  }
  if (keyDown("left")) {
    player.setAnimation("mouseL");
    player.x = player.x - 10;
  }
  if (ground1.y-player.y<50 || ground3.y-player.y<50 || ground5.y-player.y<50 || ground7.y-player.y<50 || ground9.y-player.y<50 || ground11.y-player.y<50) {
    if (keyWentDown("space")) {
      player.velocityY = -55;
    }
    if (player.y>340) {
      player.velocityY = 100;
    }
  }
  while (player.y>410 || player.x<-5 || player.x>410 || timer < 0 ) {
    Munze.visible = false;
    Kase.visible = false;
    background("black");
    textSize(50);
    textAlign(CENTER, TOP);
    textFont("Arial");
    fill("red");
    stroke("white");
    strokeWeight(3);
    text("Score:", 150, 150);
    //Punkte
    textSize(50);
    textAlign(CENTER, TOP);
    textFont("Arial");
    fill("green");
    stroke("white");
    strokeWeight(3);
    text(punkte, 270, 150);
    //game over
    textSize(50);
    textAlign(CENTER, TOP);
    textFont("Arial");
    fill("red");
    stroke("white");
    strokeWeight(3);
    text("GAME OVER", 200, 250);
    if (keyDown("left")) {
      player.x = player.x - 30;
    }
    if (keyDown("right")) {
      player.x = player.x + 30;
    }
    if (keyWentDown("space")) {
      player.velocityY = +50;
    }
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
