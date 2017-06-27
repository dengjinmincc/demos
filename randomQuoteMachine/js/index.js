$(document).ready(function(){
	var quote, author;
	function getNewQuote(){
		$.ajax({
			type: "get",
			url: "http://api.forismatic.com/api/1.0/",
			async: false, 
			jsonp: "jsonp", 
			dataType: "jsonp", 
			data: {
				method: 'getQuote', 
				format: 'jsonp', 
				lang: 'en'
			}, 
			success: function(response){
				quote = response.quoteText; 
				author = response.quoteAuthor;
				$(".quote p").text('\" ' + quote + '\" ');
				if(author){
					$('.quote h2').text("by " + author);
				}else{
					$('.quote h2').text("by unknown");
				}
			}
		});
	}
	getNewQuote();
	$("#change").bind('click', function(e){
		e.preventDefault();
		getNewQuote();
	})
	$("#tweet").bind('click', function(e){
		e.preventDefault();
		window.open('http://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' by ' + author));
	})
	$("#weibo").bind('click', function(e){
		e.preventDefault();
		window.open('http://v.t.sina.com.cn/share/share.php?title=' + encodeURIComponent(quote + ' by ' + author))
	})
})
