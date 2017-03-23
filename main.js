console.log('hello');

// targets the play button from the page and
//  stores a reference to it in the playButton variable
// this play button has global scope
var playButton = document.querySelector("#play")

// defines the Jukebox object
function Jukebox() {
  // the code for what happens when you create a Jukebox object
  //  goes here
}

// defines the Jukebox prototype object
Jukebox.prototype.play = function () {
  // the code for playing a song would go here
}

// the rest of your prototype methods would go here

// creates a new Jukebox object
// this variable has global scope after this point
var jukebox = new Jukebox()

// adds an event listener for when you click the play button
playButton.addEventListener("click", function(event){
  // prevents link from going to the next page
  event.preventDefault()

  // the rest of the code
  //  for what happens when you click the play button goes here

  // uses the jukebox object to play the music file
  jukebox.play()
})

// the rest of your event listeners would go here
