

// ---- cart-container
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
//  ----------------


let productAddCartButton = document.getElementsByClassName("product-addCartButton")

for (let i = 0; i < productAddCartButton.length; i++) {
    let button = productAddCartButton[i]
    button.addEventListener("click", addToCart)
}

function addToCart(event) {
    let button = event.target
    let selector = button.parentElement
    let tittle = selector.getElementsByClassName("product-tittle")[0]
    console.log(tittle.innerHTML);
    let price = selector.getElementsByClassName("product-price")[0]
    price = price.innerHTML.replace("$","").replace(",","").replace(".","")
    console.log(price);
    let img = selector.getElementsByClassName("product-img")[0].src
    console.log(img);
    
    
    
}



