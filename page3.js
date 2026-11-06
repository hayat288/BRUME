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

const totalElement = document.getElementById("totale");
const countElement = document.getElementById("item-count");

const grandTotalElement = document.getElementById("total");


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

liste.addEventListener("click", function (event) {// event delegation
  const bouton = event.target.closest("button");
  if (!bouton) return;

  const card = bouton.closest(".product");
  const id = card.dataset.id; // data-id

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
  calculerTotal();
});


affichage()



const rechercheElement = document.querySelector(".recherche");
const inputSearch = document.querySelector(".input-search");
const resultatRechercher = document.querySelector(".modal");

rechercheElement.addEventListener("click", function () {
  inputSearch.classList.remove("hidden");
});

inputSearch.addEventListener("input", function () {
  resultatRechercher.innerHTML = "";
  let valeur = inputSearch.value.toLowerCase();

 

  for (let produit of makeupProducts) {
    if (produit.name.toLowerCase().includes(valeur)) {
      let carte = document.createElement("div");
      carte.classList.add("result-item");


      let infos = document.createElement("div");
      infos.classList.add("result-info");

      let nom = document.createElement("p");
      nom.classList.add("result-name");
      nom.textContent = produit.name + " - " + produit.variant;

      let prix = document.createElement("p");
      prix.classList.add("result-price");
      prix.textContent = produit.price + " DH";

      let bouton = document.createElement("button");
      bouton.classList.add("btn-ajouter");
      bouton.textContent = "Ajouter";

      infos.appendChild(nom);
      infos.appendChild(prix);
      carte.appendChild(infos);
      carte.appendChild(bouton);
      resultatRechercher.appendChild(carte);
    }
  }
});


// fonction d'ajoute

function ajouterAuPanier(produit) {
  for (let product of makeupProducts) {
    if (product.id === produit.id) {
      product.quantity++;
      
    }
  }
  
}

  // calcule de total price 

  const LIVRAISON = 25;
  function calculerTotal() {
  let sousTotal = 0;
  let nombre = 0;

  for (const produit of makeupCart) {
    sousTotal = sousTotal + produit.price * produit.quantity;
    nombre = nombre + produit.quantity;
  }
  const totalFinal = sousTotal + LIVRAISON;

  totalElement.textContent = sousTotal.toFixed(2) + " DH";
  countElement.textContent = nombre;
  grandTotalElement.textContent = totalFinal.toFixed(2) + " DH";
}






