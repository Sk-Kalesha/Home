const oilsProducts = [
    {
        id: 0,
        name: "Tomato & Garlic Salsa", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Tomato-_-garlic_300x.png?v=1657893028",       
        price: 99,
        quantity: "200g",
        stock: 5
    },
    {
        id: 1,
        name: "Cold-Pressed Sesame Oil",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Cold-Pressed-Sesame-Oil-500ml_300x.jpg?v=1649745320",   
        price: 379,
        quantity: "500ml",
        stock: 5
    },
    {
        id: 2,
        name: "Extra Virgin Olive Oil", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Extra-Virgin-Olive-Oil-500ml_1_300x.jpg?v=1650005502",       
        price: 419,
        quantity: "500ml",
        stock: 5
    },
    {
        id: 3,
        name: "Cold-Pressed Coconut Oil",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Cold-Pressed-Coconut-Oil-500ml_300x.jpg?v=1649745288",   
        price: 269,
        quantity: "500ml",
        stock: 5
    },
    {
        id: 4,
        name: "Garlic Infused Olive Oil",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Garlicp4_300x.png?v=1649055936",   
        price: 199,
        quantity: "250ml",
        stock: 5
    },
    {
        id: 5,
        name: "Oregano Infused Olive Oil",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Oreganop2_300x.png?v=1649055951",   
        price: 199,
        quantity: "250ml",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = oilsProducts.map((item) => {
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
        cartStorage.push(oilsProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(oilsProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

