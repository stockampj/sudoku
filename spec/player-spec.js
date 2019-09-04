import { Game} from './../src/sudoku.js';

describe ('Game', function(){
  it('should check if new game creates an array', function(){
    var testGame = new Game()
      expect(testGame.row1).toEqual([5, 3, "", "", 7, "", "", "", ""])
  });
});



 describe ('Game', function(){
   it('should push unallowed values into the failureLog array', function(){
     var testGame = new Game();
     expect(testGame.numbOnly()).toEqual("PASS")
   });

 });

 describe ('Game', function(){
   it('should report the indices of any duplicate values in a row', function(){
     var testGame = new Game();
     expect(testGame.noDupe()).toEqual([])
   }

   )
 });
