var calc = "";
var ans = "";
$(document).ready(function(){
	$('button').click(function(){
		var txt = $(this).attr("value");
		if(parseInt(txt, 10) == txt || txt === "+" || txt === "-"
			|| txt === "*" || txt === "/" || txt === "." || txt === "%"){
			calc += txt;
			$(".textbox").val(calc);
		}
		else if(txt === "AC"){
			calc = "";
			$(".textbox").val("");
		}
		else if(txt === "CE"){
			calc = calc.slice(0, -1);
			$(".textbox").val(calc);
		}
		else if(txt === "="){
			ans = eval(calc);
			$(".textbox").val(ans);
		}
	})
})
