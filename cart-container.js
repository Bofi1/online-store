

// ---- animacion al carrito
let cartContainer = document.getElementById("cartContainer")
let cartHiddenButton = document.getElementById("close-cart-icon")
let cartVisibleButton = document.getElementById("header-cart-icon")

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


//---- le damos funcionalidad al boton .product-addCartButton
let productAddCartButton = document.getElementsByClassName("product-addCartButton")

for (let i = 0; i < productAddCartButton.length; i++) {
    let button = productAddCartButton[i]
    button.addEventListener("click", addToCart)
}
// ---------------------



// --- tomamos la informacion del producto que se seleccione
function addToCart(event) {
    let button = event.target
    let selector = button.parentElement


    let tittle = selector.getElementsByClassName("product-tittle")[0]
    tittle = tittle.innerHTML;

    let price = selector.getElementsByClassName("product-price")[0]
    price = price.innerHTML.replace("$","").replace(",","").replace(".","")
    
    let img = selector.getElementsByClassName("product-img")[0].src
    
    ItemOnFile(tittle)

    addCartDiv(img,tittle,price)

    cartVisible()
}



// ---- añadimos el producto(.product-item) al carrito(.cart-items-container) como item(.cart-item)
function addCartDiv(img,tittle,price) {
    if (isItemOnFile == false) {
        let cartItemsContainer = document.getElementsByClassName("cart-items-container")[0]
        let div = document.createElement("div")
        div.classList.add("cart-item")
        let cartItem = cartItemsContainer.appendChild(div)
        cartItem.innerHTML = `
            <img src="${img}" alt="">
            <span class="cart-item-tittle">${tittle}</span>
            <span class="cart-item-price">${price}</span>
    
            <div class="cart-item-barra">
                <div class="minus">-</div>
                <div class="plus">+</div>
            </div>
        `
    } else {alert("repetido")}
}


// ---- comprobar que cart-item no se repita
let isItemOnFile = false
function ItemOnFile(tittle) {
    let cartItem = document.getElementsByClassName("cart-item")

    for (let i = 0; i < cartItem.length; i++) {
        let findName = cartItem[i].getElementsByClassName("cart-item-tittle")[0].innerHTML
        
        if (findName == tittle) {
            isItemOnFile = true
        } 
        
    }
    
}





