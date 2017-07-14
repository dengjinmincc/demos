$(document).ready(function(){
	var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb", "noobs2ninjas","beohoff"];   
		
	//根据channel查找其头像等,显示在列表中	
	channels.forEach(function(channel){
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
			
			if(status != null){
				i.className = "online";
			}else{
				i.className = "offline";
			}
			item.appendChild(i);
			main.appendChild(item);
		})
	})
	
	//点击不同状态时,根据其status进行切换
	//点击all 全部展示
	//点击online status为null的将其display设置为none
	
	var status1 = document.getElementById("status"),
		main = document.getElementById("main"), 
		all = document.getElementById("all"), 
		on = document.getElementById("on"),
		off = document.getElementById("off"), 
		itemss = status1.getElementsByTagName("li"),
		user = main.getElementsByTagName("li"),
		i1 = document.getElementsByTagName("i"), 
		len1 = itemss.length;
	
	for(let i = 0; i < len1; i++){
		itemss[i].onclick = function(e){
			if(e.target.className == "initial"){
				for(let j = 0; j < len1; j++){
					itemss[j].className = "initial";
				}
				itemss[i].className = "convert";
				if(itemss[i] == on){
					for(let k = 0; k < user.length; k++){
						if(i1[k].className == "offline"){
							user[k].style.display = "none";
						}
					}
				}else if(itemss[i] == off){
					for(let k = 0; k < user.length; k++){
						if(i1[k].className == "online"){
							user[k].style.display = "none";
						}
					}
				}else{
					for(let k = 0; k < user.length; k++){	
						user[k].style.display = "block";
					}
				}
				}
			}
		}
})

