function rec(){
    var aa=document.getElementById("cc");
    aa.value=parseInt(aa.value)+1;//字符转换成整型
}
function dun(){
    var cc=document.getElementById("cc");
    if(parseInt(cc.value)<=1)
    	{alert("数值不能小于1");}
    else
	{cc.value=parseInt(cc.value)-1;}//字符转换成整型
}