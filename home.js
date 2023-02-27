const homeProducts = [
    {
        id: 0,
        name: "Jaggery(Whole)", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Jaggery_300x.jpg?v=1667619281",       
        price: 75,
        quantity: "500g",
        stock: 5
    },
    {
        id: 1,
        name: "Masoor Dal-Red | Split",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/MasoorDal-Sp_300x.jpg?v=1667619366",   
        price: 98,
        quantity: "500g",
        stock: 5
    },
    {
        id: 2,
        name: "Ragi Flour",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Ragi_300x.jpg?v=1667905684",        
        price: 120,
        quantity: "1kg",
        stock: 5
    },
    {
        id: 3,
        name: "Urad Dal-White | Split",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/WhiteUrad-Split_300x.jpg?v=1667619724",         
        price: 110,
        quantity: "500g",
        stock: 5
    },
    {
        id: 4,
        name: "Multigrain Flour",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Multi-Grains_300x.jpg?v=1667619473",      
        price: 179,
        quantity: "1kg",
        stock: 5
    },
    {
        id: 5,
        name: "Bajra Flour",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/BajraFlour_300x.jpg?v=1667619143",       
        price: 90,
        quantity: "1kg",
        stock: 5
    },
    {
        id: 6,
        name: "A2 Gir Cow Ghee", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/GheeBottle1_300x.jpg?v=1666177520",       
        price: 1299,
        quantity: "500ml",
        stock: 5
    },
    {
        id: 7,
        name: "A1 Gir Cow Ghee", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmsJ5vgOmmPE7eOeoOdVq7HnANMrz3E-zKw&usqp=CAU",       
        price: 1499,
        quantity: "500ml",
        stock: 5
    },
    {
        id: 8,
        name: "Indulgence hamper (Large)", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/WhatsAppImage2022-10-18at6.57.17PM_300x.jpg?v=1666105177",       
        price: 1999,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 9,
        name: "Exotic fruits selection",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/EXOTIC_300x.png?v=1665659193",   
        price: 1299,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 10,
        name: "Favourite fruits selection",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/favfruitscollection_300x.png?v=1665659161",        
        price: 749,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 11,
        name: "Indulgence hamper (Small)",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Indulgence_300x.png?v=1665659220",         
        price: 1399,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 12,
        name: "Dry fruits classic collection (Large)",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/dryfruitslarge_300x.png?v=1665065369",      
        price: 1099,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 13,
        name: "Dry fruits classic collection (Small)",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/dryfruitssmall_300x.png?v=1665064277",       
        price: 699,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 14,
        name: "Pineapple", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Pineapple_300x.jpg?v=1630054784",       
        price: 99,
        quantity: "1 Pc (600-800gm)",
        stock: 5
    },
    {
        id: 15,
        name: "Brinjal long",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/brinjallong_bc7a9296-8052-486c-8afa-f0e29057adea_300x.jpg?v=1630055770",   
        price: 39,
        quantity: "450-550gm",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = homeProducts.map((item) => {
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
        cartStorage.push(homeProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(homeProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

