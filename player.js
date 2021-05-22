window.onload = function(){
    let isPlaying=false;
    const list1=document.getElementById('list');
    const music = document.querySelector('audio');
    const playPause1 = document.getElementById('playPause');
    const player = document.getElementsByClassName('player')[0];
    const audio = document.getElementById('myAudio');
    const currentEl = document.getElementById('current-time');
    const durationEl = document.getElementById('total-duration');
    const progress = document.getElementById('progress-bar');
    const img=document.getElementsByClassName("img-container")[0].querySelector('img');
    const background_img=document.getElementsByClassName("bg-img")[0];
    const volume=document.getElementsByClassName("volume-slider")[0];
    player.style.display="none";
    const songs =[
        {
            path:'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/1.mp3',
            displayName: 'yildiz Tozu',
            cover:"https://i.ibb.co/tqnPYX8/yildiz-tozu.jpg",

        },
        {
            path:'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/2.mp3',
            displayName:'You Are Somebody Else',
            cover:"https://pbs.twimg.com/media/D2NZH-2U4AAL9Xs.jpg"

        },
        {
            path:'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/1.mp3',
            displayName: 'yildiz Tozu',
            cover:"https://i.ibb.co/tqnPYX8/yildiz-tozu.jpg",

        },
        {
            path:'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/2.mp3',
            displayName:'You Are Somebody Else',
            cover:"https://pbs.twimg.com/media/D2NZH-2U4AAL9Xs.jpg"

        },
        {
            path:'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/1.mp3',
            displayName: 'yildiz Tozu',
            cover:"https://i.ibb.co/tqnPYX8/yildiz-tozu.jpg",

        },
        {
            path:'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/2.mp3',
            displayName:'You Are Somebody Else',
            cover:"https://pbs.twimg.com/media/D2NZH-2U4AAL9Xs.jpg"

        },
        {
            path:'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/1.mp3',
            displayName: 'yildiz Tozu',
            cover:"https://i.ibb.co/tqnPYX8/yildiz-tozu.jpg",

        },
        {
            path:'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/2.mp3',
            displayName:'You Are Somebody Else',
            cover:"https://pbs.twimg.com/media/D2NZH-2U4AAL9Xs.jpg"

        },
    ]
    changeImage=(i)=>{
        img.src=songs[i].cover;
        img.alt=songs[i].displayName;
    }
    playSong=(i)=>{
        player.style.display="block";
        console.log(i);
        playPause1.className="fas fa-pause";
        music.src=songs[i].path;
        music.volume=(volume.value)/100;
        music.play();
        console.log(music.duration);
        isPlaying=true;
        currentSong=i;
        changeImage(i);
        background_img.src=songs[i].cover;

    }
    changeVolume=()=>{
        music.volume=(volume.value)/100;
    }
    let listSongs = () =>{
        for(i=0;i<songs.length;i++){
            list1.innerHTML+=`<div class="card" id=${i+1}>${songs[i].displayName}<button class="fas fa-play" id=${i}btn onclick={playSong(${i})}></button></div>`;
        }
    }
    listSongs();
    playPause=()=>{
        if(isPlaying==true){
            playPause1.className="fas fa-play";
            console.log(music);
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
        if(durationSec<=9){
            durationSec = `0${durationSec}`;
        }
        if(durationSec)
        durationEl.innerHTML=`${durationMin}:${durationSec}`;
        let currentMin= Math.floor(currentTime/60);
        let  currentSec= Math.floor(currentTime%60);

        if(currentSec<=9){
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
