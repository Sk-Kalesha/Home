const cheeseProducts = [
    {
        id: 0,
        name: "Aged Cheddar", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/AgedCheddar_300x.jpg?v=1648193717",       
        price: 550,
        quantity: "200g",
        stock: 5
    },
    {
        id: 1,
        name: "Cheddar",     
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j-0JXsv_Pr6wDpMczpCc2-GFpwoo5g4HMg&usqp=CAU",   
        price: 600,
        quantity: "200g",
        stock: 5
    }
]

let i = 0;
document.getElementById('itemsContainer').innerHTML = cheeseProducts.map((item) => {
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
        cartStorage.push(cheeseProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(cheeseProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}

