export function Game() {
  this.row = [5, 3, "", "", 7, "", "", "", ""];

}

Game.prototype.numbOnly = function() {
  myGame.row.forEach(function(num){
    if (num !== ( 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 )){
      return false;
    }
  });

}
