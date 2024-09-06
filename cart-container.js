alert()

let cartButton = document.getElementById("cart-button")
let cartStatus = true
cartButton.addEventListener("click", cartDisplay)
console.log(cartButton);

function cartDisplay() {
    if (cartStatus) {
        alert('esconder')
        cartStatus = false
    } else {
        alert('mostrar')
        cartStatus = true
    }
}