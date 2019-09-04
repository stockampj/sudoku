import { Game} from './../src/sudoku.js';

describe ('Game', function(){
  it('should check if user input is a number between 1-9', function(){
    var testGame = new Game()
      expect(testGame.row).toEqual([5, 3, "", "", 7, "", "", "", ""])

  });

});
