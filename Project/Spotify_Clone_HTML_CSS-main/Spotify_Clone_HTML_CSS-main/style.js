
document.getElementById('playButton');
addEventListener('click', function() {
    // Create an audio element
    var audio = new Audio();
    var song= document.createElement("audio"); 
   song.setAttribute('src', 'Spotify_Clone_HTML_CSS-main/SONG1.mp3'); 
    song.play(); 
    isplaying= false;
    //Set the source of the audi o element to your MP3 file
   audio.src = 'file:///C:/Users/umesh/Downloads/Spotify_Clone_HTML_CSS-main/Spotify_Clone_HTML_CSS-main/SONG1.mp3';
   // Play the audio
   audio.play();
   // Redirect to the MP3 file page
    window.location.href = 'file:///C:/Users/umesh/Downloads/Spotify_Clone_HTML_CSS-main/Spotify_Clone_HTML_CSS-main/SONG1.mp3';
});


