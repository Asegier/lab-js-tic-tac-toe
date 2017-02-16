
var currentPlayer = 'X';

var winningArr = [[0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6]];
var playerO = [];
var playerX = [];
var winner = function() {if (win(playerX) == true || win(playerO) == true){
return true}}

function turn(){
    if (currentPlayer == 'X'){
    currentPlayer = 'O';
    var playerturn = $(".playerTurn").html("It's O's turn");
    }
    else if (currentPlayer == 'O'){
        currentPlayer = 'X';
    var playerturn = $(".playerTurn").html("It's X's turn");
    }
}



/*function winner(){
    if 
}*/
var clicks = 0;

$("#gameboard").on("click", "td", function(event){
    
    clicks ++;
    
    if(winner()){
        return
    }
    
    var current = event.target;
    var checker = $(current);
    var cellnum = current.getAttribute("data-num");
        if (checker.html() != "X" && checker.html() != "O"){
            
            if (currentPlayer == 'X'){
                checker.html("X");
                checker.addClass("X");
                playerX.push(cellnum);
                
                if( !win(playerX) ){
                    turn();
                }
            
            } else if (currentPlayer == 'O'){
                checker.html("O");
                checker.addClass("O");
                playerO.push(cellnum);
                if( !win(playerO) ){
                    turn();
                }

            }

        }
    if (clicks >8){
        $(".playerTurn").html("It's a tie!")
    }
    
});

function win(player){
    var i = 0;
    var isit = false;

    while (i < winningArr.length){
        var x = 0;
        var total = 0;
        while (x < 3){
            var b = 0
            while (b < player.length){
                if (winningArr[i][x] == player[b]){
                    total ++;
                    b++;
                } else {
                    b++;
                }
            }
            if (total == 3){

                $(".playerTurn").html(currentPlayer + " has Won!");
                return true;
            }
            x++;
        }
        
        i++;
    }
    
    return false;
}



$("#reset").on("click",function(){
    location.reload();
})