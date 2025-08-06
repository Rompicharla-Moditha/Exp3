const products = [
  { id: 1, name: "Apple iPhone 14", price: 999.99, image: "https://mobitez.in/wp-content/uploads/2024/04/Apple-iPhone-14-Purple-ps1.webp" },
  { id: 2, name: "Samsung Galaxy S23", price: 899.99, image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/679c7189ad935db01cf048d4/61j99uufxnl-_sx679_-640x640.jpg" },
  { id: 3, name: "Google Pixel 7", price: 799.99, image: "https://m.media-amazon.com/images/I/51f4A6Tr8zL.jpg" },
  { id: 4, name: "Sony WH-1000XM5 Headphones", price: 349.99, image: "https://buy.budli.in/cdn/shop/files/Untitleddesign-2024-12-07T121227.322.jpg?v=1752222803&width=416" },
  { id: 5, name: "Apple MacBook Pro", price: 1999.99, image: "https://image.coolblue.nl/transparent/max/480xauto/content/b659e6a538f900a28a004df1eacd949e" },
  { id: 6, name: "Dell XPS 13 Laptop", price: 1299.99, image: "https://m.media-amazon.com/images/I/71E6EOj933L._UF350,350_QL80_.jpg" },
];

const cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Display products
products.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>$${product.price.toFixed(2)}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(productDiv);
});

// Add to cart function
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

// Update cart display with Remove button
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)} `;

    // Create Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.backgroundColor = "#dc3545";
    removeBtn.style.color = "white";
    removeBtn.style.border = "none";
    removeBtn.style.padding = "2px 6px";
    removeBtn.style.borderRadius = "3px";
    removeBtn.style.cursor = "pointer";

    removeBtn.onclick = () => {
      cart.splice(index, 1);  // Remove the item from cart array
      updateCart();           // Update the cart display
    };

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}
