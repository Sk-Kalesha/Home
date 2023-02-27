const gheeProducts = [
    {
        id: 0,
        name: "A2 Gir Cow Ghee", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/GheeBottle1_300x.jpg?v=1666177520",       
        price: 1299,
        quantity: "500ml",
        stock: 5
    },
    {
        id: 1,
        name: "A1 Gir Cow Ghee", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmsJ5vgOmmPE7eOeoOdVq7HnANMrz3E-zKw&usqp=CAU",       
        price: 1499,
        quantity: "500ml",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = gheeProducts.map((item) => {
    var {name, image, price, quantity} = item;
    return(
        `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
            <img class="item-image" src="${image}">
            <p class="item-text-top" >${name}</p>
            <p class="item-text-middle" >Rs. ${price}</p>                        
            <p class="item-text-bottom" >${quantity}</p>`+
            "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
        `</div>`
        )
        
}).join("")


var cartData = localStorage.getItem("cartStorage");

let cartStorage;

if (cartData === null) {
    cartStorage = [];
    document.getElementById("countCart").innerHTML = 0;
}else{
    cartStorage = JSON.parse(cartData);
    document.getElementById("countCart").innerHTML = cartStorage.length;
}

function addToCart(a){       
    if (cartData === null)  {        
        cartStorage = [];
        cartStorage.push(gheeProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(gheeProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

