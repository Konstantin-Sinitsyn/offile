const   screen = document.querySelector(".screen"),
        page = document.querySelector(".page"),
        banner = document.querySelector(".banner"),
        buttonClose = document.querySelector(".banner__close")

window.addEventListener('online', (event) => {
    screen.classList.remove("active")
});

window.addEventListener('offline', (event) => {
    screen.classList.add("active")
});

buttonClose.addEventListener("click", (event) => {
    banner.style.display = "none";
})

