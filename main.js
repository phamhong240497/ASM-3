let btnView = document.querySelectorAll(".btn-view");
let viewDetail = document.querySelectorAll(".detail");
// console.log(btnView, viewDetail);
for(let i = 0; i < btnView.length ; i++){
    btnView[i].addEventListener("click",function(){
        if (btnView[i].innerHTML == 'View more') {
            viewDetail[i].style.display = 'block';
            btnView[i].innerHTML = 'View less';
            
        }
        else {
            viewDetail[i].style.display = 'none';
            btnView[i].innerHTML = 'View more';
        }
    })
}

function validate(){
     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     let email = document.getElementById('e-mail').value;
    //  console.log(regex.test(email));
     if (regex.test(email)){
         document.querySelector(".info-form").style.display = 'none';
         document.querySelector(".info-block").style.display = 'block';
     }else{
         document.querySelector(".help-block").innerHTML = 'Email không hợp lệ';
     }
}