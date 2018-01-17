$(document).ready(function(){
  function rec(){
    $("#user").fadeIn(1000);
    $("#pic").animate({left:"350px"});
  }
  rec();
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

//  alert(title.innerHTML);
//alert(text.value);
if(text.value.toLowerCase()==title.innerHTML.toLowerCase())//不区分大小写
{
  alert("输入验证码正确！！！！");
  check.value="登陆";
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
}
