let signUpBtn = document.querySelector("form")
let signUpContainer = document.querySelector(".sign-page")
let userName = document.querySelector("form input.text")
let email= document.querySelector("form input.email")
let password = document.querySelector("form input.password")
let Repassword = document.querySelector("form input.repassword")
let formdiv = document.querySelectorAll("form div")
let passwordIcon = document.querySelectorAll(".sign-page .container .left-section form div.password i");
passwordIcon[0].onclick = () => {
    if (password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}
passwordIcon[1].onclick = () => {
    if (Repassword.type === "password") {
        Repassword.type = "text"
    } else {
        Repassword.type = "password"
    }
}
signUpBtn.onsubmit = function() {
    if (userName.value !== ""  && email.value !== "" && password.value !== "" && Repassword.value !== "" ) {
        if (password.value !== Repassword.value) {
            return false
        }
        let overlay = document.createElement("div")
        overlay.className = "overlay"
        signUpContainer.appendChild(overlay)
        let popupBox = document.createElement("div")
        popupBox.className = "popup-box"
        overlay.appendChild(popupBox)
        let popupimg = document.createElement("img")
        popupimg.src = "./user.gif"
        popupBox.appendChild(popupimg)
        let popupBoxtext = document.createElement("span")
        popupBoxtext.className = "text"
        popupBoxtext.innerHTML = ` Thank You ${userName.value} For Your Registration !`
        popupBox.appendChild(popupBoxtext)
        let popupBoxtext2 = document.createElement("p")
        popupBoxtext2.innerHTML ="Keep In Touch"
        popupBox.appendChild(popupBoxtext2)
        signUpContainer.onclick = function() {
            overlay.classList.add("hide")
        }
        userName.value = ""
        email.value = ""
        password.value = ""
        Repassword.value = ""
        return false
        
    } else {
        return false
    }
}

let bullets = document.querySelector(".bullets")
let bulletsSpans = document.querySelectorAll(".bullets span")
let img = document.querySelector(".sign-page .container .right-section img")
let imgArr = ["./Graphic-Web-Design-PNG-Transparent-Image.png" , "./web-design-5482225-4569698.png","./website-layout-development-5197164-4340833.webp"]

bulletsSpans.forEach((bs) => {
    bs.addEventListener("click" , removeActive )
    bs.addEventListener("click" , changeImg )
})

function changeImg() {
    bulletsSpans.forEach((bs) => {
        if (this.dataset.num === "0") {
            img.src = imgArr[0]
        }
        if (this.dataset.num === "1") {
            img.src = imgArr[1]
        }
        if (this.dataset.num === "2") {
            img.src = imgArr[2]
        }
    })
}

function removeActive() {
    bulletsSpans.forEach((bs) => {
        bs.classList.remove("active")
        this.classList.add("active")
    })
}








