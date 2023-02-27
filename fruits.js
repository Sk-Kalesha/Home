const fruitsProducts = [
    {
        id: 0,
        name: "Papaya", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/papaya2_300x.jpg?v=1630054597",       
        price: 100,
        quantity: "1 Pc (800-1200g)",
        stock: 5
    },
    {
        id: 1,
        name: "Apple - Royal Gala",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/appleroyalgala_300x.jpg?v=1630054548",   
        price: 175,
        quantity: "3 Pc (450-500g)",
        stock: 5
    },
    {
        id: 2,
        name: "Pomegranate",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Pomegranate_300x.jpg?v=1630054607",        
        price: 180,
        quantity: "450-500g",
        stock: 5
    },
    {
        id: 3,
        name: "Pineapple - Peeled & Sliced",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Pineapple-cut_300x.jpg?v=1655801712",         
        price: 130,
        quantity: "200g",
        stock: 5
    },
    {
        id: 4,
        name: "Chiku (Sapota)",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Chiku_300x.jpg?v=1655801663",      
        price: 65,
        quantity: "500g",
        stock: 5
    },
    {
        id: 5,
        name: "Guava",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Guava_300x.jpg?v=1630054596",       
        price: 59,
        quantity: "450-500g",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = fruitsProducts.map((item) => {
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
        cartStorage.push(fruitsProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(fruitsProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

