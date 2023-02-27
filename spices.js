const spicesProducts = [
    {
        id: 0,
        name: "Black Pepper - Nilgiris", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/pepperblack2_300x.jpg?v=1630054933",       
        price: 57,
        quantity: "50g",
        stock: 5
    },
    {
        id: 1,
        name: "Guntur Chilli Powder",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/chilligunturgrounded_300x.jpg?v=1634573308",   
        price: 68,
        quantity: "100g",
        stock: 5
    },
    {
        id: 2,
        name: "Vietnamese Cinnamon Cigars",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/cinnamoncigarsvietnam_300x.jpg?v=1634573285",        
        price: 75,
        quantity: "50gm",
        stock: 5
    },
    {
        id: 3,
        name: "Lakadong Turmeric Powder",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/turmericlakadongground_1_300x.jpg?v=1634573335",         
        price: 155,
        quantity: "100g",
        stock: 5
    },
    {
        id: 4,
        name: "Bay Leaf (Tej Patta) - Nilgiris",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/bayleaf2_300x.jpg?v=1630055506",      
        price: 25,
        quantity: "50gm",
        stock: 5
    },
    {
        id: 5,
        name: "Star Anise - Vietnam",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/staranise_300x.jpg?v=1630054949",       
        price: 55,
        quantity: "25gm",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = spicesProducts.map((item) => {
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
        cartStorage.push(spicesProducts[a]);          
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else{        
        cartStorage.push(spicesProducts[a]);         
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

