var values = ["Ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var suits = ["Clubs", "Diamonds", "Spades", "Hearts"];
var cards = [];

$(document).ready(function(){
  suits.forEach(function(suit){
    values.forEach(function(value){
      cards = cards.concat(value + " of " + suit);
    });
  });

  cards.forEach(function(card){
    $("#deck").append("<li>" + card + "</li>");
  });
});
