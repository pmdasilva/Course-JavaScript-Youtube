let cartQuantity = 0;

function showCartQuantity(){
    console.log(`Cart Quantity: ${cartQuantity}`);
}

function addToCart(){
    cartQuantity+= 1;
    console.log(`Item added to cart: ${cartQuantity}`);
}

function addToCartPlusTwo(){
    cartQuantity += 2;
    console.log(`Item added to cart: ${cartQuantity}`);
}

function addToCartPlusThree(){
    cartQuantity += 3;
    console.log(`Item added to cart: ${cartQuantity}`);
}


function resetCart(){
    cartQuantity = 0;
    console.log(`Cart reset: ${cartQuantity}`);
}