const staplesProducts = [
    {
        id: 0,
        name: "Jaggery(Whole)", 
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Jaggery_300x.jpg?v=1667619281",       
        price: 75,
        category: "sweeteners",
        type:"organic",
        quantity: "500g",
        stock: 5
    },
    {
        id: 1,
        name: "Moong Dal (Split)",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/moongdal_300x.jpg?v=1667994564",   
        price: 99,
        category:"pulses",
        type:"organic",
        quantity: "500g",
        stock: 5
    },
    {
        id: 2,
        name: "Masoor Dal-Red | Split",     
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/MasoorDal-Sp_300x.jpg?v=1667619366",   
        price: 98,
        category:"pulses",
        type:"organic",
        quantity: "500g",
        stock: 5
    },
    {
        id: 3,
        name: "Urad Dal-White | Split",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/WhiteUrad-Split_300x.jpg?v=1667619724",         
        price: 110,
        category:"pulses",
        type:"non-organic",
        quantity: "500g",
        stock: 5
    },
    {
        id: 4,
        name: "Ragi Flour",
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Ragi_300x.jpg?v=1667905684",        
        price: 120,
        category:"flours",
        type:"organic",
        quantity: "1kg",
        stock: 5
    },
        {
        id: 5,
        name: "Multigrain Flour",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Multi-Grains_300x.jpg?v=1667619473",      
        price: 179,
        category:"flours",
        type:"non-organic",
        quantity: "1kg",
        stock: 5
    },
    {
        id: 6,
        name: "Bajra Flour",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/BajraFlour_300x.jpg?v=1667619143",       
        price: 90,
        category:"flours",
        type:"organic",
        quantity: "1kg",
        stock: 5
    },
    {
        id: 7,
        name: "Sona Masoori Raw Rice",  
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/SonaMasooriRawRice_300x.jpg?v=1667619652",         
        price: 85,
        category: "grains",
        type:"non-organic",
        quantity: "1Kg",
        stock: 5
    },
    {
        id: 8,
        name: "Red Rice",    
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/RedRice_300x.jpg?v=1667619633",      
        price: 118,
        category:"grains",
        type:"organic",
        quantity: "1kg",
        stock: 5
    },
    {
        id: 9,
        name: "Black Rice",   
        image: "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/BlackRice_300x.jpg?v=1667619164",       
        price: 220,
        category:"grains",
        type:"organic",
        quantity: "1kg",
        stock: 5
    }
]


//------------------------------------------------------------//


let allButtonElement = document.getElementById("allButton");
let floursButtonElement = document.getElementById("floursButton");
let grainsButtonElement = document.getElementById("grainsButton");
let pulsesButtonElement = document.getElementById("pulsesButton");
let sweetenersButtonElement = document.getElementById("sweetenersButton");
let allOrgButtonElement = document.getElementById("allOrgButton");
let organicButtonElement = document.getElementById("organicButton");
let nonOrganicButtonElement = document.getElementById("nonOrganicButton");

//------------------------------------------------------------//

let i = 0;
document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
    var {name, image, price, quantity,category,type} = item;
    return(
        `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
            <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>
            <img class="item-image" src="${image}">
            <p class="item-text-top" >${name}</p>
            <p class="item-text-middle" >Rs. ${price}</p>                        
            <p class="item-text-bottom" >${quantity}</p>`+
            "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
        `</div>`
        )
        
}).join("")


//------------------------------------------------------------//


// All Button Element ------------------------------------------- //
allButtonElement.addEventListener("click", function(event){ 
    
    floursButtonElement.classList.remove("filter-button-active");   
    grainsButtonElement.classList.remove("filter-button-active"); 
    pulsesButtonElement.classList.remove("filter-button-active"); 
    sweetenersButtonElement.classList.remove("filter-button-active");
    nonOrganicButtonElement.classList.remove("organic-button-active")
    organicButtonElement.classList.remove("organic-button-active");   
    allOrgButtonElement.classList.remove("organic-button-active"); 
    allButtonElement.classList.add("filter-button-active");  

    if (event.target.value == "all"){
        let i = 0;
        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
        var {name, image, price, quantity, category, type} = item;                    
            
        return(
            `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
            <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
            <img class="item-image" src="${image}">
            <p class="item-text-top" >${name}</p>
            <p class="item-text-middle" >Rs. ${price}</p>                        
            <p class="item-text-bottom" >${quantity}</p>`+
            "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
            `</div>`
            )
        
        }).join("") 
    }



    if (event.target.value == "all"){

    // All inner Button Element ------------------------------------------- //
            allOrgButtonElement.addEventListener("click", function(event){

                nonOrganicButtonElement.classList.remove("organic-button-active")
                organicButtonElement.classList.remove("organic-button-active");   
                allOrgButtonElement.classList.add("organic-button-active"); 
                
                if (event.target.value == "allorg"){
                    let i = 0;
                    document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
                    var {name, image, price, quantity, category, type} = item;                    
            
                    return(
                        `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                            <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
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

    // organicButtonElement ------------------------------------------- //
        organicButtonElement.addEventListener("click", function(event){
            
            allOrgButtonElement.classList.remove("organic-button-active");
            nonOrganicButtonElement.classList.remove("organic-button-active")
            organicButtonElement.classList.add("organic-button-active");

            
            if (event.target.value == "organic"){
                let i = 0;
                document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
                var {name, image, price, quantity, category, type} = item;
    
                if (type === "organic"){
        
                return(
                    `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                        <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                        <img class="item-image" src="${image}">
                        <p class="item-text-top" >${name}</p>
                        <p class="item-text-middle" >Rs. ${price}</p>                        
                        <p class="item-text-bottom" >${quantity}</p>`+
                        "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                    `</div>`
                    )
    }
    }).join("") 

}
})   

// Non - organicButtonElement ------------------------------------------- //
nonOrganicButtonElement.addEventListener("click", function(event){
            
    allOrgButtonElement.classList.remove("organic-button-active");
    organicButtonElement.classList.remove("organic-button-active");
    nonOrganicButtonElement.classList.add("organic-button-active");   

    
    if (event.target.value == "nonorganic"){
        let i = 0;
        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
        var {name, image, price, quantity, category, type} = item;

        if (type === "non-organic"){

        return(
            `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                <img class="item-image" src="${image}">
                <p class="item-text-top" >${name}</p>
                <p class="item-text-middle" >Rs. ${price}</p>                        
                <p class="item-text-bottom" >${quantity}</p>`+
                "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
            `</div>`
            )
}
}).join("") 
}
}) 

}
})

//------------------------------------------------------------//

floursButtonElement.addEventListener("click", function(event){ 

    grainsButtonElement.classList.remove("filter-button-active");
    allButtonElement.classList.remove("filter-button-active"); 
    pulsesButtonElement.classList.remove("filter-button-active"); 
    sweetenersButtonElement.classList.remove("filter-button-active");
    nonOrganicButtonElement.classList.remove("organic-button-active")
    organicButtonElement.classList.remove("organic-button-active");   
    allOrgButtonElement.classList.remove("organic-button-active"); 
    floursButtonElement.classList.add("filter-button-active");    
    
    if (event.target.value === "flours"){
        let i = 0;
        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
        var {name, image, price, quantity, category, type} = item;

        if (category === "flours")
        {
            return(
                    `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                    <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                    <img class="item-image" src="${image}">
                    <p class="item-text-top" >${name}</p>
                    <p class="item-text-middle" >Rs. ${price}</p>                        
                    <p class="item-text-bottom" >${quantity}</p>`+
                    "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                    `</div>`
                    )         
        }}).join("")  
    }

    
        if (event.target.value === "flours"){               

                // All inner Button Element ------------------------------------------- //
                allOrgButtonElement.addEventListener("click", function(event){

                    nonOrganicButtonElement.classList.remove("organic-button-active")
                    organicButtonElement.classList.remove("organic-button-active");   
                    allOrgButtonElement.classList.add("organic-button-active"); 
                    
                    if (event.target.value == "allorg"){
                        let i = 0;
                        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
                        var {name, image, price, quantity, category, type} = item;  
                        
                        if (category === "flours"){
                            return(
                                `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                                    <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                                    <img class="item-image" src="${image}">
                                    <p class="item-text-top" >${name}</p>
                                    <p class="item-text-middle" >Rs. ${price}</p>                        
                                    <p class="item-text-bottom" >${quantity}</p>`+
                                    "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                                `</div>`
                                )

                        }
                
                        
            
            }).join("") 
        
        }
        }) 

            // organicButtonElement ------------------------------------------- //
            organicButtonElement.addEventListener("click", function(event){
            
                allOrgButtonElement.classList.remove("organic-button-active");
                nonOrganicButtonElement.classList.remove("organic-button-active")
                organicButtonElement.classList.add("organic-button-active");
    
                
                if (event.target.value == "organic"){
                    let i = 0;
                    document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
                    var {name, image, price, quantity, category, type} = item;
        
                    if (type === "organic" && category === "flours"){
            
                    return(
                        `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                            <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                            <img class="item-image" src="${image}">
                            <p class="item-text-top" >${name}</p>
                            <p class="item-text-middle" >Rs. ${price}</p>                        
                            <p class="item-text-bottom" >${quantity}</p>`+
                            "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                        `</div>`
                        )
        }
        }).join("") 
    
    }
    }) 

    // Non - organicButtonElement ------------------------------------------- //
    nonOrganicButtonElement.addEventListener("click", function(event){
            
    allOrgButtonElement.classList.remove("organic-button-active");
    organicButtonElement.classList.remove("organic-button-active");
    nonOrganicButtonElement.classList.add("organic-button-active");   

    
    if (event.target.value == "nonorganic"){
        let i = 0;
        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
        var {name, image, price, quantity, category, type} = item;

        if (type === "non-organic" && category === "flours"){

        return(
            `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                <img class="item-image" src="${image}">
                <p class="item-text-top" >${name}</p>
                <p class="item-text-middle" >Rs. ${price}</p>                        
                <p class="item-text-bottom" >${quantity}</p>`+
                "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
            `</div>`
            )

}
})         
        
    }
    })
}
})

//------------------------------------------------------------//

grainsButtonElement.addEventListener("click", function(event){ 
    
    allButtonElement.classList.remove("filter-button-active"); 
    pulsesButtonElement.classList.remove("filter-button-active"); 
    sweetenersButtonElement.classList.remove("filter-button-active");
    floursButtonElement.classList.remove("filter-button-active"); 
    nonOrganicButtonElement.classList.remove("organic-button-active")
    organicButtonElement.classList.remove("organic-button-active");   
    allOrgButtonElement.classList.remove("organic-button-active");   
    grainsButtonElement.classList.add("filter-button-active"); 
    
    if (event.target.value === "grains"){
        let i = 0;
        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
        var {name, image, price, quantity, category, type} = item;

        if (category === "grains")
        {
            return(
                    `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                    <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                    <img class="item-image" src="${image}">
                    <p class="item-text-top" >${name}</p>
                    <p class="item-text-middle" >Rs. ${price}</p>                        
                    <p class="item-text-bottom" >${quantity}</p>`+
                    "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                    `</div>`
                    )         
        }}).join("")  
    }

    
        if (event.target.value === "grains"){               

                // All inner Button Element ------------------------------------------- //
                allOrgButtonElement.addEventListener("click", function(event){

                    nonOrganicButtonElement.classList.remove("organic-button-active")
                    organicButtonElement.classList.remove("organic-button-active");   
                    allOrgButtonElement.classList.add("organic-button-active"); 
                    
                    if (event.target.value == "allorg"){
                        let i = 0;
                        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
                        var {name, image, price, quantity, category, type} = item;  
                        
                        if (category === "grains"){
                            return(
                                `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                                    <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                                    <img class="item-image" src="${image}">
                                    <p class="item-text-top" >${name}</p>
                                    <p class="item-text-middle" >Rs. ${price}</p>                        
                                    <p class="item-text-bottom" >${quantity}</p>`+
                                    "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                                `</div>`
                                )

                        }
                
                        
            
            }).join("") 
        
        }
        }) 

            // organicButtonElement ------------------------------------------- //
            organicButtonElement.addEventListener("click", function(event){
            
                allOrgButtonElement.classList.remove("organic-button-active");
                nonOrganicButtonElement.classList.remove("organic-button-active")
                organicButtonElement.classList.add("organic-button-active");
    
                
                if (event.target.value == "organic"){
                    let i = 0;
                    document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
                    var {name, image, price, quantity, category, type} = item;
        
                    if (type === "organic" && category === "grains"){
            
                    return(
                        `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                            <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                            <img class="item-image" src="${image}">
                            <p class="item-text-top" >${name}</p>
                            <p class="item-text-middle" >Rs. ${price}</p>                        
                            <p class="item-text-bottom" >${quantity}</p>`+
                            "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                        `</div>`
                        )
        }
        }).join("") 
    
    }
    }) 

    // Non - organicButtonElement ------------------------------------------- //
    nonOrganicButtonElement.addEventListener("click", function(event){
            
    allOrgButtonElement.classList.remove("organic-button-active");
    organicButtonElement.classList.remove("organic-button-active");
    nonOrganicButtonElement.classList.add("organic-button-active");   

    
    if (event.target.value == "nonorganic"){
        let i = 0;
        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
        var {name, image, price, quantity, category, type} = item;

        if (type === "non-organic" && category === "grains"){

        return(
            `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                <img class="item-image" src="${image}">
                <p class="item-text-top" >${name}</p>
                <p class="item-text-middle" >Rs. ${price}</p>                        
                <p class="item-text-bottom" >${quantity}</p>`+
                "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
            `</div>`
            )

}
})         
        
    }
    })
}
})

//------------------------------------------------------------//

pulsesButtonElement.addEventListener("click", function(event){ 
    
    allButtonElement.classList.remove("filter-button-active");     
    sweetenersButtonElement.classList.remove("filter-button-active");
    floursButtonElement.classList.remove("filter-button-active");   
    grainsButtonElement.classList.remove("filter-button-active"); 
    nonOrganicButtonElement.classList.remove("organic-button-active")
    organicButtonElement.classList.remove("organic-button-active");   
    allOrgButtonElement.classList.remove("organic-button-active"); 
    pulsesButtonElement.classList.add("filter-button-active"); 
    
    if (event.target.value === "pulses"){
        let i = 0;
        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
        var {name, image, price, quantity, category, type} = item;

        if (category === "pulses")
        {
            return(
                    `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                    <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                    <img class="item-image" src="${image}">
                    <p class="item-text-top" >${name}</p>
                    <p class="item-text-middle" >Rs. ${price}</p>                        
                    <p class="item-text-bottom" >${quantity}</p>`+
                    "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                    `</div>`
                    )         
        }}).join("")  
    }

    
        if (event.target.value === "pulses"){               

                // All inner Button Element ------------------------------------------- //
                allOrgButtonElement.addEventListener("click", function(event){

                    nonOrganicButtonElement.classList.remove("organic-button-active")
                    organicButtonElement.classList.remove("organic-button-active");   
                    allOrgButtonElement.classList.add("organic-button-active"); 
                    
                    if (event.target.value == "allorg"){
                        let i = 0;
                        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
                        var {name, image, price, quantity, category, type} = item;  
                        
                        if (category === "pulses"){
                            return(
                                `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                                    <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                                    <img class="item-image" src="${image}">
                                    <p class="item-text-top" >${name}</p>
                                    <p class="item-text-middle" >Rs. ${price}</p>                        
                                    <p class="item-text-bottom" >${quantity}</p>`+
                                    "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                                `</div>`
                                )

                        }
                
                        
            
            }).join("") 
        
        }
        }) 

            // organicButtonElement ------------------------------------------- //
            organicButtonElement.addEventListener("click", function(event){
            
                allOrgButtonElement.classList.remove("organic-button-active");
                nonOrganicButtonElement.classList.remove("organic-button-active")
                organicButtonElement.classList.add("organic-button-active");
    
                
                if (event.target.value == "organic"){
                    let i = 0;
                    document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
                    var {name, image, price, quantity, category, type} = item;
        
                    if (type === "organic" && category === "pulses"){
            
                    return(
                        `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                            <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                            <img class="item-image" src="${image}">
                            <p class="item-text-top" >${name}</p>
                            <p class="item-text-middle" >Rs. ${price}</p>                        
                            <p class="item-text-bottom" >${quantity}</p>`+
                            "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                        `</div>`
                        )
        }
        }).join("") 
    
    }
    }) 

    // Non - organicButtonElement ------------------------------------------- //
    nonOrganicButtonElement.addEventListener("click", function(event){
            
    allOrgButtonElement.classList.remove("organic-button-active");
    organicButtonElement.classList.remove("organic-button-active");
    nonOrganicButtonElement.classList.add("organic-button-active");   

    
    if (event.target.value == "nonorganic"){
        let i = 0;
        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
        var {name, image, price, quantity, category, type} = item;

        if (type === "non-organic" && category === "pulses"){

        return(
            `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                <img class="item-image" src="${image}">
                <p class="item-text-top" >${name}</p>
                <p class="item-text-middle" >Rs. ${price}</p>                        
                <p class="item-text-bottom" >${quantity}</p>`+
                "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
            `</div>`
            )

}
})         
        
    }
    })
}
})

//------------------------------------------------------------//

sweetenersButtonElement.addEventListener("click", function(event){ 
    
    allButtonElement.classList.remove("filter-button-active");         
    floursButtonElement.classList.remove("filter-button-active");   
    grainsButtonElement.classList.remove("filter-button-active"); 
    pulsesButtonElement.classList.remove("filter-button-active");
    nonOrganicButtonElement.classList.remove("organic-button-active")
    organicButtonElement.classList.remove("organic-button-active");   
    allOrgButtonElement.classList.remove("organic-button-active");  
    sweetenersButtonElement.classList.add("filter-button-active");
    
    if (event.target.value === "sweeteners"){
        let i = 0;
        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
        var {name, image, price, quantity, category, type} = item;

        if (category === "sweeteners")
        {
            return(
                    `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                    <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                    <img class="item-image" src="${image}">
                    <p class="item-text-top" >${name}</p>
                    <p class="item-text-middle" >Rs. ${price}</p>                        
                    <p class="item-text-bottom" >${quantity}</p>`+
                    "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                    `</div>`
                    )         
        }}).join("")  
    }

    
        if (event.target.value === "sweeteners"){               

                // All inner Button Element ------------------------------------------- //
                allOrgButtonElement.addEventListener("click", function(event){

                    nonOrganicButtonElement.classList.remove("organic-button-active")
                    organicButtonElement.classList.remove("organic-button-active");   
                    allOrgButtonElement.classList.add("organic-button-active"); 
                    
                    if (event.target.value == "allorg"){
                        let i = 0;
                        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
                        var {name, image, price, quantity, category, type} = item;  
                        
                        if (category === "sweeteners"){
                            return(
                                `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                                    <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                                    <img class="item-image" src="${image}">
                                    <p class="item-text-top" >${name}</p>
                                    <p class="item-text-middle" >Rs. ${price}</p>                        
                                    <p class="item-text-bottom" >${quantity}</p>`+
                                    "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                                `</div>`
                                )

                        }
                
                        
            
            }).join("") 
        
        }
        }) 

            // organicButtonElement ------------------------------------------- //
            organicButtonElement.addEventListener("click", function(event){
            
                allOrgButtonElement.classList.remove("organic-button-active");
                nonOrganicButtonElement.classList.remove("organic-button-active")
                organicButtonElement.classList.add("organic-button-active");
    
                
                if (event.target.value == "organic"){
                    let i = 0;
                    document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
                    var {name, image, price, quantity, category, type} = item;
        
                    if (type === "organic" && category === "sweeteners"){
            
                    return(
                        `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                            <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                            <img class="item-image" src="${image}">
                            <p class="item-text-top" >${name}</p>
                            <p class="item-text-middle" >Rs. ${price}</p>                        
                            <p class="item-text-bottom" >${quantity}</p>`+
                            "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
                        `</div>`
                        )
        }
        }).join("") 
    
    }
    }) 

    // Non - organicButtonElement ------------------------------------------- //
    nonOrganicButtonElement.addEventListener("click", function(event){
            
    allOrgButtonElement.classList.remove("organic-button-active");
    organicButtonElement.classList.remove("organic-button-active");
    nonOrganicButtonElement.classList.add("organic-button-active");   

    
    if (event.target.value == "nonorganic"){
        let i = 0;
        document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
        var {name, image, price, quantity, category, type} = item;

        if (type === "non-organic" && category === "sweeteners"){

        return(
            `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
                <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>    
                <img class="item-image" src="${image}">
                <p class="item-text-top" >${name}</p>
                <p class="item-text-middle" >Rs. ${price}</p>                        
                <p class="item-text-bottom" >${quantity}</p>`+
                "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
            `</div>`
            )

}
})         
        
    }
    })
}
})


//------------------------------------------------------------//

// grainsButtonElement.addEventListener("click", function(event){ 
    
//     allButtonElement.classList.remove("filter-button-active"); 
//     floursButtonElement.classList.remove("filter-button-active");  
//     pulsesButtonElement.classList.remove("filter-button-active"); 
//     sweetenersButtonElement.classList.remove("filter-button-active");
//     grainsButtonElement.classList.add("filter-button-active");

//     if (event.target.value === "grains"){
//         let i = 0;
//     document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
//     var {name, image, price, quantity, category, type} = item;
    
//     if (category === "grains"){
        
//         return(
//             `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
//                 <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>
//                 <img class="item-image" src="${image}">
//                 <p class="item-text-top" >${name}</p>
//                 <p class="item-text-middle" >Rs. ${price}</p>                        
//                 <p class="item-text-bottom" >${quantity}</p>`+
//                 "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
//             `</div>`
//             )
//     }
//     }).join("") 
// }
// })

//----------------------------------------------------------------------//

// pulsesButtonElement.addEventListener("click", function(event){ 
    
//     allButtonElement.classList.remove("filter-button-active"); 
//     floursButtonElement.classList.remove("filter-button-active");   
//     grainsButtonElement.classList.remove("filter-button-active");
//     sweetenersButtonElement.classList.remove("filter-button-active");
//     pulsesButtonElement.classList.add("filter-button-active");

//     if (event.target.value === "pulses"){
//         let i = 0;
//     document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
//     var {name, image, price, quantity, category, type} = item;
    
//     if (category === "pulses"){
        
//         return(
//             `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
//                 <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>
//                 <img class="item-image" src="${image}">
//                 <p class="item-text-top" >${name}</p>
//                 <p class="item-text-middle" >Rs. ${price}</p>                        
//                 <p class="item-text-bottom" >${quantity}</p>`+
//                 "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
//             `</div>`
//             )
//     }
//     }).join("") 
// }
// })

//-----------------------------------------------------------------------//

// sweetenersButtonElement.addEventListener("click", function(event){ 
    
//     allButtonElement.classList.remove("filter-button-active"); 
//     floursButtonElement.classList.remove("filter-button-active");   
//     grainsButtonElement.classList.remove("filter-button-active");
//     pulsesButtonElement.classList.remove("filter-button-active");
//     sweetenersButtonElement.classList.add("filter-button-active");

//     if (event.target.value === "sweeteners"){
//         let i = 0;
//     document.getElementById('itemsContainer').innerHTML = staplesProducts.map((item) => {
//     var {name, image, price, quantity, category, type} = item;
    
//     if (category === "sweeteners"){
        
//         return(
//             `<div class="d-flex flex-column justify-content-start align-items-start item-container shadow">
//                 <p style="background-color:#275C1D; font-size: 15px;color: #ffffff; padding:5px; border-top-left-radius:15px; border-bottom-right-radius:15px" >${type}</p>
//                 <img class="item-image" src="${image}">
//                 <p class="item-text-top" >${name}</p>
//                 <p class="item-text-middle" >Rs. ${price}</p>                        
//                 <p class="item-text-bottom" >${quantity}</p>`+
//                 "<button class='addtocart-button' onclick='addToCart("+(i++)+")' >ADD TO CART</button>"+
//             `</div>`
//             )
//     }
//     }).join("") 
// }
// })

//-----------------------------------------------------------------------//


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
        cartStorage.push(staplesProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;   
    }else {
        cartStorage.push(staplesProducts[a]);  
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));  
        document.getElementById("countCart").innerHTML = cartStorage.length;
    }
}


//-----------------------------------------------------------------------//