//New and improved drop down menu, this time with infinitely less if/else statements and actually more expandable
//List of the videos that populate the dropdown menu
const video_list = [
    //template for easier population
    //{ title: "", url: "./content/videos/memes/" },
    { title: "Dumby Kitty", url: "./content/videos/memes/6intbarbarian.mp4" },
    { title: "Mady kitty", url: "./content/videos/memes/anger-silent.mp4" },
    { title: "Very Mad Bee", url: "./content/videos/memes/anger.mp4" },
    { title: "Silly Kitty", url: "./content/videos/memes/ass_slapping.mov" },
    { title: "Funky Bird", url: "./content/videos/memes/bird-birds.mp4" },
    { title: "Fighty Kittys", url: "./content/videos/memes/bop_bop.mp4" },
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
    source.src = selected_url;

    // Set correct MIME type
    if (selected_url.endsWith('.mp4')) {
      source.type = 'video/mp4';
    } else if (selected_url.endsWith('.webm')) {
      source.type = 'video/webm';
    } else if (selected_url.endsWith('.ogg') || selected_url.endsWith('.ogv')) {
      source.type = 'video/ogg';
    } else if (selected_url.endsWith('.mov')) {
      source.type = 'video/quicktime'; // NOTE: Not well supported
    } else {
      source.type = '';
    }
    video_player.load();
    video_player.play();
    video_player.style.display = "block";
  });