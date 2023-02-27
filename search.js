const searchProducts = [
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
    },
    {
        id: 16,
        name: "Pineapple - Peeled & Sliced",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Pineapple-cut_300x.jpg?v=1655801712",        
        price: 130,
        quantity: "200gm",
        stock: 5
    },
    {
        id: 17,
        name: "Leafy Lettuce",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/lettuceleafy_300x.jpg?v=1630054359",         
        price: 50,
        quantity: "150gm",
        stock: 5
    },
    {
        id: 18,
        name: "Black Grapes - Seeded",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Bangalorebluegrapes_9a4f5dc4-c11f-4bb7-802a-834bd86652c6_300x.jpg?v=1653647503",      
        price: 99,
        quantity: "500gm",
        stock: 5
    },
    {
        id: 19,
        name: "Cherry Tomato",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/tomatocherry2_c6739ecc-4551-44f7-8761-3edde9f93ec8_300x.jpg?v=1630054345",       
        price: 75,
        quantity: "250gm",
        stock: 5
    },
    {
        id: 20,
        name: "Black Pepper - Nilgiris", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/pepperblack2_300x.jpg?v=1630054933",       
        price: 57,
        quantity: "50g",
        stock: 5
    },
    {
        id: 21,
        name: "Guntur Chilli Powder",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/chilligunturgrounded_300x.jpg?v=1634573308",   
        price: 68,
        quantity: "100g",
        stock: 5
    },
    {
        id: 22,
        name: "Vietnamese Cinnamon Cigars",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/cinnamoncigarsvietnam_300x.jpg?v=1634573285",        
        price: 75,
        quantity: "50gm",
        stock: 5
    },
    {
        id: 23,
        name: "Lakadong Turmeric Powder",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/turmericlakadongground_1_300x.jpg?v=1634573335",         
        price: 155,
        quantity: "100g",
        stock: 5
    },
    {
        id: 24,
        name: "Bay Leaf (Tej Patta) - Nilgiris",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/bayleaf2_300x.jpg?v=1630055506",      
        price: 25,
        quantity: "50gm",
        stock: 5
    },
    {
        id: 25,
        name: "Star Anise - Vietnam",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/staranise_300x.jpg?v=1630054949",       
        price: 55,
        quantity: "25gm",
        stock: 5
    },
    {
        id: 26,
        name: "Carrot - Brunoise (Chopped)", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/carrotchop_300x.jpg?v=1630055897",       
        price: 71,
        quantity: "300gm",
        stock: 5
    },
    {
        id: 27,
        name: "Broccoli - Florets",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Broccoli--Cut_300x.jpg?v=1655801979",   
        price: 90,
        quantity: "200gm",
        stock: 5
    },
    {
        id: 28,
        name: "Bell Peppers - Julienned",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Ragi_300x.jpg?v=1667905684",        
        price: 206,
        quantity: "300gm",
        stock: 5
    },
    {
        id: 29,
        name: "Cauliflower - Florets",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/2_8d4c9c4c-d9b7-4a54-b105-4df95226153c_300x.png?v=1657530429",         
        price: 40,
        quantity: "200gm",
        stock: 5
    },
    {
        id: 30,
        name: "Bitter Gourd - Cut",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Bitter-Gourd-cut_300x.jpg?v=1655801907",      
        price: 60,
        quantity: "300gm",
        stock: 5
    },
    {
        id: 31,
        name: "Bottle Gourd - Cut",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/bottlegourddiced_895b6697-9075-4666-a9e6-c1cdfd2f6cf2_300x.jpg?v=1634573596",       
        price: 38,
        quantity: "300gm",
        stock: 5
    },
    {
        id: 32,
        name: "Lady's Finger", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Okra_e6edd5b0-9e15-4355-ae4b-7010defce033_300x.jpg?v=1630054465",       
        price: 49,
        quantity: "450-500g",
        stock: 5
    },
    {
        id: 33,
        name: "English Cucumber",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/cucumberenglishlong_3222aee7-4232-4590-b43e-b6291575e16b_300x.jpg?v=1630054482",   
        price: 40,
        quantity: "450-500g",
        stock: 5
    },
    {
        id: 34,
        name: "Beetroot",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/beetroot_50cee480-69d7-418f-876b-341351f57f91_300x.jpg?v=1630054488",        
        price: 25,
        quantity: "475-525g",
        stock: 5
    },
    {
        id: 35,
        name: "Sweet Potato",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/sweet_potato_3e3e028b-6b0b-4bef-85af-00e1da6aad00_300x.jpg?v=1630055743",         
        price: 45,
        quantity: "500g",
        stock: 5
    },
    {
        id: 36,
        name: "Cauliflower",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Cauliflower_5640bd63-7063-4a82-af1b-b52d1ef1df04_300x.jpg?v=1630054462",      
        price: 40,
        quantity: "1 Pc / 400-700g",
        stock: 5
    },
    {
        id: 37,
        name: "Broccoli",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Broccoli_300x.jpg?v=1655801941",       
        price: 65,
        quantity: "1 Pack",
        stock: 5
    },
    {
        id: 38,
        name: "Papaya", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/papaya2_300x.jpg?v=1630054597",       
        price: 100,
        quantity: "1 Pc (800-1200g)",
        stock: 5
    },
    {
        id: 39,
        name: "Apple - Royal Gala",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/appleroyalgala_300x.jpg?v=1630054548",   
        price: 175,
        quantity: "3 Pc (450-500g)",
        stock: 5
    },
    {
        id: 40,
        name: "Pomegranate",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Pomegranate_300x.jpg?v=1630054607",        
        price: 180,
        quantity: "450-500g",
        stock: 5
    },
    {
        id: 41,
        name: "Pineapple - Peeled & Sliced",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Pineapple-cut_300x.jpg?v=1655801712",         
        price: 130,
        quantity: "200g",
        stock: 5
    },
    {
        id: 42,
        name: "Chiku (Sapota)",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Chiku_300x.jpg?v=1655801663",      
        price: 65,
        quantity: "500g",
        stock: 5
    },
    {
        id: 43,
        name: "Guava",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Guava_300x.jpg?v=1630054596",       
        price: 59,
        quantity: "450-500g",
        stock: 5
    },
    {
        id: 44,
        name: "Palak (Root-cut)", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Palak-Root-cut_300x.jpg?v=1660817023",       
        price: 35,
        quantity: "150g",
        stock: 5
    },
    {
        id: 45,
        name: "Coriander (Root cut)",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Coriender-root-cut_300x.jpg?v=1660815340",   
        price: 25,
        quantity: "100g",
        stock: 5
    },
    {
        id: 46,
        name: "Methi (Root-cut)",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/methi_300x.jpg?v=1630054350",        
        price: 35,
        quantity: "100g",
        stock: 5
    },
    {
        id: 47,
        name: "Green Amaranthus (Root-cut)",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/amaranthusgreen_300x.jpg?v=1630054280",         
        price: 35,
        quantity: "150g",
        stock: 5
    },
    {
        id: 48,
        name: "Leafy Lettuce",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/lettuceleafy_300x.jpg?v=1630054359",      
        price: 50,
        quantity: "150g",
        stock: 5
    },
    {
        id: 49,
        name: "Red Amaranthus (Root-cut)",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/amaranthred_300x.jpg?v=1634573111",       
        price: 35,
        quantity: "150g",
        stock: 5
    },
    {
        id: 50,
        name: "Whole wheat Burger buns", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/DSC02381_1_300x.jpg?v=1643366173",       
        price: 40,
        quantity: "Set of 2",
        stock: 5
    },
    {
        id: 51,
        name: "Whole Wheat Thin Crust Pizza Base",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/DSC02395_1_300x.jpg?v=1643366265",   
        price: 54,
        quantity: "Set of 3",
        stock: 5
    },
    {
        id: 52,
        name: "Masala Kulcha",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/DSC02388_1_300x.jpg?v=1643366223",        
        price: 41.25,
        quantity: "Set of 3",
        stock: 5
    },
    {
        id: 53,
        name: "Ginger Jaggery Cookie",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/GingerJaggeryCookie_1_300x.jpg?v=1640167570",         
        price: 125,
        quantity: "250g",
        stock: 5
    },
    {
        id: 54,
        name: "Ajwain Cookie",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/AjwainCookie_1_300x.jpg?v=1640167570",      
        price: 130,
        quantity: "250g",
        stock: 5
    },
    {
        id: 55,
        name: "Green Chilli & Curry Leaf Cookie",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/GreenChillyandCurryLeafCookie_300x.jpg?v=1640167570",       
        price: 125,
        quantity: "250g",
        stock: 5
    },
    {
        id: 56,
        name: "Aged Cheddar", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/AgedCheddar_300x.jpg?v=1648193717",       
        price: 550,
        quantity: "200g",
        stock: 5
    },
    {
        id: 57,
        name: "Cheddar",     
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j-0JXsv_Pr6wDpMczpCc2-GFpwoo5g4HMg&usqp=CAU",   
        price: 600,
        quantity: "200g",
        stock: 5
    },
    {
        id: 58,
        name: "Tomato & Garlic Salsa", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Tomato-_-garlic_300x.png?v=1657893028",       
        price: 99,
        quantity: "200g",
        stock: 5
    },
    {
        id: 59,
        name: "Cold-Pressed Sesame Oil",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Cold-Pressed-Sesame-Oil-500ml_300x.jpg?v=1649745320",   
        price: 379,
        quantity: "500ml",
        stock: 5
    },
    {
        id: 60,
        name: "Extra Virgin Olive Oil", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Extra-Virgin-Olive-Oil-500ml_1_300x.jpg?v=1650005502",       
        price: 419,
        quantity: "500ml",
        stock: 5
    },
    {
        id: 61,
        name: "Cold-Pressed Coconut Oil",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Cold-Pressed-Coconut-Oil-500ml_300x.jpg?v=1649745288",   
        price: 269,
        quantity: "500ml",
        stock: 5
    },
    {
        id: 62,
        name: "Garlic Infused Olive Oil",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Garlicp4_300x.png?v=1649055936",   
        price: 199,
        quantity: "250ml",
        stock: 5
    },
    {
        id: 63,
        name: "Oregano Infused Olive Oil",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Oreganop2_300x.png?v=1649055951",   
        price: 199,
        quantity: "250ml",
        stock: 5
    }
]



let filteredProducts;

let searchInputElement = document.getElementById("searchInput");

searchInputElement.addEventListener("keyup", function(event){

    let searchInput = event.target.value;   
    console.log(searchInput);  

    if ((searchInput === "") || (searchInput === " ") || ((searchProducts.filter((item) => {return item.name.toLowerCase().includes(searchInput.toLowerCase())})).length === 0)){
        document.getElementById("itemsContainer").innerHTML = `<p style = "font-size: 32px; padding : 150px; color: #275C1D; text-align:center; font-weight:600 " >Oops! No Results Found <br/>
        Sometimes you have to be lost before you find what you're looking for.</p>`;        
    }else{        
        filteredProducts = searchProducts.filter((item) => {
            return item.name.toLowerCase().includes(searchInput.toLowerCase());
        });    
        let i = 0;
        document.getElementById("itemsContainer").innerHTML = filteredProducts.map((item) => {
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
        
    }     
})



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
        cartStorage.push(filteredProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(filteredProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}