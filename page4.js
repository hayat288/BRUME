const stepper = document.getElementById("stepper");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll("#stepper .circle");
const lines = document.querySelectorAll("#stepper .line");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    const plein = idx < currentActive;        

   
    circle.textContent = idx + 1 < currentActive ? "✓" : idx + 1;

    circle.classList.toggle("text-bg-danger", plein);
    circle.classList.toggle("bg-danger-subtle", !plein);
    circle.classList.toggle("text-danger", !plein);
  });

  lines.forEach((line, idx) => {
    const plein = idx + 1 < currentActive;   
    line.classList.toggle("border-danger", plein);
    line.classList.toggle("border-danger-subtle", !plein);
  });
}

update(); 


//REGEX
const aujourdhui = new Date().toLocaleDateString("sv-SE")

const champs = [
  { id: "nom", regex: /^[A-Za-zÀ-ÿ0-9' -]{2,50}$/, message: "Nom invalide" },
  { id: "prix", regex: /^\d+(\.\d{1,2})?$/, message: "Prix invalide" },
  { id: "image", regex: /^https?:\/\/[^\s/$.?#][^\s]*$/i, message: "URL invalide" },
  { id: "description", regex: /^[\s\S]{10,300}$/, message: "Description invalide" }
]
const champsPromo = [
  {
    id: "reduction",
    regex: /^(100|[1-9]\d?)$/,            
    message: "Réduction entre 1 et 100"
  },
  {
    id: "date-fin",
    regex: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    message: "Date invalide ou déjà passée",
    verifier: (valeur) => valeur >= aujourdhui  
  }
]

function validerChamp(champ) {
  const input = document.getElementById(champ.id)
  const feedback = input.parentElement.querySelector(".invalid-feedback")
  const valeur = input.value.trim()

  const valide = champ.regex.test(valeur) &&
                 (!champ.verifier || champ.verifier(valeur))

  input.classList.toggle("is-invalid", !valide)
  input.classList.toggle("is-valid", valide)
  feedback.textContent = valide ? "" : champ.message

  return valide
}

function validerEtape1() {
  let toutValide = true
  
  champs.forEach(function (champ) {
    if (!validerChamp(champ)) toutValide = false
  })
  if (promoCheck.checked) {
    champsPromo.forEach(function (champ) {
      if (!validerChamp(champ)) toutValide = false
    })
  }

  return toutValide
}


const promoCheck = document.getElementById("promo")
const promoInfo = document.getElementById("promo-info")

promoCheck.addEventListener("change", function () {
  if (promoCheck.checked) {
    promoInfo.classList.remove("d-none")
  } else {
    promoInfo.classList.add("d-none")
}
}) 




 // navigation
const suivant = document.getElementById("next")
const précédent = document.getElementById("prev")
const etape1 = document.getElementById("etape1")
const etape2 = document.getElementById("etape2")

suivant.addEventListener("click", () => {
  if (!validerEtape1()) return 

  etape1.setAttribute("hidden", "true")
  etape2.removeAttribute("hidden")
})

précédent.addEventListener("click", () => {
  etape2.setAttribute("hidden", "true")
  etape1.removeAttribute("hidden")
})


// validation etape2
const teintesList = document.getElementById("teintes-list")

function ajouterTeinte() {
  const div = document.createElement("div")
  div.className = "teinte d-flex align-items-center gap-2"
  div.innerHTML = `
    <input type="color" class="teinte-couleur form-control form-control-color">
    <input type="text" class="teinte-nom form-control" placeholder="Rouge Passion">
    <button type="button" class="remove-teinte btn btn-outline-danger">✕</button>
  `
  teintesList.appendChild(div)
}

document.getElementById("add-teinte").addEventListener("click", ajouterTeinte)

// supprimer une teinte (event delegation)
teintesList.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-teinte")) {
    e.target.closest(".teinte").remove()
  }
})
