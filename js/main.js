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
