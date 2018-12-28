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

var spandFlag=false;
function spand(){
    if(spandFlag){
        document.getElementById("computer").setAttribute("style","display:none");
    }else{
        document.getElementById("computer").setAttribute("style","");
    }
    spandFlag=!spandFlag;
}