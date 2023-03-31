const mail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu"); 
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcom = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

mail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcom.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    if(!aside.classList.contains("inactive")){
        aside.classList.add("inactive")
    }
}

function toggleCarritoAside(){
    aside.classList.toggle("inactive")
    if(!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.add("inactive")
    }
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name: "Monitor",
    price: 800,
    image: "https://http2.mlstatic.com/D_NQ_NP_754911-MLA48131292346_112021-O.jpg",
})

productList.push({
    name: "Computer",
    price: 1500,
    image: "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg",
})

for (product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    const cardsContainer = document.querySelector(".cards-container")

    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
}

