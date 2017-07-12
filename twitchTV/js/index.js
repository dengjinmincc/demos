$(document).ready(function(){
	var user = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb"];
		
	function search(name, index){
		$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + name + "?callback=?", function(data){
			let status, game;
			if(data.stream){
				status = "online";
				game = data.stream.game;
				
			}
		});
	}
})
