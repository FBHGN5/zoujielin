$(document).ready(function(){
  function rec(){
    $("#zc").fadeIn(1000);
    $("#pic").animate({left:"350px"},600); 	
  }
  rec();
  $("#us1").click(function(){
    $("#us2").show();
    $("#us4").hide(1000);
    $("#us6").hide(1000);
    $("#us8").hide(1000);
  });
  $("#us3").click(function(){
    $("#us4").show();
    $("#us2").hide(1000);
    $("#us6").hide(1000);
    $("#us8").hide(1000);
  });
  $("#us5").click(function(){
    var us6=document.getElementById("us6");
    us6.style.color="#CCC";
    us6.innerHTML="<img class='IMG' src='../Image/zc.png' />"+"请再次输入密码";
    $("#us6").show();
    $("#us2").hide(1000);
    $("#us4").hide(1000);
    $("#us8").hide(1000);
  });
  $("#cc").click(function(){
    var us3=document.getElementById("us3");
    var us5=document.getElementById("us5");
    var us6=document.getElementById("us6");
    $("#us8").show();
    $("#us2").hide(1000);
    $("#us4").hide(1000);
    if(us3.value!=us5.value)
    {
      us6.style.color="red";   
      us6.innerHTML="<img class='IMG' src='../Image/zc.png' />"+"两次输入的密码不一致！！";
      $("#us6").show();
    }
    else{
      $("#us6").hide(1000);
    }
  });
});

window.onload=function(){
  var check=document.getElementById("check");
  var recdd=document.getElementById("cs");
  function generateBig(){
    var title=document.getElementById("title");
    var ch_big = 'A';
    var str_big = '';
    var ch_small='a';
    var str_small='';
    var j=0;
    var alphabet=[];
    var num=[];
    for(var i=0;i<26;i++){
str_big=String.fromCharCode(ch_big.charCodeAt(0)+i);//生成26个大写字母
str_small=String.fromCharCode(ch_small.charCodeAt(0)+i);//小写
alphabet[j]=str_big;
j++;
alphabet[j]=str_small;
j++;
}
for(var i=0;i<=9;i++)
{
  num[i]=i;
}
var ran=[];
for(i=0;i<=61;i++)
  if(i<=9)
    ran.push(num[i]);
  else
    ran.push(alphabet[i-10]);
  console.log(ran);
var a=Math.floor(Math.random()*ran.length);//Math.random()是0<=x<1的数
var b=Math.floor(Math.random()*ran.length);
var c=Math.floor(Math.random()*ran.length);
var d=Math.floor(Math.random()*ran.length);
title.innerHTML=ran[a]+""+ran[b]+""+ran[c]+""+ran[d];
return 
}
generateBig();
check.onclick=function(){

  var text=document.getElementById("cc");
  var title=document.getElementById("title");
  var us3=document.getElementById("us3");
  var us5=document.getElementById("us5");
  var us1=document.getElementById("us1");
  var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
  if(reg.test(us1.value)){     
   alert("用户名包含汉字！！");  
 }    
 else  if(us3.value!=us5.value)
 {
  alert("两次输入的密码不一致！！");
}
else if(text.value.toLowerCase()==title.innerHTML.toLowerCase())//不区分大小写
{
  alert("输入验证码正确！！！！");
}
else if(text.value=="")
{
  alert("验证码为空");
}
else{
  alert("验证码错误");
  generateBig();
}
}
recdd.onclick=function(){
  var title=document.getElementById("title");
  var  img=["../Image/bg01.png","../Image/bg02.png","../Image/bg03.png","../Image/bg04.png"];
var index=Math.floor(Math.random()*img.length);//0到1随机数不包括1
var e=img[index];
title.style.backgroundImage="url("+e+")";
generateBig();
}
}
