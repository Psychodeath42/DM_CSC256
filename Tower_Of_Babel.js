//New and improved drop down menu, this time with infinitely less if/else statements and actually more expandable
//List of the videos that populate the dropdown menu
window.addEventListener("DOMContentLoaded", () => {
const video_list = [
    //template for easier population
    //{ title: "", url: "./Content/Videos/Memes/" },
    { title: "Dumby Kitty", url: "./Content/Videos/Memes/6intbarbarian.mp4" },
    { title: "Mady kitty", url: "./Content/Videos/Memes/anger-silent.mp4" },
    { title: "Very Mad Bee", url: "./Content/Videos/Memes/anger.mp4" },
    { title: "Silly Kitty", url: "./Content/Videos/Memes/ass_slapping.mov" },
    { title: "Funky Bird", url: "./Content/Videos/Memes/bird-birds.mp4" },
    { title: "Fighty Kittys", url: "./Content/Videos/Memes/bop_bop.mp4" },
    { title: "Thirsty Kitty", url: "./Content/Videos/Memes/cat_drinking_water.mp4" },
    { title: "Gamey Kitty", url: "./Content/Videos/Memes/cat_gameing_5.mov" },
    { title: "Maniacy Kitty", url: "./Content/Videos/Memes/cat_maniac.mp4" },
    { title: "Wicked Kitty", url: "./Content/Videos/Memes/cat_snowboard.mp4" },
    { title: "Mochicat Kitty", url: "./Content/Videos/Memes/Cats.mov" },
    { title: "Jumpy Kitty", url: "./Content/Videos/Memes/CATTIW.mp4" },
    { title: "Howdy Kitty", url: "./Content/Videos/Memes/Cowboy Cat.mov" },
    { title: "Invisble Kitty", url: "./Content/Videos/Memes/dissappear.mp4" },
    { title: "Dummy Kitty", url: "./Content/Videos/Memes/dummy_little_guy.mp4" },
    { title: "Spinny Kitty", url: "./Content/Videos/Memes/eek_the_cat.mp4" },
    { title: "Eepy Kitty", url: "./Content/Videos/Memes/eepy Doorbell Cat.mov" },
    { title: "Confused Kitty", url: "./Content/Videos/Memes/jinx_huh.mov" },
  ];

  const video_selector = document.getElementById('video_selector');
  const video_player = document.getElementById('video_player');

  // Populate the dropdown
  video_list.forEach((video, index) => {
    const option = document.createElement('option');
    option.value = video.url;
    option.textContent = video.title;
    video_selector.appendChild(option);
  });

  // Handle dropdown change
  video_selector.addEventListener('change', () => {
    const selected_url = video_selector.value;
    const source = video_player.querySelector('source');
    video_player.querySelector('source').src = selected_url;
    video_player.load();
    video_player.play();
    video_player.style.display = "block";
  });
});
function play_sound() {
        //gets area where sound controls will spawn
        var sound_area = document.getElementById("sound_area");
        // sets that area to the sound and autoplays it
            sound_area.innerHTML = '<audio onloadstart="this.volume=0.25" autoplay controls loop src="./Content/Audio/ambispace4.ogg"></audio> <br>';
            // sets the text to black for readability
            document.body.style.color = 'black';
}
//the omni-tool function command, how i loathe thee
function play_craps(){
    //the divine beings must hear harold of my arrival
    console.log("play_craps was called");
    //the dice of fate must be cast for the world to see
    var die1 = roll_die();
    //the fates have fortold that the first die cast shall be...
    console.log("die1 roll equals " + die1);

    var die2 = roll_die();

    console.log("die2 roll equals " + die2);
// the resulting decision of the fates is foretold in the god's breath
    var sum = die1 + die2;

    console.log("the sum of die1 and die2 equals " + sum);

    document.getElementById("die_1_result").innerHTML = "Die 1 is: " + die1;
    document.getElementById("die_2_result").innerHTML = "Die 2 is: " + die2;
    document.getElementById("sum_result").innerHTML = "The sum is: " + sum;

    //what is this game of fate we play called life
    // absolute symbol is an OR statement, double equals is checking if they are equal
    if (sum == 7 || sum == 11){
        document.getElementById("craps_result").innerHTML = "Fate has forsaken you today";
    }
    // how the beings of yore praytold that the numerical symbols were both even and equal
    else if(die1 == die2 && die1 % die2 == 0){
        document.getElementById("craps_result").innerHTML = "Fate smiles upon your good fortune";

    }
    // what to say when neither of your choices are available
    else{
        document.getElementById("craps_result").innerHTML = "Fate has not yet decided your outcome, roll again";
        
    }
}


//how the fates shall decide their allegience
function roll_die(){
    //a random number between 1-0
    var die = Math.random() * 6;
    //how to round to get rid of the pesky decimals
    return Math.ceil(die);
}

// riddle
function riddle_solver() {

    // get my riddles from the page and make string vars out of them
        var first_riddle = document.getElementById("riddle_1").value;
    
        var second_riddle = document.getElementById("riddle_2").value;
    
        var third_riddle = document.getElementById("riddle_3").value;
    // debugging to make sure they get saved
        console.log("what goes on four feet in the morning, two in the afternoon, and three at night? "+ first_riddle);
        console.log("What can run but never walks, Has a mouth but never talks, Has a bed but never sleeps, Has a head but never weeps? "+ second_riddle);
        console.log("The maker doesnt want it, the buyer does not use it, but user does not see it. "+ third_riddle);
        // if the riddle does NOT contain the word 'man', you get a wrong answer.
        // not exactly the best way of doing this but this is the quickest way to umbrella all the ways people might type out the answer
        if (!first_riddle.includes("man")){
            console.log("wrong answer");
            document.getElementById("checked_riddle_1").innerHTML ="The Sphinx is displeased";
        }
        // checks if the riddle does NOT contain river, if it doesn't you lose
        else if (!second_riddle.includes("river")){
            console.log("wrong answer");
            document.getElementById("checked_riddle_2").innerHTML ="The Sphinx is displeased";
        }
        // checks if not coffin, if not you lose
        else if (!third_riddle.includes("coffin")){
            console.log("wrong answer");
            document.getElementById("checked_riddle_3").innerHTML ="The Sphinx is displeased";
        }
        //clears all the previous lose messages and displays the success alert and secret meme.
        else{
            console.log("Riddles answered correctly");
            alert("You have correctly answered the Sphinx's riddles.");
            document.getElementById("checked_riddle_1").innerHTML ="";
            document.getElementById("checked_riddle_2").innerHTML ="";
            document.getElementById("checked_riddle_3").innerHTML ="";
            document.getElementById("secret_meme").innerHTML ='<video onloadstart="this.volume=0.25" controls src=".Content/Videos/Memes/examine_birb.mp4"></video>';
    
        }
    
        return false
    }
