let x = document.querySelector(".header__navtoggle");
let navLinks = document.querySelector(".header__navlinks")

x.onclick = function () {
    x.classList.toggle("header__navchange");
    navLinks.classList.toggle("linkchange")
}

let commentForm = document.querySelector(".footer__comment")

commentForm.onsubmit = function (event) {
    event.preventDefault()
}