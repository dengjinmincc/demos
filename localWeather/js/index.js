//appkey:ff8591e26fee2f9902562d1332f683f2
$(document).ready(function(){
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
})
