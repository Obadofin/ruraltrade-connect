async function fetchProducts() {
  const response = await fetch('http://localhost:5000/api/products');
  const products = await response.json();

  const container = document.getElementById('product-list');
  container.innerHTML = products
    .map(
      (p) => `
      <div style="border:1px solid #ccc;padding:10px;width:200px;">
        <h4>${p.name}</h4>
        <p>${p.description}</p>
        <p><b>₦${p.price}</b></p>
      </div>
    `
    )
    .join('');
}
