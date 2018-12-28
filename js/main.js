var spread=false;
function hideDiv(obj) {
    var ele = obj.parentNode.parentNode.children[1];
    var read = "阅读全文 »";
    if (spread) {
        ele.setAttribute("style", "display:none");
    }else {
        read = "隐藏 «"
        ele.setAttribute("style","");
    }
    obj.innerText=read;
    spread=!spread;
 }

 //项目6
 var objfontsize;
 function big(obj){
     objfontsize=obj.style.fontSize;
    obj.style.fontSize = 40 + "px";
    obj.style.color='#FF0000';
 }
function recover(obj){
    obj.style.fontSize = "";
    obj.style.color="";
}

//项目7

var former=0;
var opt = null;
var after=0;
var needClear=false;
window.onload = function(){
    initStatus();
    var btns=document.getElementById('computer');
    for(i=0;i<btns.childElementCount;i++){
        var childNodes = btns.children[i].childNodes;
        for(j=0;j<childNodes.length;j++){
            childNodes[j].addEventListener("click",function(){
                //document.getElementById("cptResult").value = this.value;
                var num=this.value;
                if(num=="clear"){
                    former=0;
                    opt=null;
                    after=0;
                    needClear=false;
                    document.getElementById("cptResult").value='';
                    return;
                }
                switch(num){
                    case '+':
                    case '-':
                    case '*':
                    case '/':
                        former=document.getElementById("cptResult").value;
                        opt=num;
                        needClear=true;
                    break;
                    case '=':
                        after=document.getElementById("cptResult").value;
                        var myres=0;
                        switch(opt){
                            case '+':
                                myres=parseInt(former) + parseInt(after);
                                break;
                            case '-':
                                myres=former - after;
                                break;
                            case '*':
                                myres=former * after;
                                break;
                            case '/':
                                myres=former / after;
                                break;
                        }
                        document.getElementById("cptResult").value=myres;
                        break;
                    default:
                        if(needClear){
                            document.getElementById("cptResult").value='';
                            needClear=false;
                        }
                        document.getElementById("cptResult").value =document.getElementById("cptResult").value+""+num;
                        if(opt==null){
                            former=document.getElementById("cptResult").value;
                        }
                }
            });
        }
    }
}

var spandFlag=true;

function spand(){
    spandFlag=!spandFlag;
    if(spandFlag){
        document.getElementById("computer").setAttribute("style","display:none");
    }else{
        document.getElementById("computer").setAttribute("style","");
    }
}

//项目二
function initStatus(){
    var userName=getCookie("userName");
    window.defaultStatus=userName+" 登陆了";

    autoPlay();
}

function getViewportSize(w){
    w= w || window;
    //除了IE8以及更早版本外，其它浏览器都能用
    if(w.innerWidth != null){ return { w:w.innerWidth, h:w.innerHeight } };

    //对标准模式下的IE或任何浏览器
    var d=w.document;
    if(document.compatMode == "CSS1Compat"){
        return { w:d.documentElement.clientWidth,
            h:d.documentElement.clientHeight }
    }

    //对怪异模式下的浏览器
    return { w:d.body.clientWidth , h:d.body.clientHeight }

}
function displayView() {
    var obj=getViewportSize(this.window);
    alert("宽度："+obj.w +"\r\n"+"高度："+obj.h)
}

function autoPlay(){
    var myAuto = document.getElementById('myaudio');

    var duration = myAuto.duration;
    duration=parseInt(duration);
    document.getElementById("totalDur").innerText="/ "+duration;
    //alert(duration);
    myAuto.play();
}

function ppp() {
    console.log(playnum);
    var myAuto = document.getElementById('myaudio');
    var duration = myAuto.duration;
    playnum+=1;
    if(duration==0){
        duration=1;
    }
    duration=parseInt(duration);
    playnum=playnum%duration;
    document.getElementById("playnum").value=playnum;
}

var playnum=0;
var timer = setInterval(ppp, 1000);

var playflag=true;
function mmplay(){
    playflag=!playflag;

    var myAuto = document.getElementById('myaudio');
    if(playflag){
        timer=window.setInterval(ppp, 1000);
        myAuto.play();
    }else{
        window.clearInterval(timer);
        myAuto.pause();
    }
}

