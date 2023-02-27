const dealsProducts = [
    {
        id: 0,
        name: "Pineapple", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Pineapple_300x.jpg?v=1630054784",       
        price: 99,
        quantity: "1 Pc (600-800gm)",
        stock: 5
    },
    {
        id: 1,
        name: "Brinjal long",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/brinjallong_bc7a9296-8052-486c-8afa-f0e29057adea_300x.jpg?v=1630055770",   
        price: 39,
        quantity: "450-550gm",
        stock: 5
    },
    {
        id: 2,
        name: "Pineapple - Peeled & Sliced",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Pineapple-cut_300x.jpg?v=1655801712",        
        price: 130,
        quantity: "200gm",
        stock: 5
    },
    {
        id: 3,
        name: "Leafy Lettuce",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/lettuceleafy_300x.jpg?v=1630054359",         
        price: 50,
        quantity: "150gm",
        stock: 5
    },
    {
        id: 4,
        name: "Black Grapes - Seeded",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Bangalorebluegrapes_9a4f5dc4-c11f-4bb7-802a-834bd86652c6_300x.jpg?v=1653647503",      
        price: 99,
        quantity: "500gm",
        stock: 5
    },
    {
        id: 5,
        name: "Cherry Tomato",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/tomatocherry2_c6739ecc-4551-44f7-8761-3edde9f93ec8_300x.jpg?v=1630054345",       
        price: 75,
        quantity: "250gm",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = dealsProducts.map((item) => {
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
        cartStorage.push(dealsProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(dealsProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

