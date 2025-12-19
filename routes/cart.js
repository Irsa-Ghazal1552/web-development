const existingItem = cart.items.find(
  item => item.product._id.toString() === productId
);

if (existingItem) {
  existingItem.quantity++;
} else {
  cart.items.push(newItem);
}
