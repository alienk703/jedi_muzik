
SC.initialize({
  client_id: '176f804e94b2cfc28eb3beb1685af0d9'
});

var track_url = 'https://soundcloud.com/jedimuzik/earth-wind-and-fire-brazilian-rhyme-jedi-zo-remix-freedownload';
SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
  console.log('oEmbed response: ' + oEmbed);
});

// SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
//   alert("Latest track: " + tracks[0].title);
// });



// function playSound(genre) {
// 	// SC.get('/tracks', {
// 	// 	genres: genre,
// 	// 	bpm: {
// 	// 		from: 100
// 	// 	}
// 	// }, function(tracks){
// 	// 	var random = Math.floor(Math.random() * 49);
// 	// 	SC.oEmbed(tracks[random].uri, { auto_play: true }, document.getElementById('target'));
// 	// });
// 	SC.get("https://api.soundcloud.com/tracks/", {limit: 5, autoPlay:true}, function(tracks){
//   alert("Latest track: " + tracks[0].title);
// });
// }

// window.onload = function() {
// 	SC.initialize({
//     client_id: "176f804e94b2cfc28eb3beb1685af0d9"
//   });

// 	SC.get("/tracks", {limit: 5, autoPlay:true}, function(tracks){
//   alert("Latest track: " + tracks[0].title);
// });

// SC.oEmbed(tracks[random].uri, { auto_play: true }, document.getElementById('target'));



// 	SC.stream("/tracks/293", { autoLoad: true, autoPlay: true}, function(sound){
//   sound.play();
// });
// };




//  SC.initialize({
//     client_id: "YOUR_CLIENT_ID"
//   });

  
// SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
//   alert("Latest track: " + tracks[0].title);
// });