function show(){  
var docTop = $(document).scrollTop();  //获取滚动条位置docTop>=$(document).height()-$(window).height()在底部
var Media = document.getElementById("video"); 
if($("ul li").first().attr('class')=="active")//attr() 方法设置或返回被选元素的属性值。
    {Media.play();
        $("#title").css("background","");
        $(".zc").hide();
    }
    else
        { Media.pause();
            $("#title").css("background","rgba(0,162,230,0.8)");}
        }
        setInterval(show,1000)

        function play(){
            if($("ul li").eq(1).attr('class')=="active"){
                $("#sec1").show(1000);
                $("#sec2").hide();
            }
            else if($("ul li").eq(2).attr('class')=="active"){
                $("#sec2").fadeIn(1000);
                $("#sec1").hide();
            }
            else if($("ul li").eq(3).attr('class')=="active"){
                $("#login").animate({top:"380px"}, 800);
                $("#sec1").hide();
                $("#sec2").hide();
            }
        }
        var t=setInterval(play,100);