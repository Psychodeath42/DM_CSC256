let span_score = document.getElementById("span_score");
let div_holes = document.querySelectorAll(".hole");
let score = 0;
let last_hole;
let time_up = false;

//not finished with this code
function start_game(){
    score = 0;
    span_score.textContent = score;    
    time_up = false;
    pop_up();
    setTimeout(
        function(){
            time_up = true;
        }, 20000
    );
}


function random_time(min, max){
    return Math.floor( (Math.random() * (max-min)) + min );
}
//needs holes array
function random_hole(holes){
    let random_number = Math.floor(Math.random() * holes.length);

    let hole = holes[random_number];

    //makes sure you don't get the same hole twice in a row
    if(hole == last_hole){
        return random_hole(holes);
    }

    last_hole = hole;

    return hole;
}

function pop_up(){
    let time = random_time(356, 712);

    let hole = random_hole(div_holes);

    hole.classList.add("mole");

    setTimeout(
        function() {
            hole.classList.remove("mole");
          
            if(!time_up){
                pop_up();
            }
            
        }, time
        
    );
}

function wack(event){
    if(this.classList.contains("mole")){
        score++;
        this.classList.remove("mole");
        span_score.textContent = score;
    }
}
div_holes.forEach(hole => hole.addEventListener("click", wack));