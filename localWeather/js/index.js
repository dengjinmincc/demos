//appkey:ff8591e26fee2f9902562d1332f683f2
/*$(document).ready(function(){
	var temp = $("#temp"), direction = $("#direction"), strength = $("#strength"), 
		humidity = $("#humidity"), time = $("#time"), update = $("#update");
		
	update.click(function(){
		$.ajax({
			type: "get",
			url: "http://v.juhe.cn/weather/index",
			
			dataType: "jsonp", 
			data: {
				format: "2",
				cityname: "%E6%88%90%E9%83%BD",
				key: "ff8591e26fee2f9902562d1332f683f2",
				method: "showWeather"
			},
			async: false, 
			success: function(data){
				console.log(data);
			}
		});
	})
})*/
var index = document.getElementById("index"), 
	future = document.getElementById("future"), 
	nav = document.getElementsByTagName("a");
	
nav[0].onclick = function(e){
	e.preventDefault();
	index.style.display = "block";
	future.style.display = "none";
	nav[0].style.backgroundColor = "#fff";
	nav[0].style.color = "#4990E2";
	nav[1].style.backgroundColor = "transparent";
	nav[1].style.color = "#fff";
}
nav[1].onclick = function(e){
	e.preventDefault();
	index.style.display = "none";
	future.style.display = "block";
	nav[1].style.backgroundColor = "#fff";
	nav[1].style.color = "#4990E2";
	nav[0].style.backgroundColor = "transparent";
	nav[0].style.color = "#fff";
}

function showWeather(response){
	console.log(response);
	var temp = document.getElementsByTagName("h1"), 
		sk_info = document.getElementsByTagName("span"), 
		index_info = document.getElementsByTagName("p");
		date_info = document.getElementsByTagName("h3")
		
	//实时信息
	temp[0].innerText = response.result.sk.temp + "°С";
	sk_info[0].innerText = response.result.sk.humidity;
	sk_info[1].innerText = response.result.sk.wind_direction;
	sk_info[2].innerText = response.result.sk.wind_strength;
	
	//指数信息
	index_info[0].innerText = response.result.today.dressing_index;
	index_info[1].innerText = response.result.today.dressing_advice;
	index_info[2].innerText = response.result.today.exercise_index;
	index_info[3].innerText = response.result.today.travel_index;
	index_info[4].innerText = response.result.today.uv_index;
	index_info[5].innerText = response.result.today.weather;
	
	//未来七天
	date_info[5].innerText = response.result.future[0].date;
	date_info[6].innerText = response.result.future[1].date;
	date_info[7].innerText = response.result.future[2].date;
	date_info[8].innerText = response.result.future[3].date;
	date_info[9].innerText = response.result.future[4].date;
	date_info[10].innerText = response.result.future[5].date;
	index_info[5].innerText = response.result.future[0].temperature;
	index_info[6].innerText = response.result.future[1].temperature;
	index_info[7].innerText = response.result.future[2].temperature;
	index_info[8].innerText = response.result.future[3].temperature;
	index_info[9].innerText = response.result.future[4].temperature;
	index_info[10].innerText = response.result.future[5].temperature;
}
window.onload = function(){
	var convert = document.getElementById("convert");
	
	convert.onclick = function(){
		let script = document.createElement("script");
		script.src = "http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=ff8591e26fee2f9902562d1332f683f2&callback=showWeather";
		document.body.appendChild(script);
	}
}
