// Example: Retrieve cart items from local storage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Example: Display cart items
const cartItemsContainer = document.getElementById('cart-items');
cartItemsContainer.innerHTML = '';

for (const item of cartItems) {
  const cartItemElement = document.createElement('div');
  cartItemElement.textContent = `${item.name} - $${item.price}`;
  cartItemsContainer.appendChild(cartItemElement);
}

// Example: Calculate and display total price
const totalPriceElement = document.getElementById('total-price');
const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
totalPriceElement.textContent = `Total Price: $${totalPrice}`;
