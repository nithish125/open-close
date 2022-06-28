let button=document.getElementById("submi");
button.addEventListener("click",display);
function display(){
    let secle=document.getElementById("selec").value; 
    console.log(secle)
    if(secle=='open'){
document.getElementById("display1").innerHTML="we are open"; 
    }
    else if(secle=='close'){
        document.getElementById("display1").innerHTML="we  are closed"
    }
}
