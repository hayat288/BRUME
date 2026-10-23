const config = {
    categorie: {
        fond: { name: "Fond de teint", price: 160 },
        rouge: { name: "Rouge à lèvres", price: 120 }
    },
    teinte: {
        nude: { name: "Nude", price: 0 },
        rosewood: { name: "Rosewood", price: 0 },
        terracotta: { name: "Terracotta", price: 0 },
        cerise: { name: "Cerise", price: 0 },
        prune: { name: "Prune", price: 0 },
        chocolat: { name: "Chocolat", price: 0 }
    },
    fini: {
        mat: { name: "Mat", price: 10 },
        brillant: { name: "Brillant", price: 20 }
    }
};

let selectedConfig = {
    categorie: null,
    teinte: null,
    fini: null,
};


const produitsHTML = document.querySelectorAll('input[name="essentiel"]');
const teintesHTML = document.querySelectorAll('input[name="teinte"]');
const finisHTML = document.querySelectorAll('input[name="fini"]');


for (let cle in config.categorie) {
    let produit = config.categorie[cle];
    let id;

    if (cle === "fond") {
        id = "fond-de-teint";
    } else {
        id = "rouge-a-levres";
    }

    const label = document.querySelector(`label[for="${id}"]`);

    label.textContent = produit.name;

    const prix = document.createElement("span");
    prix.textContent = produit.price.toFixed(2) + " DH";

    label.appendChild(prix);
}


for (let cle in config.fini) {
    let finition = config.fini[cle];
    let id;

    if (cle === "mat") {
        id = "fini-mat";
    } else {
        id = "fini-brillant";
    }

    const label = document.querySelector(`label[for="${id}"]`);
    console.log(label)
    label.textContent = finition.name;

    const prix = document.createElement("span");
    prix.textContent = finition.price.toFixed(2) + " DH";

    label.appendChild(prix);

}
const prixtotalHTML = document.getElementById("prix-total")

let labels = document.querySelectorAll("label")
labels[0].addEventListener("click", fondd)
labels[1].addEventListener("click", rouge)
labels[2].addEventListener("click", nude)
labels[3].addEventListener("click", rosewood)
labels[4].addEventListener("click", terracotta)
labels[5].addEventListener("click", cerise)
labels[6].addEventListener("click", prune)
labels[7].addEventListener("click", chocolat)
labels[8].addEventListener("click", mat)
labels[9].addEventListener("click", brillant)



function fondd() {
    selectedConfig.categorie = config.categorie.fond.price;
    calculePrix();
}

function rouge() {
    selectedConfig.categorie = config.categorie.rouge.price;
     calculePrix();
}

function nude() {
    selectedConfig.teinte = config.teinte.nude.price;
     calculePrix();
}

function rosewood() {
    selectedConfig.teinte = config.teinte.rosewood.price;
     calculePrix();
}
function terracotta() {
    selectedConfig.teinte = config.teinte.terracotta.price;
    calculePrix();
}
function cerise() {
    selectedConfig.teinte = config.teinte.cerise.price;
    calculePrix();
}
function prune() {
    selectedConfig.teinte = config.teinte.prune.price;
     calculePrix();
}
function chocolat() {
    selectedConfig.teinte = config.teinte.chocolat.price;
    calculePrix();
}
function mat() {
    selectedConfig.fini = config.fini.mat.price;
     calculePrix();
}
function brillant() {
    selectedConfig.fini = config.fini.brillant.price;
     calculePrix();
}

// la somme :

function calculePrix() {
    let  somme = 0;
    for (key in selectedConfig) {
        somme += selectedConfig[key]  
    }
    prixtotalHTML.textContent = somme.toFixed(2) + " DH"
    return somme 

}

