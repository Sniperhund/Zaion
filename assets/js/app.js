const btns = document.getElementsByClassName("faq-btn")

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", chooseFAQCategory)
}

function chooseFAQCategory(e) {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active")
    }

    e.target.classList.add("active")
}

const burger = document.getElementById("burger-menu")

function toggleBurgerMenu() {
    console.log(burger)

    burger.classList.toggle("burger")
}
