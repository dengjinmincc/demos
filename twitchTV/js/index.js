$(document).ready(function(){
	var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb", "noobs2ninjas","beohoff"],  
		main = $(".main"); 
		
		
	//根据channel查找其头像等,显示在列表中	
	channels.forEach(function(channel){
		var status;
		
		/*$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channel + '?callback=?', function(data){
			//console.log(data);
			if(data.stream == null){
				game = "offline";
				status = "offline";
			}else if(data.stream == undefined){
				game = "Account Closed";
				status = "offline";
			}else{
				game = data.stream.game;
				status = "online";
			}
		});*/
		$.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + channel + '?callback=?', function(data){
			console.log(data);
			var logo = data.logo != null? data.logo : "http://www.fashatude.com/static/fashatude/img/user_icon.png",
				name = data.display_name != null? data.display_name : channel,
				status = data.status != null? data.status : null,
				item = document.createElement("li"),
				pic = document.createElement("img"),
				links = document.createElement("a"),
				main = document.getElementById("main"), 
				i = document.createElement("i");
				
			pic.src = logo;
			links.href = data.url;
			links.innerText = name;
			item.appendChild(pic);
			item.appendChild(links);
			
			//temp += "<li><img src = " + logo + ">" + "<a href = " + data._links.self + "> "+ name + "</a>" + "</li>";
			//console.log(temp[0]);
			/*if(status != null){
				i.className = "online";
			}else{
				i.className = "offline";
			}
			item.appendChild(i);*/
			main.appendChild(item);
		})
	})
	
	//点击不同状态时,根据其status进行切换
	//点击all 全部展示
	//点击online status为null的将其display设置为none
})

