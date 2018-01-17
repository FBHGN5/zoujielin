$(function(){
var box=$("#box");
var big=$("#big img");
box.mousemove(function(a){
    $("#big").css("display","block");
	var evt = a || window.event
var top = evt.clientY-($("#box").offset().top- $(document).scrollTop())-88;
var left= evt.clientX-($("#box").offset().left- $(document).scrollLeft())-88;//计算移动框的top和left（鼠标到浏览器顶部的距离减去容器到浏览器顶部的距离等于鼠标到容器的距离。）
			if(top<=0){
				top = 0;
			}
			if(left<=0){
				left = 0;
			}
			if(top>=175){
				top=175
			}
			if(left>=175){
				left=175
			}
		$("#float").css({'left':left,'top':top})
		var btop=top/350*800;
		var bleft=left/350*800;
        big.css({"top":-btop,"left":-bleft});
		})
box.mouseout(function(){
	$("#big").fadeOut(500);
})

})