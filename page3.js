const makeupProducts = [
  { id: "m1", name: "Fond de Teint Mat", category: "Visage", variant: "Beige Clair", price: 25.00, picture: "foundation1.png" },
  { id: "m2", name: "Rouge à Lèvres Velours", category: "Lèvres", variant: "Rouge Intense", price: 18.50, picture: "lipstick-red.png" },
  { id: "m3", name: "Rouge à Lèvres Velours", category: "Lèvres", variant: "Nude Rosé", price: 18.50, picture: "lipstick-nude.png" },
  { id: "m4", name: "Mascara Volume", category: "Yeux", variant: "Noir", price: 15.00, picture: "mascara.png" },
  { id: "m5", name: "Palette Fards à Paupières", category: "Yeux", variant: "Automne", price: 35.00, picture: "palette.png" },
  { id: "m6", name: "Blush Poudre", category: "Visage", variant: "Pêche", price: 20.00, picture: "blush.png" },
  { id: "m7", name: "Set de 5 Pinceaux Pro", category: "Accessoire", variant: "N/A", price: 28.00, picture: "brushes.png" },
  { id: "m8", name: "Éponge Beauty Blender", category: "Accessoire", variant: "Rose", price: 8.50, picture: "blender.png" },
  { id: "m9", name: "Trousse de Voyage", category: "Accessoire", variant: "Noir", price: 16.00, picture: "bag.png" },
  { id: "m10", name: "Recourbe-cils Précision", category: "Accessoire", variant: "Métal", price: 12.00, picture: "curler.png" }
];

let makeupCart = [
  { id: "m1", name: "Fond de Teint Mat", variant: "Beige Clair", price: 25.00, quantity: 1, picture: "foundation1.png" },
  { id: "m2", name: "Rouge à Lèvres Velours", variant: "Rouge Intense", price: 18.50, quantity: 2, picture: "lipstick-red.png" },
  { id: "m6", name: "Blush Poudre", category: "Visage", variant: "Pêche", price: 20.00, quantity: 1, picture: "blush.png" },
  { id: "m4", name: "Mascara Volume", category: "Yeux", variant: "Noir", price: 15.00, quantity: 1, picture: "mascara.png" }
]
// fonction d'affichage 
function affichage() {
  const productsElement = document.querySelector(".product-list")
  productsElement.innerHTML = "";

  for (const produit of makeupCart) {
    productsElement.innerHTML += ` <article class="product" data-id="${produit.id}">
        <div class="picture">
        <img src="assets/${produit.picture}" alt="${produit.name}">
        </div>
        <div class="product-info">
            <h3 class="name">${produit.name}</h3>
            <p class="variant">${produit.variant}</p>
        </div>
        <div class="price">${produit.price.toFixed(2)} DH</div>
        <div class="quantity-control">
            <button
                type="button"
                class="minus"
                aria-label="Diminuer la quantité"
            >−</button>
            <span class="quantity">${produit.quantity}</span>
            <button
                type="button"
                class="plus"
                aria-label="Augmenter la quantité"
            >+</button>
        </div>
        <span class="line-total">${(produit.price * produit.quantity).toFixed(2)} DH</span>
    </article>
    `
  }
}


const liste = document.querySelector(".product-list");

liste.addEventListener("click", function (event) {
  const bouton = event.target.closest("button");
  if (!bouton) return;

  const card = bouton.closest(".product");
  const id = card.dataset.id;

  for (const item of makeupCart) {
    if (item.id === id) {
      if (bouton.classList.contains("plus")) {
        item.quantity++;
      }
      if (bouton.classList.contains("minus") && item.quantity > 1) {
        item.quantity--;
      }
    }
  }

  affichage();
});


affichage()


//const card = document.createElement("article");
//card.className = "product";


// const picture = document.createElement("div");
// image.className = "picture";
// const image = document.createElement("img");
// image.src = "assests/picture";
// image.alt = produit.name;
// cart.appendChild(picture);


