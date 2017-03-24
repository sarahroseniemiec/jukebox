
var playButton = document.querySelector("#play")
var pauseButton = document.querySelector("#pause")
var stopButton = document.querySelector("#stop")
var nextButton = document.querySelector("#next")
var backButton = document.querySelector("#back")
var newSongButton = document.querySelector("#newsong")

var index = [0]

var songs = [new Audio("audiofiles/track1.mp3"), new Audio("audiofiles/track2.mp3"), new Audio("audiofiles/track3.mp3"), new Audio("audiofiles/track4.mp3")]


function Jukebox(songs) {
  this.songs = songs

}


Jukebox.prototype.play = function() {
  this.songs[index].play()

}

Jukebox.prototype.pause = function () {
  this.songs[index].pause()
}

Jukebox.prototype.stop = function () {
  this.songs[index].pause()
  this.songs[index].currentTime = 0
}

Jukebox.prototype.forward = function () {
  this.songs[index].pause()
  this.songs[index].currentTime = 0
  index ++
  this.songs[index]
  if (index === this.songs.length) {
      index = [0]
  }
  this.songs[index].play()
}

Jukebox.prototype.back = function () {
  this.songs[index].pause()
  this.songs[index].currentTime = 0
  index --
  if (index < 0) {
      index = 0
  }
  this.songs[index].play()
}

Jukebox.prototype.loadSong = function () {

}



var jukebox = new Jukebox(songs)


playButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.play()
})

pauseButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.pause()
})

stopButton.addEventListener("click", function(event) {
  event.preventDefault()
  jukebox.stop()
})

nextButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.forward()
})

backButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.back()
})

newSongButton.addEventListener("click", function(event) {
  event.preventDefault()
  var songField = document.querySelector("#songfield").value
  var newSong = new Audio(songField)
  var audioElement = document.createElement("audio")

})
