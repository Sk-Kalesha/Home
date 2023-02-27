const breadsProducts = [
    {
        id: 0,
        name: "Whole wheat Burger buns", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/DSC02381_1_300x.jpg?v=1643366173",       
        price: 40,
        quantity: "Set of 2",
        stock: 5
    },
    {
        id: 1,
        name: "Whole Wheat Thin Crust Pizza Base",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/DSC02395_1_300x.jpg?v=1643366265",   
        price: 54,
        quantity: "Set of 3",
        stock: 5
    },
    {
        id: 2,
        name: "Masala Kulcha",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/DSC02388_1_300x.jpg?v=1643366223",        
        price: 41.25,
        quantity: "Set of 3",
        stock: 5
    },
    {
        id: 3,
        name: "Ginger Jaggery Cookie",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/GingerJaggeryCookie_1_300x.jpg?v=1640167570",         
        price: 125,
        quantity: "250g",
        stock: 5
    },
    {
        id: 4,
        name: "Ajwain Cookie",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/AjwainCookie_1_300x.jpg?v=1640167570",      
        price: 130,
        quantity: "250g",
        stock: 5
    },
    {
        id: 5,
        name: "Green Chilli & Curry Leaf Cookie",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/GreenChillyandCurryLeafCookie_300x.jpg?v=1640167570",       
        price: 125,
        quantity: "250g",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = breadsProducts.map((item) => {
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
        cartStorage.push(breadsProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(breadsProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

