let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

let search = document.getElementsByClassName("search")[0]
search.addEventListener("click",()=>{
    if(search.style.bottom == "50px"){
        search.style.bottom = "-655px"
    }
    else{
        search.style.bottom = "50px"
    }
})
