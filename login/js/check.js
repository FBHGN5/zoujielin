$(function() {
function rec(){
   $("#box").animate({right:"180px"},800);
  }
  rec();
});
window.onload=function(){
  var zc=document.getElementById("zc");
  zc.onclick=function(){
    window.location.href="url";
  }
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

  var a=Math.floor(Math.random()*ran.length);
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

  check.value="登陆中..";

if(text.value.toLowerCase()==title.innerHTML.toLowerCase())//不区分大小写
{
/*window.document.f.action="list.html";
window.document.f.submit();*/
doFind();

}
else if(text.value=="")
{
  alert("验证码为空");
  check.value="登陆";
}
else{
  alert("验证码错误");
  generateBig();
  check.value="登陆";
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
function doFind(){

$.ajax({
cache: false,
type: "POST",
url:"ajax.jsp", //把表单数据发送到ajax.jsp
data:$('#fm').serialize(), //要发送的是ajaxFrm表单中的数据
async: false,
error: function(request) {
alert("发送请求失败！");
},
success: function(data) {
/*$("#ajaxDiv").html(data);*/ //将返回的结果显示到ajaxDiv中
window.location.href=url;
}
});
}
}
