const screen = document.querySelector(".screen"),
      page = document.querySelector(".page")


window.addEventListener('online', (event) => {
    screen.classList.remove("active")
});

window.addEventListener('offline', (event) => {
    screen.classList.add("active")
});

