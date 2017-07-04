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
	
}
