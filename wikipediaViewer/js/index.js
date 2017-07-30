function getRes1(response){
	console.log(response);
	var pages = response.query.pages, 
		res = document.getElementById("result"), 
		html = "", 
		size = 0;
		
	if(response){
		res.style.display = "block";
		for(var att in pages){
			for(var ch in pages[att].thumbnail){
				html += "<li>" + "<a href=" + pages[att].thumbnail[ch].source + ">" + "<h1>" + pages[att].title + "</h1>" + "<p>" + pages[att].extract + "</p>" + "</a>" + "</li>";
			}
		}
	}
	res.innerHTML = html;
}

window.onload = function(){
	var search = document.getElementById("search"), 
		api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=", 
		cb = getRes1;
	
	search.onkeyup = function(e){
		if(e.keyCode == 13){
			if(search.value != ""){
				var script = document.createElement("script");
				script.src = api + search.value + "&callback=getRes1";
				document.body.appendChild(script);
			}else{
				console.log("None!");
			}
		}
	}
}
