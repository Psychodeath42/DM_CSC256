//New and improved drop down menu, this time with infinitely less if/else statements and actually more expandable
//List of the videos that populate the dropdown menu
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
  
  //injecting text articles
  document.getElementById("h3_header_1").textContent = "This is a placeholder line.";
  document.getElementById("h4_subheader_1").textContent = "I forgot what I was suppose to say here.";
  document.getElementById("para_1").textContent = "This is an example of what a paragraph would look like if it were typed out. the fitness gram pacer test is a mult stage aerobics test to i forgot the rest of the lines but this is just filler to try to see how far this text wrapping needs to go so i'm just going to be writing a really long text so that it can wrap around. minecraft is one of the most sold games on the planet, wrackign in a whopping 300 million sales in some year i don't really remember but it was pretty recently.";
  document.getElementById("para_2").textContent = "This is an example of what a paragraph would look like if it were typed out. the fitness gram pacer test is a mult stage aerobics test to i forgot the rest of the lines but this is just filler to try to see how far this text wrapping needs to go so i'm just going to be writing a really long text so that it can wrap around. minecraft is one of the most sold games on the planet, wrackign in a whopping 300 million sales in some year i don't really remember but it was pretty recently.";
  document.getElementById("h3_header_array").textContent = "Add game titles here and sort them alphabetically"

  //slideshow
  let array_images = [
    "./Content/Images/alt_girl.png",
    "./Content/Images/satori_full_color.png",
    "./Content/Images/nezumi_full_color.png",
    "./Content/Images/foxo.png"
  ];
  // the first image in an index is 0
  let current_slide = 0;
  // create a function to display the selected image
  function display_slideshow_image(slide_location){

    let image_element = document.getElementById("img_slide");
    //sets image source for slideshow to index of the array
    image_element.src = array_images[slide_location];

  }
  function previous_slide(){
    current_slide = current_slide - 1;
    //same as current_slide--
    if (current_slide < 0){
      current_slide = array_images.length - 1;
    }
    display_slideshow_image(current_slide)
  }
  function next_slide(){
    current_slide++;
    if(current_slide == array_images.length){
      current_slide = 0;
    }
    display_slideshow_image(current_slide)
  }
  display_slideshow_image(current_slide)



  //user array section


  let array_game_titles = [];

  function add_title(){
    
    let user_game_names = document.getElementById("user_game_title");
    let game_name = user_game_title.value;

    //console.log("game_name=" + game_name);

    if (game_name != ""){
      array_game_titles.push(game_name);
      user_game_names.value = "";
      display_game_titles();
    }

  }

  //function to display titles on page
  function display_game_titles(){

    let titles_display = document.getElementById("titles_display");
    // sorts all the items in the array in alphabetical order
    array_game_titles.sort();
    // adds a space between all items in the array
    titles_display.innerHTML = array_game_titles.join("<br>");

    let random_string = Math.floor(Math.random() * array_game_titles.length);
    let display_random = array_game_titles[random_string];
    document.getElementById("h3_game_title").innerHTML = display_random;

  }

  //reset titles
  function reset_titles(){
    //sets the array to have nothing in it
    array_game_titles = [];
    //displays the nothing
    display_game_titles();

  }

  //game form function
  function generate_form(){
    
    let plr_nm = document.getElementById("txt_player_nm");
    
    let plr_lvl = document.getElementById("num_player_lvl");
    
    let plr_stat = document.getElementById("num_player_stat");
    
    let plr_desc = document.getElementById("txt_player_desc");

    console.log("name=" + plr_nm.value + "level=" + plr_lvl.value + "stats=" + plr_stat.value + "catchphrase=" + plr_desc.value);

    let output = "Name |" + plr_nm.value +"|" + "<br>" +
                "Level |" + plr_lvl.value +"|" + "<br>" +
                "Stats |" + plr_stat.value +"|" + "<br>" +
                "Catchphrase |" + plr_desc.value +"|" + "<br>";
    console.log(output);

    document.getElementById("player_info").style.display ="block";

    document.getElementById("div_output").innerHTML = output;

    plr_nm.value = "";
    plr_lvl.value = "";
    plr_stat.value = "";
    plr_desc.value = "";
  }


  //crossword
  let arr_words = new Array("ring","emir","final","nepo","drew","ref","imind","niner","grape","low")

  function build_crossword(rows, cols){
    let table = document.getElementById("table_puzzle");

    for (let i = 0; i < rows; i++){
      let row = document.createElement ("tr");

      for (let j =0; j < cols; j++){
        let col = document.createElement ("td");
        row.appendChild(col);
      }
      table.appendChild(row);
    }
  }

  //makes the words
  function build_words(str_row, str_col, word_ind, dir, table, show_ans, clue_num){
    let word = arr_words[word_ind];
    for(let i=0; i<word.length; i++){

      let row_ind = 0;
      let col_ind = 0;

      if(dir == "across"){
        row_ind = str_row;
        col_ind = str_col + i;
      }

      else{
        row_ind = str_row +i;
        col_ind = str_col;
      }

      let tr = table.rows[row_ind];
      let td = tr.cells[col_ind];

      if(i==0){
        let number = document.createElement("span");
        //sets the number
        number.textContent = clue_num;
        // sets the css style
        number.className = "clue_number_cs";
        td.appendChild(number);

      }

      if(!td.querySelector("input")){
        let input = document.createElement("input");
        input.setAttribute ("type","text");
        input.setAttribute("maxlength", "1");

        if(show_ans){
          input.value = word[i].toUpperCase();
        }
        // add text input to table data
        td.appendChild(input);
      }
      else{
        let existing_input = td.getElementsByTagName("input")[0];
        if(show_ans){
          existing_input.value = word[i].toUpperCase();
        }
      }
    }
  }

  build_crossword(5, 5);

  let table = document.getElementById("table_puzzle");

  build_words(0,0,0,"across",table,false,1);
  build_words(1,0,1,"across",table,false,5);
  build_words(2,0,2,"across",table,false,6);
  build_words(3,1,3,"across",table,false,8);
  build_words(4,1,4,"across",table,false,9);
  build_words(0,0,5,"down",table,false,1);
  build_words(0,1,6,"down",table,false,2);
  build_words(0,2,7,"down",table,false,3);
  build_words(0,3,8,"down",table,false,4);
  build_words(2,4,9,"down",table,false,7);
  
  function reveal_ans(){
    build_words(0,0,0,"across",table,true,1);
    build_words(1,0,1,"across",table,true,5);
    build_words(2,0,2,"across",table,true,6);
    build_words(3,1,3,"across",table,true,8);
    build_words(4,1,4,"across",table,true,9);
    build_words(0,0,5,"down",table,true,1);
    build_words(0,1,6,"down",table,true,2);
    build_words(0,2,7,"down",table,true,3);
    build_words(0,3,8,"down",table,true,4);
    build_words(2,4,9,"down",table,true,7);
  }
  



 /* function test_input(event){
    
    event.preventDefault();
    console.log ("form was submitted");

    let txt_spec_char = document.getElementById("txt_spec_char");
    let txt_email = document.getElementById("txt_email");

    let spec_char = /[`~!@#$%^&*()_+-=,./;'\<>?:"{}|]/

    if (spec_char.test(txt_spec_char)){

      div_result.textContent = "input contained special characters";

    }
    else{ div_result.textContent = "input did not contain special characters"}
  } */
  