let changeTheme = ()=>{
    let obj = document.getElementById("theme")
    let theme = obj.value
    let body = document.getElementById("main")
    if(theme=="darkMode"){
       body.className = "darkMode"
    }
    else{
        body.className = "lightmode"
    }
    console.log(body.className)
}