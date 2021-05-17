window.onload = function(){
    let list1=document.getElementById('list');
    let music = document.querySelector('audio');
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
    playSong=(i)=>{
        music.src=songs[i].path;
        music.play();
    }
    let listSongs = () =>{
        for(i=0;i<songs.length;i++){
            list1.innerHTML+=`<div id=${i+1}><p>${songs[i].displayName}</p><button class="fas fa-play" id=${i}btn onclick={playSong(${i})}></button`;
        }
    }
    listSongs();
}
