$(function() {
/*用于判断执行次数*/
 var i=0; 
  var j=0;
 
$("#notice-nav ul li").mouseenter(function(){
 

if($(this).attr("class")==("ss")){
  i=0;
    if(j==1)
    {
return;
    }
 $("#xian").animate({left:"1532px"},300)
 j++;
	}

else if($(this).attr("class")==("sc")&&i<=1){
  j=0;
  if(i==1)
    {
return;
    }
 	$("#xian").animate({left:"1447px"},300)
      i++;
     }
     
})

$('.pi img').mouseenter(function(){
 $(this).animate({top:"-42px",opacity:"0"},300,function(){
 	$(this).css({top:'8px'});
 });
	
	$(this).animate({top:"0px",opacity:"1"},600);
})
$('#kind ul li').mouseenter(function(){
$(this).find(".act").show(300);
})

$('#kind ul li').mouseleave(function(){
  
	$(this).find(".act").hide(300);
})
})


window.onload=function(){
  var tab=document.getElementById("notice-nav");
  var titles=tab.getElementsByTagName("li");
  var divs=document.getElementById("tab_c").getElementsByTagName("div");
  if(titles.length!==divs.length)
   return;
//遍历所有li,鼠标移动实现
//
for(var i=0;i<titles.length;i++)
{
  titles[i].id=i;//自定义索引
   divs[0].style.display="block";
    titles[0].style.backgroundColor="#fff";
  titles[i].onmouseover=function(){
     for(var j=0;j<divs.length;j++)
  {
   divs[j].style.display="none";
 titles[j].style.backgroundColor="#eee";
  } 
  divs[this.id].style.display="block";
   titles[this.id].style.backgroundColor="#fff";
   }
/*   鼠标移出效果*/
   titles[i].onmouseout=function(){
     for(var j=0;j<divs.length;j++)
  {
    divs[j].style.display="none";
  } 

    divs[this.id].style.display="block";
   }
}
}