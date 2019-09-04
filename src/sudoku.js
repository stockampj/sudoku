export function Game() {
  this.row1 = [5, 3, "", "", 7, "", "", "", ""];

}


Game.prototype.numbOnly = function() {
  var failureLog = [];
  var allowedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, ""];

  for (var i = 0; i < 9; i++) {
    if (allowedValues.indexOf(this.row1[i]) < 0) {
      failureLog.push([i]);
    }
  }
  if (failureLog.length > 0) {
    return failureLog;
  } else {
    return "PASS";
  }
}
