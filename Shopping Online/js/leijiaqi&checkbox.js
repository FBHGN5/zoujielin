$(document).ready(function(){
  function rec(){
    $("#title").animate({left:"420px"},600);
  }
  rec();
  $("#close").click(function(){
    $("#fuqian").fadeOut(300,function(){
$("#fuqian").css({top:"0px"});
$("#close").css("display","none");
});
    $("#background").hide(900);
   
   //去除背景图片
});
// 注意函数名没有引号和括弧！ 
// 使用setInterval("show()",3000);会报“缺少对象” 
});
window.onload=function(){

  var zeng=document.getElementsByName("zeng");
  var jian=document.getElementsByName("jian");
  var dis=document.getElementsByName("dis");
  var xiaoji=document.getElementsByName("xiaoji");
var cks = document.getElementsByName('check');//数组长度为3
var sum=document.getElementById("sum");
  var val=document.getElementsByName("val");
var xiaoji=document.getElementsByName("xiaoji");
var cks = document.getElementsByName('check');//数组长度为3
var sum=document.getElementById("sum");
var ca=document.getElementById('checkAll');
var xiaoji=document.getElementsByName("xiaoji");
var cks = document.getElementsByName('check');//数组长度为3
var sum=document.getElementById("sum");
var he=0;
var a;
var b=cks.length;
var q=$("#table").find("tr").length;
var y=$("#table").find("tr").length;

var jiesuan=document.getElementById("button");
var body=document.getElementById("body");
var all=document.getElementById("all");
var fuqian=document.getElementById("fuqian");
jiesuan.onclick=function(){
  fuqian.style.display="block";
  $("#fuqian").animate({top:"250px",opacity: 1},500,function(){
    $("#close").show();
  })
  $("#background").css("display","block");
}
for(var i=0;i<dis.length;i++)
{   zeng[i].number=i;//解决闭包
  zeng[i].onclick=function(){
a=this.number;//解决闭包
dis[a].value=parseInt(dis[a].value)+1;
xiaoji[a].innerHTML=parseInt(val[a].innerHTML)*dis[a].value;
if(cks[a].checked==true)
{  
  he=he+parseInt(val[a].innerHTML);
  sum.innerHTML=he.toFixed(2);
}

}
dis[i].number=i;
dis[i].onmouseout=function(){

  a=this.number;
  he=0;
  if(dis[a].value<1)
  {
    alert("数量不能少于1！");
  }
  else{
    xiaoji[a].innerHTML=parseInt(val[a].innerHTML)*dis[a].value;
    for(var i=0;i<cks.length;i++)
      if(cks[i].checked==true)
      { 
        he=he+parseInt(xiaoji[i].innerHTML);
        sum.innerHTML=he.toFixed(2);
      }
    }
  }
  jian[i].number=i;
  jian[i].onclick=function(){
    a=this.number;
    if(dis[a].value<=1)
    {
      alert("数量不能少于1！");
    }
    else{
      dis[a].value=parseInt(dis[a].value)-1;;
      xiaoji[a].innerHTML=parseInt(val[a].innerHTML)*dis[a].value;
      if(cks[a].checked==true)
      {  
        he=he-parseInt(val[a].innerHTML);
        sum.innerHTML=he.toFixed(2);
      }
    }
  }
//单选
cks[i].number=i;
he=0;
b=0;
cks[i].onclick=function(){
a=this.number;
var yt=$(":checked").length;
var z=$(this).parents("#table").find("tr:hidden").length;
console.log(yt);
console.log("z:"+z);
  if (cks[a].checked==true) {
    he=he+parseInt(xiaoji[a].innerHTML);
    sum.innerHTML=he.toFixed(2);
    b++;
    if(b==cks.length) 
    {  
      ca.checked=true;
    }
    else if(yt==cks.length-z)
    {
      ca.checked=true;
    }
  }
  else if (cks[a].checked==false) {
    ca.checked=false;
    he=he-parseInt(xiaoji[a].innerHTML);
    sum.innerHTML=he.toFixed(2);
    b=b-1;
    if(b==0) 
    {  
      ca.checked=false;
    }


  }
}
//全选
ca.onclick=function(){
if(ca.checked==true)
    {   he=0;
      b=cks.length;
      for(var i=0;i<cks.length;i++)
      {
        cks[i].checked=true;
        he=he+parseInt(xiaoji[i].innerHTML);
        sum.innerHTML=he.toFixed(2);
      }
    }  
    else
      { b=0;
        for(var i=0;i<cks.length;i++)
        {
          cks[i].checked=false;
          he=0;
          sum.innerHTML=he.toFixed(2);
        }
      }
    }
//删除

$('.dte').click(function(){
  for(var i=0;i<cks.length;i++)
        {
          cks[i].checked=false;
          ca.checked=false;
          he=0;
$("#sum").html(he.toFixed(2));
           }
$(this).parent().parent().fadeOut("show");
var z=$(this).parents("#table").find("tr:hidden").length+1;
if(z==y-1)
play();
});
$("#delsome").click(function(){
$(":checked").parent().parent().fadeOut("show");
/*$(":checked").parent().parent().remove(); //隐藏所有被选中的input元素*/
//parent() 获得当前匹配元素集合中每个元素的父元素,
var z=$(":checked").parents("#table").find("tr:hidden").length+1;
if(z==y-1||ca.checked==true)
  {play();
    }

}); 

$("#delall").click(function(){
  $("#table").empty();
  he=0;
  $("#sum").html(he.toFixed(2));
  play();
});
}
}  
function show(){
  if(parseInt($("#sum").html())>=100)
  {
    $("#money").css({"margin-left":"-239px","font-size":"10px"})
  }
}
setInterval(show,1);

function play(){
$("#ss").fadeOut();
  $("#empty").fadeIn(0);
  $("#empty").animate({
    opacity: 1,
    marginTop: "100px"
  }, 500);
}
/*function deleteRow(r)
{var cks = document.getElementsByName('check');//数组长度为3
var i=r.parentNode.parentNode.rowIndex;
var xiaoji=document.getElementsByName("xiaoji");
var sum=document.getElementById("sum");
var he=0;
var vl=document.getElementsByName("value");
var q;

 for(var i=0;i<cks.length;i++)
    {  
      if(cks[i].checked==true)
     { q=vl[i].value;
       he=parseInt(sum.innerHTML)-parseInt(xiaoji[i].innerHTML);
      console.log(he);
       sum.innerHTML=he.toFixed(2);
}

    }

document.getElementById('table').deleteRow(i);

if(cks.length==0)
play()
}*/


