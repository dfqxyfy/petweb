setCookie("username","admin");
setCookie("passwd","admin123");


function login(){
        var userName=document.getElementById("userName").value;
        var passwd=document.getElementById("passwd").value;

        //兼容local,不能设置cookie的场景
        var storeUser=getCookie("username");
        var storePasswd=getCookie("passwd");
        if(storeUser==null){
            storeUser="admin";
        }
        if(storePasswd==null){
            storePasswd="admin123";
        }

        if(userName==storeUser&&passwd==storePasswd){
            location.href="main.html";
        }else{
            alert("用户名或者密码不对");
        }
};
