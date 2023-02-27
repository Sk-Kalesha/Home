const freshlyProducts = [
    {
        id: 0,
        name: "Carrot - Brunoise (Chopped)", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/carrotchop_300x.jpg?v=1630055897",       
        price: 71,
        quantity: "300gm",
        stock: 5
    },
    {
        id: 1,
        name: "Broccoli - Florets",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Broccoli--Cut_300x.jpg?v=1655801979",   
        price: 90,
        quantity: "200gm",
        stock: 5
    },
    {
        id: 2,
        name: "Bell Peppers - Julienned",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Ragi_300x.jpg?v=1667905684",        
        price: 206,
        quantity: "300gm",
        stock: 5
    },
    {
        id: 3,
        name: "Cauliflower - Florets",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/2_8d4c9c4c-d9b7-4a54-b105-4df95226153c_300x.png?v=1657530429",         
        price: 40,
        quantity: "200gm",
        stock: 5
    },
    {
        id: 4,
        name: "Bitter Gourd - Cut",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Bitter-Gourd-cut_300x.jpg?v=1655801907",      
        price: 60,
        quantity: "300gm",
        stock: 5
    },
    {
        id: 5,
        name: "Bottle Gourd - Cut",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/bottlegourddiced_895b6697-9075-4666-a9e6-c1cdfd2f6cf2_300x.jpg?v=1634573596",       
        price: 38,
        quantity: "300gm",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = freshlyProducts.map((item) => {
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
        cartStorage.push(freshlyProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(freshlyProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

