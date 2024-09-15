

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







// --- funcion cuando se presione el boton del elemento(.productItem)
function addToCart(event) {

    // ----- aqui obtenemos la infomacion del producto al que se le presiono el boton "add cart" usando prompt event
    let button = event.target
    let selector = button.parentElement


    let tittle = selector.getElementsByClassName("product-tittle")[0]
    tittle = tittle.innerHTML;

    let price = selector.getElementsByClassName("product-price")[0].innerHTML
    // price = price.innerHTML.replace("$","").replace(",","").replace(".","") //se quiten los signos
    
    let img = selector.getElementsByClassName("product-img")[0].src
    // -------
    
    isOnfile(img,tittle,price) // validacion

    cartVisible() // animacion cuando se agrege carrito
       
}
// ---------



// ---- comprobar que un articulo no se repita en el carrito
let cartProductsNameArray
function isOnfile(img,tittle,price) {
    let container =  document.getElementsByClassName("cart-items-container")
    [0].childElementCount
    let itemsTittle = document.getElementsByClassName("cart-item-tittle")
    
    let itemInCart = new Array(container)
    for (let i = 0; i < container; i++) {

        itemInCart[i] = itemsTittle[i].innerHTML
        
    }
    
    if (itemInCart.includes(tittle) == true) {
        itemAmountCart(container, tittle,itemInCart,price) // el producto ya esta en el carrito y solo se suma su cantidad
    } else {
        addCartDiv(img,tittle,price,container)  // el producto no se encuentra en el carrito ENTONCES se añade al carrito
    }
    
    grantTotal()

}





// ---- añadir el articulo al carrito
function addCartDiv(img,tittle,price) {
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
                <div class="num-item">1</div>
                <div class="plus">+</div>
            </div>
        `
 
}
// --------



// -----funcion que se agrega cantidad del item ya existente en el carrito
function itemAmountCart(container,tittle,itemInCart) {
    let items = document.getElementsByClassName("num-item")
    itemsArray = new Array(container)

    for (let i = 0; i < container; i++) {
        parseInt(itemsArray[i] = items[i].innerHTML);
    }

    let findArray = itemInCart.indexOf(tittle)
    itemsArray[findArray]++
    items[findArray].innerHTML = itemsArray[findArray]


}

// -------




function grantTotal() {

    let cartItemsContainer = document.getElementsByClassName("cart-items-container")[0]
    let cartItemsContainerCount = cartItemsContainer.childElementCount
    let item = document.getElementsByClassName("num-item")
    let price = document.getElementsByClassName("cart-item-price")

    let grantTotalAmount = new Array(cartItemsContainer)

    for (let i = 0; i < cartItemsContainerCount; i++) {


        // console.log(parseInt(item[i].innerHTML));
        // console.log(parseInt(price[i].innerHTML.replace("$","").replace(",","")));

        grantTotalAmount[i] = parseInt(item[i].innerHTML) * parseInt(price[i].innerHTML.replace("$","").replace(",",""))
        
        console.log(grantTotalAmount[i]);
        
    }

    document.getElementById("grant-total").innerHTML = grantTotalAmount.reduce(myFunc);

    function myFunc(a, b) {
        return a + b;
    }



}







    

    
    

    
    
