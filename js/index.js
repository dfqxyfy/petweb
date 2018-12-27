setCookie("username","admin");
setCookie("passwd","admin123");

function login(){
        var userName=document.getElementById("userName").value;
        var passwd=document.getElementById("passwd").value;

        if(userName==getCookie("username")&&passwd==getCookie("passwd")){
            location.href="page.html";
        }else{
            alert("用户名或者密码不对");
        }
};
