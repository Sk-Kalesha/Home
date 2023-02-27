const leafyProducts = [
    {
        id: 0,
        name: "Palak (Root-cut)", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Palak-Root-cut_300x.jpg?v=1660817023",       
        price: 35,
        quantity: "150g",
        stock: 5
    },
    {
        id: 1,
        name: "Coriander (Root cut)",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Coriender-root-cut_300x.jpg?v=1660815340",   
        price: 25,
        quantity: "100g",
        stock: 5
    },
    {
        id: 2,
        name: "Methi (Root-cut)",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/methi_300x.jpg?v=1630054350",        
        price: 35,
        quantity: "100g",
        stock: 5
    },
    {
        id: 3,
        name: "Green Amaranthus (Root-cut)",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/amaranthusgreen_300x.jpg?v=1630054280",         
        price: 35,
        quantity: "150g",
        stock: 5
    },
    {
        id: 4,
        name: "Leafy Lettuce",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/lettuceleafy_300x.jpg?v=1630054359",      
        price: 50,
        quantity: "150g",
        stock: 5
    },
    {
        id: 5,
        name: "Red Amaranthus (Root-cut)",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/amaranthred_300x.jpg?v=1634573111",       
        price: 35,
        quantity: "150g",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = leafyProducts.map((item) => {
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
        cartStorage.push(leafyProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(leafyProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

