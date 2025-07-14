let hid_span = document.getElementById("selected_square")

arr_chess_pieces = [
    [null, 'r', null, 'r', null, 'r', null, 'r', ],
    ['r', null, 'r', null, 'r', null, 'r', null, ],
    [null, 'r', null, 'r', null, 'r', null, 'r', ],
    [null, null, null, null, null, null, null, null, ],
    [null, null, null, null, null, null, null, null, ],
    ['bl', null, 'bl', null, 'bl', null, 'bl', null, ],
    [null, 'bl', null, 'bl', null, 'bl', null, 'bl', ],
    ['bl', null, 'bl', null, 'bl', null, 'bl', null, ]
]

function build_chessboard(){

    let chess_board = document.getElementById ("div_chessboard");
    
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            let chess_square = document.createElement ('div');
            chess_square.className = 'chess_square_css';
            chess_square.setAttribute("id", "div" + i + j);
            if((i+j) % 2 == 1){
                chess_square.style.backgroundColor = "rgb(246, 179, 233)";
                chess_square.addEventListener("click", move_piece);
            }
            chess_board.appendChild(chess_square);

            if(arr_chess_pieces[i][j]){
                create_piece("piece"+ i + j, "chess_piece-" + arr_chess_pieces[i][j], chess_square);
            }
        }

    }

}

build_chessboard(8,8);



function create_piece(id, piece_class, sel_square){

    let new_piece = document.createElement("div")

    new_piece.setAttribute("id", id);
    new_piece.classList.add("chess_piece")
    new_piece.classList.add(piece_class);
    
    new_piece.addEventListener("click", save_piece_id);
    sel_square.appendChild(new_piece);
}

function move_piece(event){
    console.log("move piece called");
    let new_square_id = event.target.id;
    new_square_id = new_square_id.replace("piece", "").replace("div","");
    let sel_piece_id = hid_span.textContent;

    if(new_square_id != sel_piece_id){
        let old_spot = document.getElementById("div" + sel_piece_id);
        let old_piece = document.getElementById("piece" + sel_piece_id);
        let old_piece_color_class = old_piece.classList[1];
        old_spot.removeChild(old_piece);

        let new_square = document.getElementById("div" + new_square_id);
        create_piece("piece"+ new_square_id, old_piece_color_class, new_square);
        hid_span.textContent = "";
    }
}

function save_piece_id(event){
    let selected_piece_id = event.target.id;
    selected_piece_id = selected_piece_id.replace("piece", "")
    hid_span.textContent = selected_piece_id;
    console.log("save piece called:" + selected_piece_id);
}