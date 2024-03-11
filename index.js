var istatus = document.querySelector("h5")


var btn = document.querySelector("#add");

var check = 0;

btn.addEventListener('click', function(){
    if(check == 0){
        check = 1;
        istatus.innerHTML = "Requested"
        btn.innerHTML = "Unfollow";
        istatus.style.color = "green"

    }else{
        check = 0;
        istatus.innerHTML = "Stranger"
        btn.innerHTML = "Follow"
        istatus.style.color = "red"
    }
})

