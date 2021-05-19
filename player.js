window.onload = function(){
    let isPlaying=false;
    let list1=document.getElementById('list');
    let music = document.querySelector('audio');
    let playPause1 = document.getElementById('playPause');
    let player = document.getElementsByClassName('player')[0];
    let audio = document.getElementById('myAudio');
    let currentEl = document.getElementById('current-time');
    let durationEl = document.getElementById('total-duration');
    let progress = document.getElementById('progress-bar');
    player.style.display="none";
    const songs =[
        {
            path:'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/1.mp3',
            displayName: 'yildiz Tozu',
            cove:"https://images.genius.com/ee202c6f724ffd4cf61db01a205eeb47.100x1000x1.jpg",

        },
        {
            path:'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/2.mp3',
            displayName:'You Are Somebody Else',
            cover:"https://pbs.twimg.com/media/D2NZH-2U4AAL9Xs.jpg"

        },
    ]
    let z;
    playSong=(i)=>{
        player.style.display="block";
        console.log(i);
        playPause1.className="fas fa-pause";
        music.src=songs[i].path;
        music.play();
        console.log(audio.duration);
        let x=0;
        
        //z=setInterval(function(){updateTimer(x+1) }, 1000);

        isPlaying=true;
        currentSong=i;
    }
    let listSongs = () =>{
        for(i=0;i<songs.length;i++){
            list1.innerHTML+=`<div id=${i+1}><p>${songs[i].displayName}</p><button class="fas fa-play" id=${i}btn onclick={playSong(${i})}></button`;
        }
    }
    listSongs();
    playPause=()=>{
        if(isPlaying==true){
            playPause1.className="fas fa-play";
            music.pause();
            music.duration
            isPlaying=false;
        }
        else{
            playPause1.className="fas fa-pause";
            music.play();
            isPlaying=true;
        }
        
    }
    nextSong=()=>{
        isPlaying=false;
        playPause();
        console.log("currentSong", currentSong);
        console.log("songs.length", songs.length);
        if(currentSong>=songs.length-1){
            currentSong=0
        }
        else{
            currentSong+=1;
        }
        playSong(currentSong);
    }
    prevSong=()=>{
        isPlaying=false;
        playPause();
        if(currentSong==0){
            currentSong=songs.length-1;
        }
        else{
            currentSong-=1;
        }
       playSong(currentSong);

    }
    seekTo=()=>{
        music.pause();
        let {duration, currentTime}=music;
        let value = progress.value;
        currentTime=(value*duration)/100;
        music.currentTime=currentTime;
        music.play();
        let currentMin= Math.floor(currentTime/60);
        let  currentSec= Math.floor(currentTime%60);

        if(currentSec<=0){
            currentSec =`0${currentSec}`;
        }
        progress.value=(currentTime/duration)*100;
        currentEl.innerHTML =`${currentMin}:${currentSec}`;

    }
    let x=0;
    progress.value=0;
    function updateTimer(e) {
        const {duration, currentTime}=music;
        console.log(currentTime);
        let durationMin = Math.floor(duration/60);
        let durationSec = Math.floor(duration%60);
        if(durationSec<=0){
            durationSec = `0${durationSec}`;
        }
        if(durationSec)
        durationEl.innerHTML=`${durationMin}:${durationSec}`;
        let currentMin= Math.floor(currentTime/60);
        let  currentSec= Math.floor(currentTime%60);

        if(currentSec<=0){
            currentSec =`0${currentSec}`;
        }
        progress.value=(currentTime/duration)*100;
        currentEl.innerHTML =`${currentMin}:${currentSec}`;

        //x+=1;
        //console.log(x);
        console.log(duration);
        if(x>=duration){
           clearInterval(z); 
           isPlaying=false;
           playPause();
        }

    }
    music.addEventListener("timeupdate", updateTimer);

    
}
