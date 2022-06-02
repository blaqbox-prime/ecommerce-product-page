// Navbar Slide in
const openMenuBtn = document.getElementById('close-menu-icon');
const closeMenuBtn = document.getElementById('close-menu-icon');
// Gallery Images
const desktopGallery = document.getElementById('desktop-gallery');
const desktopGalleryImage = document.getElementById('desktop-gallery-img');
const mobileGalleryImage = document.getElementById('product-img-container');
const productImages = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg',
]

let currentIdx = 1;

//Quantity Counter
const quantityCounter = document.getElementById('quantity'); 

// initial image on display
setActiveImg(currentIdx);

// Nav ---------------------------------
function openMenu(){
    document.getElementById('navbar__menu').style.width = "100%";
}

function closeMenu(){
    document.getElementById('navbar__menu').style.width = "0";
}

// Gallery ----------------------------------------------------------------
function closeGallery(){
    desktopGallery.style.display = "none";
}

function openGallery(){
    if (window.innerWidth >= 960 ){desktopGallery.style.display = "block";}
}

function setActiveImg(idx){
    desktopGalleryImage.style.backgroundImage = `url('${productImages[idx]}')`;
    mobileGalleryImage.style.backgroundImage = `url('${productImages[idx]}')`;

}

function nextImage(){
    if(currentIdx == productImages.length-1){
        currentIdx = 0;
    }else{
        currentIdx++;
        console.log(currentIdx);
    }
    
    setActiveImg(currentIdx);
}

function prevImage(){
    if(currentIdx == 0){
        currentIdx = productImages.length-1;
    }else{
        currentIdx--;
    }
    
    setActiveImg(currentIdx);
}
// Quantity Manipulation---------------------------------------------------------------
let quantity = 0;
quantityCounter.innerText = quantity;

function increaseQuantity(){
    quantity++;
    quantityCounter.innerText = quantity;
    
}

function decreaseQuantity(){
    if(quantity != 0){
        quantity--;
    quantityCounter.innerText = quantity;
    }
    
}

// Product And Cart -------------------------------------------------------------
const cartContainer = document.getElementById('cart-container');
const cartItems = document.getElementById('cartItems');
let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const product = {
    title: "Fall Limited Edition Sneakers",
    price: 125.00,
    quantity: 0,
};

let cart = {
    products: [],
    total: 0,
};

function toggleCart(){
    if(cartContainer.style.display == 'none'){
        cartContainer.style.display = 'flex';
    } else{
        cartContainer.style.display = 'none';
    }
}



function createCartItemElement(title,quantity, price){
 const parent = document.createElement('div');
 parent.setAttribute('class','cartItem');

 const itemImage = document.createElement('img');
 itemImage.setAttribute('src',"images/image-product-1.jpg");
 itemImage.setAttribute('alt', 'sneakers');
 itemImage.setAttribute('width','50');
 itemImage.setAttribute('height','50');
 itemImage.setAttribute('class','cartItem-image');

 const cartItemDetails = document.createElement('div');
 cartItemDetails.setAttribute('class', 'cartItem-details');

 const productTitle = document.createElement('p');
 productTitle.setAttribute('class', 'productTitle');
 productTitle.setAttribute('id','productTitle');
 
 const priceTag = document.createElement('p');
 priceTag.setAttribute('class', 'price');

 const trashIcon = document.createElement('i');
 trashIcon.setAttribute('class', 'fas fa-trash-alt');
 

 const itemQuantity = document.createElement('span');
 itemQuantity.setAttribute('class', 'itemQuantity');
 itemQuantity.innerText = `x${quantity}`;


 const itemTotal = document.createElement('span');
 itemTotal.setAttribute('class', 'itemTotal bold');
 itemTotal.innerText = `${dollarUS.format(quantity*price)}`;
 

//  cartItemDetails.append([productTitle, price]);
 cartItemDetails.appendChild(productTitle);
 cartItemDetails.appendChild(priceTag);

//  parent.append([itemImage,cartItemDetails,trashIcon]);
 parent.appendChild(itemImage);
 parent.appendChild(cartItemDetails);
 parent.appendChild(trashIcon);

 productTitle.innerText = title;
 priceTag.innerHTML = `${dollarUS.format(price)} `;
 priceTag.appendChild(itemQuantity);
 priceTag.appendChild(itemTotal)

cartItems.appendChild(parent);

}

function addToCart(){
    if(quantity > 0){
        let newProduct = {...product, quantity: quantity}
    cart.products.push(newProduct);
    cart.total += newProduct.price*newProduct.quantity;
    createCartItemElement(newProduct.title, quantity, newProduct.price);
    }

    console.log(cart);
}

function checkout(){
    alert("Thank You For Your Purchase");
    quantity = 0; 
    cart.total = 0;
    cart.products = [];
}

function toggleCartMessageAndBtn(){
    const cartMsg = document.getElementById('cartMsg');
    const btnCheckout = document.getElementById('btn-checkout');
    if(cart.products.length > 1){
        cartMsg.style.display = 'none';
        btnCheckout.style.display = 'none'
    }else{
        cartMsg.style.display = 'flex';
        btnCheckout.style.display = 'flex';
    }
}
// ------------------------------------------------------
openMenuBtn.addEventListener('click', () => {openMenu()});
closeMenuBtn.addEventListener('click', () => {closeMenu()});

const btnAddToCart = document.getElementById('btnAddToCart');

btnAddToCart.addEventListener('click', ()=>{
    addToCart();
});

toggleCartMessageAndBtn();
