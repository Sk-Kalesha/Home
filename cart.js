
let cartData =  JSON.parse(localStorage.getItem("cartStorage"));

function removeFromCart(a){  
    cartData.splice(a, 1);
    localStorage.setItem("cartStorage", JSON.stringify(cartData));
    showCart(cartData);      
}

function clearCart(){
    localStorage.setItem("cartStorage", JSON.stringify([]));
    cartData = [];
    document.getElementById("countCart").innerHTML = cartData.length;
    document.getElementById("cartItem").innerHTML = `<p style = "font-size: 28px; color: #275C1D; text-align:center" >Your cart is empty <a href="home.html" style = "font-size: 27px; text-decoration: none; cursor: pointer;" >Click here for Home Page</a></p>`
    document.getElementById("total").innerHTML = "Rs.  "+0+".00";
}

function showCart(cartData){

    let j = 0, total = 0;
    document.getElementById("countCart").innerHTML = cartData.length;  

    if (cartData.length == 0){
        document.getElementById("cartItem").innerHTML = `<p style = "font-size: 28px; color: #275C1D; text-align:center" >Your cart is empty <a href="home.html" style = "font-size: 27px; text-decoration: none; cursor: pointer;" >Click here for Home Page</a></p>`;
        document.getElementById("total").innerHTML = "Rs.  "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cartData.map((item)=>
        {
            var {name, image, price} = item;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs. "+total+".00/-";
            return(
                `<div class="cart-item d-flex flex-row justify-content-between align-items-center shadow">
                    <div class="d-flex flex-row align-items-center">
                        <img class="cart-image" src=${image}>                    
                        <p class="ms-5 cart-product-name">${name}</p>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                        <p class="cart-product-price">Rs.  ${price}.00</p>`+
                        "<i class='fa-solid fa-trash ms-5 me-3' onclick='removeFromCart("+(j++)+")'> </i>"+
                    `</div>                    
                </div>`
            );
        }).join('');
    }
}

showCart(cartData);