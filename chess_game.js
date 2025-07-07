function build_chessboard(){

    let chess_board = document.getElementById ("div_chessboard");
    
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            let chess_square = document.createElement ('div');
            chess_square.className = 'chess_square_css'
            if((i+j) % 2 == 0){
                chess_square.style.backgroundColor = "rgb(246, 179, 233)";
            }
            chess_board.appendChild(chess_square);
        }

    }

}

build_chessboard(8,8);