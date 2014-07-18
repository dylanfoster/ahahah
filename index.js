var Player = require("player");

var player = new Player("./audio/ahahah.mp3");

setInterval(ahahah, 2500);

function ahahah(){
  player.play();
}

module.exports = ahahah;