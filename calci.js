function display(num){
    document.getElementById("i").value+=num;
    
    
}
function compute(){
   let x= document.getElementById("i").value;
   let y=eval(x)
document.getElementById("i").value=y;
}
function clearee(){
    
    document.getElementById("i").value="";
}
function del(){
    let x=document.getElementById("i").value;
    y=x.substr(0,x.length-1)
    
    document.getElementById("i").value=y
}