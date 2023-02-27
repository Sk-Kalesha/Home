const festGiftProducts = [
    {
        id: 0,
        name: "Indulgence hamper (Large)", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/WhatsAppImage2022-10-18at6.57.17PM_300x.jpg?v=1666105177",       
        price: 1999,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 1,
        name: "Exotic fruits selection",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/EXOTIC_300x.png?v=1665659193",   
        price: 1299,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 2,
        name: "Favourite fruits selection",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/favfruitscollection_300x.png?v=1665659161",        
        price: 749,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 3,
        name: "Indulgence hamper (Small)",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Indulgence_300x.png?v=1665659220",         
        price: 1399,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 4,
        name: "Dry fruits classic collection (Large)",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/dryfruitslarge_300x.png?v=1665065369",      
        price: 1099,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 5,
        name: "Dry fruits classic collection (Small)",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/dryfruitssmall_300x.png?v=1665064277",       
        price: 699,
        quantity: "1 Pack",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = festGiftProducts.map((item) => {
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
        cartStorage.push(festGiftProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(festGiftProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

