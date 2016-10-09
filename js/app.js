$(function() {

  var $cells = $('.boarder li');
  var gridWidth = 4;
  var gridHeight = 4;
  var player = "player1";
  var row1 = [$cells.eq(0), $cells.eq(1), $cells.eq(2), $cells.eq(3)];
  console.log(row1);
  var row2 = [$cells.eq(4), $cells.eq(5), $cells.eq(6), $cells.eq(7)];
  console.log(row2);
  var row3 = [$cells.eq(8), $cells.eq(9), $cells.eq(10), $cells.eq(11)];
  console.log(row3);
  var row4 = [$cells.eq(12), $cells.eq(13), $cells.eq(14), $cells.eq(15)];
  console.log(row4);
  // var col1 = [tiles[12], tiles[13], tiles[14], tiles[15] ];
  // var col2 = [tiles[], tiles[4], tiles[7], tiles[] ];
  // var col3 = [this.tiles[2], this.tiles[5], this.tiles[8]];
  // var diag1 = [this.tiles[0], this.tiles[4], this.tiles[8]];
  // var diag2 = [this.tiles[2], this.tiles[4], this.tiles[6]];


  $('.slots li').on('click', function() {
    var colIndex = $(this).index();
    var currentIndex = colIndex + (gridWidth * (gridHeight-1));
    var $currentCell = $cells.eq(currentIndex);

    while($currentCell.hasClass('occupied') && $currentCell.length > 0) {
      currentIndex -= gridWidth;
      $currentCell = $cells.eq(currentIndex);
    }

    console.log($currentCell);
    if($currentCell.length === 1) {
      $currentCell.addClass('occupied').addClass(player);
      player = (player === "player1") ? "player2" : "player1";
    }



  });
});
