console.log ('fuck');
function tentuoi(){
    console.log ('Thanh');
    console.log ('94');
    var a=6;
    var b=8;
    var c=a+b;
    console.log(c);
    var d= '2';
    a = 9;
    f=a+b;
    console.log(f);
    g = '9';
    n = g+f;
    t = (g+g+f)/a;
    console.log(n);
    console.log(t);
}
function doiThanhLop(Lop){
document.getElementById("chu").innerHTML = "aptech php" + Lop;
document.getElementById("chu").style.backgroundColor='red';
document.getElementById("chu").style.color='yellow';
}

function tatDen(){
    document.getElementById("anh").src ='https://www.w3schools.com/js/pic_bulboff.gif';
}
function moDen(){
    document.getElementById("anh").src ='https://www.w3schools.com/js/pic_bulbon.gif';
}
function motNut(){
  if(document.getElementById("anh").src == 'https://www.w3schools.com/js/pic_bulbon.gif'){
      document.getElementById("anh").src='https://www.w3schools.com/js/pic_bulboff.gif';
  }
  else{
    document.getElementById("anh").src='https://www.w3schools.com/js/pic_bulbon.gif';
}
  }
function motNutNut(){
    var x=document.getElementById("anh").src;
    var ketQua=x.includes('https://www.w3schools.com/js/pic_bulbon.gif');
    if(ketQua){
      document.getElementById("anh").src='https://www.w3schools.com/js/pic_bulboff.gif';
  }
  else{
    document.getElementById("anh").src='https://www.w3schools.com/js/pic_bulbon.gif';
}
}