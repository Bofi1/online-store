

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


// plus()

// minus()




//---- le damos funcionalidad al boton .product-addCartButton
let productAddCartButton = document.getElementsByClassName("product-addCartButton")

for (let i = 0; i < productAddCartButton.length; i++) {
    let button = productAddCartButton[i]
    button.addEventListener("click", addToCart)
}
// ---------------------


// ----- funcion de sumar y restar
function plus() {
    let plusButton = document.getElementsByClassName("plus")

    for (let i = 0; i < plusButton.length; i++) {
        let button = plusButton[i]
        button.addEventListener("click", plusAction)
    }
}


function minus() {
    let minusButton = document.getElementsByClassName("minus")

    for (let i = 0; i < minusButton.length; i++) {
        let button = minusButton[i]
        button.addEventListener("click", minusAction)
    }
}
// -------------









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


    itemOnfile(img,tittle,price)
    
    // addCartDiv(img,tittle,price) // validacion

    cartVisible() // animacion cuando se agrege carrito

       
}
// ---------





// ---- funcion que añade el articulo al carrito
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
                <div id="minus" class="minus fa-solid fa-trash"></div>
                <div class="num-item">1</div>
                <div class="plus fa-solid fa-plus"></div>
            </div>
        `
        cartUpdate()
}
// --------





// toma toda la info y la pone en el total
function grantTotal() {

    let cartItemsContainer = document.getElementsByClassName("cart-items-container")[0]
    let cartItemsContainerCount = cartItemsContainer.childElementCount
    let item = document.getElementsByClassName("num-item")
    let price = document.getElementsByClassName("cart-item-price")

    let grantTotalAmount = new Array(cartItemsContainerCount)


    if (cartItemsContainerCount == 0) {
        document.getElementById("grant-total").innerHTML = 0 
    } else{

        for (let i = 0; i < cartItemsContainerCount; i++) {

            grantTotalAmount[i] = parseInt(item[i].innerHTML) * parseInt(price[i].innerHTML.replace("$","").replace(",","")) // se multiplica la cantidad + el precio del item y se almacena en un array
                    
        }

            // suma el valor de todas las variable del array y lo devuelve en un return
        document.getElementById("grant-total").innerHTML = grantTotalAmount.reduce(myFunc);

        function myFunc(a, b) {
            return a + b;
        }
    }
    
}

// checamos si el titutlo del producto seleccionado (usando event) esta en el carrito
function itemOnfile(img,tittle,price) {
    let cartCount = document.getElementsByClassName("cart-items-container")[0].childElementCount
    console.log(cartCount);

    let itemArray = new Array (cartCount)
    console.log(itemArray);
    
    for (let i = 0; i < cartCount; i++) {
        let item = document.getElementsByClassName("cart-item-tittle")
        itemArray[i] = item[i].innerHTML
        console.log(itemArray[i]);
    }

    console.log(tittle);
    
    // si el titulo se encuentra en el array del carrito, se agrega SOLO EL NUMERO
    if (itemArray.includes(tittle) == true) {
        // console.log("si esta");
        addNumCartDiv(tittle, itemArray)
    
    // si titulo no se incluye en el array del carrito, SE AGREGA AL CARRITO
    } else{ 
        // console.log("no esta");
        addCartDiv(img,tittle,price)
        
    }
    cartUpdate()
}

// cartUpdate()


// funcionalidad al boton +
function plusAction(event) {
     
    let item = event.target.parentElement
    // console.log(item);
    let itemCount = parseInt(item.getElementsByClassName("num-item")[0].innerHTML)
    let itemHTML = item.getElementsByClassName("num-item")[0]
    itemHTML.innerHTML = itemCount++
    // console.log(itemCount);

    let itemCount2 = event.target.parentElement
    // console.log(itemCount2);

    itemCount2.getElementsByClassName("num-item")[0].innerHTML = itemCount

    cartUpdate()
                            
}

// funcionalidad al boton -
function minusAction(event) {
    
        let item = event.target.parentElement
        // console.log(item);
        let itemCount = parseInt(item.getElementsByClassName("num-item")[0].innerHTML)
        let itemHTML = item.getElementsByClassName("num-item")[0]
    
        if (itemHTML.innerHTML == 1) {
            let minusIcon = document.getElementsByClassName("minus")[0].innerHTML
            console.log(minusIcon);
            // console.log(document.getElementById("minus").className = "minus fa-solid fa-trash");
            item.parentElement.remove()
            
        } else{       
            itemHTML.innerHTML = itemCount--
            let itemCount2 = event.target.parentElement
            itemCount2.getElementsByClassName("num-item")[0].innerHTML = itemCount
            // console.log(document.getElementById("minus").className = "minus fa-solid fa-minus");
            
        }

    cartUpdate()
                            
}

//funcion que añade numero a la suma del item
function addNumCartDiv(tittle,itemArray) {
    let position = itemArray.indexOf(tittle)
    // console.log(position);
    let itemSelected = document.getElementsByClassName("num-item")[position]
    // console.log(itemSelected);
    itemSelected = itemSelected.innerHTML++
}


// funcion que hace que minus tengo icono de trash o minus
function trashMinus() {
    let cartItemsContainer = document.getElementsByClassName("cart-items-container")[0]
    let cartItemsContainerCount = cartItemsContainer.childElementCount

    for (let i = 0; i < cartItemsContainerCount; i++) {

        if (document.getElementsByClassName("num-item")[i].innerHTML == 1) {
            document.getElementsByClassName("minus")[i].className = "minus fa-solid fa-trash"
        } else {
            document.getElementsByClassName("minus")[i].className = "minus fa-solid fa-minus"
        }        
    }
}


function cartUpdate() {
    minus()

    plus()

    trashMinus()

    grantTotal()

}



    

        

    

    
    






    

    
    

    
    
