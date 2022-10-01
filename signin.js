function openWindow(){
    window.open("signup.html");
}
function userAunthication(){
    let dataArr = JSON.parse(localStorage.getItem("signInData")) || [];
    let emailId = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;
    let dataIndex = dataArr.length;
    dataArr.forEach(function(el,index){
        if( emailId == el.emailId && password == el.password){
             alert("Login Successful");
            //  console.log("login");

        }
        else{
            alert("Incorrect Email or Password");
            console.log("login failed")
            // console.log(el.emailId,el.password)
        }
    });
    // for(let i = 0; i < dataArr.length; i++){
    //     if(emailId == i.emailId && password == i.name){
    //         alert("Login Successful");
    //     }
    //     else if( i == dataArr.length-1){
    //         alert("Incorrect Email or Password");
    //     }
    //     else{
    //         continue;
    //     }
    // }
}