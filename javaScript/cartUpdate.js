
function cartUpdate() {
    let cartItemsContainer = document.getElementsByClassName("cart-items-container")[0]
    let cartItemsContainerCount = cartItemsContainer.childElementCount
    console.log(cartItemsContainerCount);

    let items = document.getElementsByClassName("num-item")    
    
    let itemsPrice = document.getElementsByClassName("cart-item-price")
    // console.log(parseInt(itemsPrice[0].innerHTML.replace(",","").replace("$","")));
    
    let itemsTotalPrice = new Array(cartItemsContainerCount)
    for (let i = 0; i < cartItemsContainerCount; i++) {
        
        let count = items[i].innerHTML
        let price = parseInt(itemsPrice[0].innerHTML.replace(",","").replace("$",""))

        itemsTotalPrice[i]= count * price
        console.log(itemsTotalPrice[i]);
        
        
    }
    
}

cartUpdate()
