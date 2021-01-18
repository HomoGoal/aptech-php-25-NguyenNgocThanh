var danhsach=["quang","huy","tai","thanh"];
function bamNutNay(){
document.getElementById("chuchu").innerHTML= danhsach[0];
}

function inThuCong(){
     var text= danhsach[0]+'<br>';
    text+= danhsach[1]+'<br>';
    text+= danhsach[2]+ '<br>';
    text+= danhsach[3]+ '<br>';
    document.getElementById("chuchu").innerHTML=text;
}
function inHet(){
    document.getElementById("chuchu").innerHTML=danhsach
}
function inBang(){
    var text='';
    for (var i=0;i<danhsach.length;i++){
        text+='<tr>'+'<td>'+(i+1)+'</td>'+'<td>'+danhsach[i]+'</td>'+'</tr>';
    }
    document.getElementById("bangThuCong").innerHTML=text;
    
}
function inDep(){
    var sanPham=[ ['iPhone', 10, 'my', 'nhap khau'],
    ['Galaxy', 12, 'han quoc', 'trong nuoc'],
    ['xiaomi', 9, 'trung quoc', 'nhap khau'],
    ['huawei', 15, 'trung quoc', 'buon lau'],];
    var text='';
    for(var i =0;i<sanPham.length;i++){
        text+='<tr>'
        text+= '<td>'+ (i+1)+'</td>';
        for(var j=0;j<sanPham[i].length;j++){
            text+='<td>'+ sanPham[i][j] + '</td>';
        }
        text+='</td>'
    }
    document.getElementById('bangDep').innerHTML=text;
}

function taoNut(){
    var btn =document.createElement("BUTTON");
    btn.innerHTML="nutmoi";
    document.body.appendChild(btn);
}