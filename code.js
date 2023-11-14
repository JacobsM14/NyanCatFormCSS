function enviarPost()
{
    console.log(screen.width)
    if(screen.width > 1024){
        document.getElementById("contForm1").style.top = "-900px"
        document.getElementById("contForm1").style.animation = "subirCarta1"
        document.getElementById("contForm1").style.animationDuration = "2s"
        document.getElementById("contForm1").style.display = "none"
    
        document.getElementById("contForm2").style.animation = "subirCarta2"
        document.getElementById("contForm2").style.animationDuration = "2s"
        document.getElementById("contForm2").style.display = "block"
    }else if(screen.width <= 706){
        document.getElementById("contForm1").style.top = "-900px"
        document.getElementById("contForm1").style.animation = "subirCarta1_3"
        document.getElementById("contForm1").style.animationDuration = "2s"
        document.getElementById("contForm1").style.display = "none"

        document.getElementById("contForm2").style.animation = "subirCarta2_3"
        document.getElementById("contForm2").style.animationDuration = "2s"
        document.getElementById("contForm2").style.display = "block"
        console.log("hola")
    }else if(screen.width < 1024){
        document.getElementById("contForm1").style.top = "-900px"
        document.getElementById("contForm1").style.animation = "subirCarta1_2"
        document.getElementById("contForm1").style.animationDuration = "2s"
        document.getElementById("contForm1").style.display = "none"
    
        document.getElementById("contForm2").style.animation = "subirCarta2_2"
        document.getElementById("contForm2").style.animationDuration = "2s"
        document.getElementById("contForm2").style.display = "block"
    }
}