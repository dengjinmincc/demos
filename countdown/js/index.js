window.onload = function(){
	var countdown = document.getElementById('countdown');
	var btn = document.getElementsByTagName('button')[0];
	var timer = null;
	//为button设置点击事件，切换class:cancel
	//判断button的class，若为cancel,点击则倒计时开始；否则暂停
	btn.onclick = function(){
		this.className == ''? (timer = setInterval(updateTime, 1000), updateTime()): (clearInterval(timer));
		this.className = this.className == ''? 'cancel':''; 
	}
	//倒计时事件:每秒钟为updateTime()事件调用setInterval()
	
	//updateTime()
	function updateTime(){
		var oSpan = document.getElementsByTagName('span');
		var time = parseInt(oSpan[0].innerHTML) * 60 + parseInt(oSpan[1].innerHTML);
		if(time <= 0){
			clearInterval(timer);
			return;
		}
		time--;
		oSpan[0].innerHTML = Math.floor(time / 60);
		oSpan[1].innerHTML = (time % 60);
	}
}
