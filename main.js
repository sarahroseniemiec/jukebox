
var playButton = document.querySelector("#play")
var pauseButton = document.querySelector("#pause")
var stopButton = document.querySelector("#stop")
var nextButton = document.querySelector("#next")
var backButton = document.querySelector("#back")
var newSongButton = document.querySelector("#newsong")
var youRock = document.querySelector("#yourock")
var rockWith = document.querySelector("#rockwith")
var steveBiko = document.querySelector("#stevebiko")

var index = [0]
var titleSpot = document.querySelector("#titlespot")
var artistSpot = document.querySelector("#artistspot")

var songs = [
  new Audio("audiofiles/track1.mp3"),
  new Audio("audiofiles/track2.mp3"),
  new Audio("audiofiles/track3.mp3"),
  new Audio("audiofiles/track4.mp3")
]

var titles = [
  "Title: Bombay",
  "Title: Novias",
  "Title: Soca Del Eclipse",
  "Title: Lycra Mistral"
]

var artists = [
  "Artist: El Guincho",
  "Artist: El Guincho",
  "Artist: El Guincho",
  "Artist: El Guincho",
]


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
      index = this.songs.length -1
  }
  this.songs[index].play()
}


var jukebox = new Jukebox(songs)


playButton.addEventListener("click", function(event){
  event.preventDefault()
  titleSpot.innerHTML = titles[index]
  artistSpot.innerHTML = artists[index]
  jukebox.play()
  playButton.style.color = "#ff4f5a"
  pauseButton.style.color = "#2d2d2d"
  stopButton.style.color = "#2d2d2d"
})

pauseButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.pause()
  pauseButton.style.color = "#ff4f5a"
  playButton.style.color = "#2d2d2d"
  stopButton.style.color = "#2d2d2d"
})

stopButton.addEventListener("click", function(event) {
  event.preventDefault()
  jukebox.stop()
  stopButton.style.color = "#ff4f5a"
  playButton.style.color = "#2d2d2d"
  pauseButton.style.color = "#2d2d2d"
})

nextButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.forward()
  titleSpot.innerHTML = titles[index]
  artistSpot.innerHTML = artists[index]
  playButton.style.color = "#ff4f5a"
  pauseButton.style.color = "#2d2d2d"
  stopButton.style.color = "#2d2d2d"
})

backButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.back()
  titleSpot.innerHTML = titles[index]
  artistSpot.innerHTML = artists[index]
  playButton.style.color = "#ff4f5a"
  pauseButton.style.color = "#2d2d2d"
  stopButton.style.color = "#2d2d2d"
})

newSongButton.addEventListener("click", function(event) {
  event.preventDefault()
  var songField = document.querySelector("#songfield")
  var newSong = new Audio(songField.value)
  var titleField = document.querySelector("#titlefield")
  var newTitle = "Title: " + titleField.value
  var artistField = document.querySelector("#artistfield")
  var newArtist = "Artist: " + artistField.value
  songs.push(newSong)
  titles.push(newTitle)
  artists.push(newArtist)
})

youRock.addEventListener("click", function(event){
  event.preventDefault()
  var youRockMy = new Audio("audiofiles/YouRockMyWorld.mp3")
  var youRockmyTitle = "Title: " + "You Rock My World"
  var youRockmyArtist = "Artist: " + "Micheal Jackson"
  songs.push(youRockMy)
  titles.push(youRockmyTitle)
  artists.push(youRockmyArtist)
  youRock.style.color = "#ff4f5a"
})

rockWith.addEventListener("click", function(event){
  event.preventDefault()
  var rockWithYou = new Audio("audiofiles/rockwithyou.mp3")
  var rockWithYouTitle = "Title: " + "Rock With You"
  var rockWithYouArtist = "Artist: " + "Micheal Jackson"
  songs.push(rockWithYou)
  titles.push(rockWithYouTitle)
  artists.push(rockWithYouArtist)
  rockWith.style.color = "#ff4f5a"
})

steveBiko.addEventListener("click", function(event){
  event.preventDefault()
  var steve = new Audio("audiofiles/SteveBiko(StirItUp).mp3")
  var steveTitle = "Title: " + "Steve Biko (Stir It Up)"
  var steveArtist = "Artist: " + "A Tribe Called Quest"
  songs.push(steve)
  titles.push(steveTitle)
  artists.push(steveArtist)
  steveBiko.style.color = "#ff4f5a"
})
