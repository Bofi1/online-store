
let cartContainer = document.getElementById("cartContainer")
let cartHiddenButton = document.getElementById("close-cart-icon")
let cartVisibleButton = document.getElementById("header-cart-icon")
// let cartStatus = true

cartHiddenButton.addEventListener("click", cartHidden)
cartVisibleButton.addEventListener("click", cartVisible)


function cartHidden() {
    cartContainer.style.display = "absolute"
    cartContainer.style.transition = "ease 0.3s"
    cartContainer.style.right = "-1000px"
}

function cartVisible() {
    cartContainer.style.display = "absolute"
    cartContainer.style.transition = "ease 0.3s"
    cartContainer.style.right = "0px"
}


