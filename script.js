let count = 0
let total = 0
let malas = 0

let max = 108
let circumference = 596

let countEl = document.getElementById("count")
let totalEl = document.getElementById("total")
let malaEl = document.getElementById("mala")
let progress = document.getElementById("progress")

document.getElementById("tap").onclick = function(){
    count++
    total++

    if(count >= max){
        malas++
        count = 0
        malaEl.innerText = malas
    }

    countEl.innerText = count
    totalEl.innerText = total

    let offset = circumference - (count/max)*circumference
    progress.style.strokeDashoffset = offset

    if(navigator.vibrate){
        navigator.vibrate(20)
    }

}

let music = document.getElementById("music")
let songs = document.querySelectorAll(".song")

songs.forEach(song=>{
    song.onclick = function(){

        songs.forEach(s=>s.classList.remove("active"))
        this.classList.add("active")

        music.src = this.dataset.src
        music.play()

    }
})

let mute = document.getElementById("mute")

mute.onclick = function(){

    if(music.paused){
        music.play()
        mute.innerText="🔊"
    }else{
        music.pause()
        mute.innerText="🔇"
    }

}