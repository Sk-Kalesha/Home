const vegetablesProducts = [
    {
        id: 0,
        name: "Lady's Finger", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Okra_e6edd5b0-9e15-4355-ae4b-7010defce033_300x.jpg?v=1630054465",       
        price: 49,
        quantity: "450-500g",
        stock: 5
    },
    {
        id: 1,
        name: "English Cucumber",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/cucumberenglishlong_3222aee7-4232-4590-b43e-b6291575e16b_300x.jpg?v=1630054482",   
        price: 40,
        quantity: "450-500g",
        stock: 5
    },
    {
        id: 2,
        name: "Beetroot",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/beetroot_50cee480-69d7-418f-876b-341351f57f91_300x.jpg?v=1630054488",        
        price: 25,
        quantity: "475-525g",
        stock: 5
    },
    {
        id: 3,
        name: "Sweet Potato",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/sweet_potato_3e3e028b-6b0b-4bef-85af-00e1da6aad00_300x.jpg?v=1630055743",         
        price: 45,
        quantity: "500g",
        stock: 5
    },
    {
        id: 4,
        name: "Cauliflower",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Cauliflower_5640bd63-7063-4a82-af1b-b52d1ef1df04_300x.jpg?v=1630054462",      
        price: 40,
        quantity: "1 Pc / 400-700g",
        stock: 5
    },
    {
        id: 5,
        name: "Broccoli",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Broccoli_300x.jpg?v=1655801941",       
        price: 65,
        quantity: "1 Pack",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = vegetablesProducts.map((item) => {
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
        cartStorage.push(vegetablesProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(vegetablesProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

