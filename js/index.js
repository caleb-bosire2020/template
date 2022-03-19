// getting the button

const togglebtn = document.querySelector(".toggle .bar");

togglebtn.addEventListener("click", function(){

    const divHide = document.querySelector(".navigation");
    
    if(divHide.style.display == "none"){

        divHide.style.display = "block";
        document.querySelector(".toggle .close").style.display = "block";
        togglebtn.style.display = "none";

    }else{
        document.querySelector(".toggle .close").style.display = "none";
        divHide.style.display = "none";
        
    }
   
})

const close = document.querySelector(".toggle .close");
close.addEventListener("click", function(){
    const divHide = document.querySelector(".navigation");
    if(divHide.style.display == "block"){

        divHide.style.display = "none";
        close.style.display = "none";
        togglebtn.style.display = "block";
    }
})

