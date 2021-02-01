function nutTao(){
    var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var duLieuTho = this.responseText;
                var duLieuChinh =JSON.parse(duLieuTho);
                console.log(duLieuChinh.users);
            }
    
        var bangDep= document.getElementById('bang');
        for(var i=0;i<duLieuChinh.users.length;i++){
            var tr=document.createElement('tr');
            
                var td=document.getElementById('td');
                td.innerHTML=duLieuChinh.users.[i].id;
                td.innerHTML=duLieuChinh.users.[i].name;
                td.innerHTML=duLieuChinh.users.[i].email;
                tr=appendChild(td);
            }
            bangDep.appendChild(tr);
        xhttp.open('GET','https://namcoi.com/du-an/aptech-php-laravel-crud-user/public/api/users',true);
        xhttp.send();}
