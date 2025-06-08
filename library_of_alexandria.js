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


  //slideshow
  let array_images = [
    "./Content/Images/alt_girl.png",
    "./Content/Images/clouded.png",
    "./Content/Images/Dolly_full.png",
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
