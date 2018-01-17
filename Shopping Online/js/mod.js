$(document).ready(function(){
	function rec(){
		$("#box").animate({left:"670px"},800);
	}
	rec();
	$("#but").click(function(){
		var old=document.getElementById('old');
		var a=document.getElementById('new1');
		var b=document.getElementById('new2');
		if(old.value!=123456){
			alert("原密码错误！");
		}
		else if(a.value!=b.value)
		{
			alert("两次输入的密码不一致")
		}
	});
});