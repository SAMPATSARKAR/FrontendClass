let productlist1 = document.querySelector('.productlist');

productlist1.addEventListener('click', (event) => {
    if (event.target.classList.contains('cartbtn')) {
        console.log("Product added to cart");
    }
})

for (let i = 0; i < 10; i++) {
    let newProduct = document.createElement('div');
    newProduct.className = 'product';
    newProduct.innerHTML = '<button class="cartbtn">Add to Cart</button>';
    productlist1.appendChild(newProduct);

}