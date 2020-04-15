

const baseUrl = "http://flower-power.gm-plazaolsen.com/wp-json/wc/store/products";

fetch(baseUrl)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        loadProducts(json);
    })
    .catch((error) => {
        //window.location.replace('./error.html');
        console.log(error);
    });

let html = "";

function loadProducts(json) {
    console.dir(json);

    const products = json;

    products.forEach(function(products) {
        let inStock = "Out of stock";
        if (products.is_in_stock === true){
            inStock = "In stock";
        }
        
        html += `<div class="card">
            <div clas="image-container">
                <img class="image" src="${products.images[0].src}" alt="${products.images[0].name}">
            </div>
            <div class="details">
                <h4 class="name">${products.name}</h4>
                <p>Price: ${products.prices.price} ${products.prices.price_prefix}</p>   
                <p>Status: ${inStock}</p>                       
                <a class="details-button" href="details.html?id=${products.id}">Product details</a>
            </div>
        </div>`

    });
    
    const output = document.querySelector(".results");

    output.innerHTML = html;

}


/*
const baseUrl = "http://flower-power.gm-plazaolsen.com/wp-json/wc/store/products";
console.log(baseUrl);

fetch(baseUrl)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        displayCharacter(json);
    })
    .catch((error) => {
        //window.location.replace('./error.html');
        console.log("error")
    });

let html = "";

function displayCharacter(json) {
    const results = json;

    results.forEach(function(result) {
        let inStock = "Out of stock";
        if (products.is_in_stock === true){
            inStock = "In stock";
        }
        
        html += `<div class="col-sm-6 col-md-4 col-lg-3">         
                    <div class="card">
                        <img class="image" src="${result.images[0].scr}" alt="${result.images[0].name}">
                        <div class="details">
                            <h4 class="name">${result.name}</h4>
                            <p>Price: ${result.prices.price}</p>    
                            <p>Status: ${inStock}</p>                                       
                            <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
                        </div>
                    </div>
                </div>`

    });
    
    const output = document.querySelector(".results");

    output.innerHTML = html;
}

/*const baseUrl = "http://flower-power.gm-plazaolsen.com/wp-json/wc/store/products";

console.log(baseUrl);

fetch(baseUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        loadProducts(json);
    })
    .catch(function (error) {
        //console.dir(error);
        //window.location.replace("error.html");
        console.log("error");
    });
//

function loadProducts (json){
    const products = json;
    let productsContainer = document.querySelector(".results");
    let newHTML = "";
    console.log(products);

    for (let i = 0; i < products.length; i++) {
        const prodImage = products[i].images[i].scr;
        const prodName = products[i].name;
        const price = products[i].prices.price;
        const prodId = products[i].id;

        let inStock = "Out of stock";
        if (products[i].is_in_stock === true){
            inStock = "In stock";
        }

        const productsCard = `<div class="cardSpacing">                
                                <div class="card">
                            
                                    <img class="image" src=${prodImage} alt=${prodName}>
                                    <div class="details">
                                        <h4 class="name">${prodName}</h4>
                                        <p>Price: ${price}</p>         
                                        <p>Status: ${inStock}</p>                                 
                                        <a class="btn btn-primary" href="!!details.html?id!!=${prodId}">Add to cart</a>
                                    </div>

                                </div>
                            </div>`;
        newHTML += productsCard;
    }

    productsContainer.innerHTML = newHTML;
}*/