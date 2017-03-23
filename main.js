// targets the play button from the page and
//  stores a reference to it in the playButton variable
// this play button has global scope
var playButton = document.querySelector("#play")
var pauseButton = document.querySelector("#pause")
var nextButton = document.querySelector("#next")
var backButton = document.querySelector("#back")

function Song(audioSource) {
  this.audioSource = audioSource
}

var bombay = new Song("audiofiles/Bombay.mp3")
console.log(bombay)
var lycraMistral = new Song("audiofiles/LycraMistral.mp3")
var novias = new Song("audiofiles/Novias")
var socaDelEclipse = new Song ("audiofiles/SocaDelEclipse.mp3")

// defines the Jukebox object
function Jukebox() {
  this.audio = new Audio(bombay.audioSource)
  this.song = []
  // the code for what happens when you create a Jukebox object
  //  goes here
}


// defines the Jukebox prototype method

Jukebox.prototype.addingSongs =
function(song) {
  this.song.push(song)
}


Jukebox.prototype.play = function() {
  this.audio.play()
  // the code for playing a song would go here

}

// the rest of your prototype methods would go here
Jukebox.prototype.pause = function () {
  this.audio.pause()
}

Jukebox.prototype.nextsong = function () {

}

Jukebox.prototype.back = function () {

}

Jukebox.prototype.loadSong = function () {

}


// creates a new Jukebox object
// this variable has global scope after this point

// var jukebox = new Jukebox()
var jukebox = new Jukebox()
jukebox.addingSongs(bombay)
jukebox.addingSongs(lycraMistral)
jukebox.addingSongs(novias)
jukebox.addingSongs(socaDelEclipse)

console.log(jukebox);

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

pauseButton.addEventListener("click", function(event){
  event.preventDefault()

  jukebox.pause()
})

nextButton.addEventListener("click", function(event){
  event.preventDefault()

  jukebox.nextsong()
})

backButton.addEventListener("click", function(event){
  event.preventDefault()

  jukebox.back()
})
