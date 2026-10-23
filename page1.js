const mainContainer = document.getElementById("sectionGroupe");

const essentiel = {
  groupeName: "Votre essentiel",
  isUnique: true,
  options: [
    { name: "Fond de teint", price: "160,00 DH" },
    { name: "Rouge à lèvres", price: "120,00 DH" }
  ]
};

const reference = {
  groupeName: "Votre teinte",
  options: [
    { id: "01", color: "#c38f78" },
    { id: "02", color: "#925164" },
    { id: "03", color: "#b56e58" },
    { id: "04", color: "#b13e53" },
    { id: "05", color: "#5c3043" },
    { id: "06", color: "#523833" }
  ]
};

const fini = {
  groupeName: "Le fini",
  isUnique: true,
  options: [
    { id: "mat", title: "Mat", subtitle: "Velouté · Inclus" },
    { id: "brillant", title: "Brillant", subtitle: "Lumineux · + 15 DH" }
  ]
};

let stock = [essentiel, reference, fini];

function sectionGroupe() {
  mainContainer.innerHTML = "";

  stock.forEach((groupe, index) => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "group-section";

    const headerDiv = document.createElement("div");
    headerDiv.className = "group-header";
    
    const title = document.createElement("h3");
    title.textContent = `0${index + 1} ${groupe.groupeName}`;
    headerDiv.appendChild(title);

    if (groupe.isUnique) {
      const choix = document.createElement("span");
      choix.className = "subtitle-choice";
      choix.textContent = "Choix unique";
      headerDiv.appendChild(choix);
    }
    groupDiv.appendChild(headerDiv);

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";

    // --- CAS 1 : ESSENTIEL ---
    if (groupe === essentiel) {
      optionsContainer.className = "options-container cards-container";
      groupe.options.forEach((opt, i) => {
        const label = document.createElement("label");
        label.className = `custom-card ${i === 0 ? 'selected' : ''}`;

        const input = document.createElement("input");
        input.type = "radio";
        input.name = groupe.groupeName;
        input.value = opt.name;
        if (i === 0) input.checked = true;

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        const cardTitle = document.createElement("span");
        cardTitle.className = "card-title";
        cardTitle.textContent = (i === 0 ? '✓ ' : '') + opt.name;

        const cardSubtitle = document.createElement("span");
        cardSubtitle.className = "card-subtitle";
        cardSubtitle.textContent = opt.price;

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardSubtitle);
        label.appendChild(input);
        label.appendChild(cardContent);
        optionsContainer.appendChild(label);
      });
    }

    // --- CAS 2 : TEINTE ---
    else if (groupe === reference) {
      optionsContainer.className = "options-container shades-container";
      groupe.options.forEach((opt, i) => {
        const label = document.createElement("label");
        label.className = `colors ${i === 0 ? 'active' : ''}`;

        const input = document.createElement("input");
        input.type = "radio";
        input.name = groupe.groupeName;
        input.value = opt.id;
        if (i === 0) input.checked = true;

        const swatchCircle = document.createElement("span");
        swatchCircle.className = "swatch-circle";
        swatchCircle.style.backgroundColor = opt.color;

        const swatchLabel = document.createElement("span");
        swatchLabel.className = "swatch-label";
        swatchLabel.textContent = (i === 0 ? '✓ ' : '') + opt.id;

        label.appendChild(input);
        label.appendChild(swatchCircle);
        label.appendChild(swatchLabel);
        optionsContainer.appendChild(label);
      });
    }

    // --- CAS 3 : FINI ---
    else if (groupe === fini) {
      optionsContainer.className = "options-container cards-container";
      groupe.options.forEach((opt, i) => {
        const label = document.createElement("label");
        label.className = `custom-card ${i === 0 ? 'selected' : ''}`;

        const input = document.createElement("input");
        input.type = "radio";
        input.name = groupe.groupeName;
        input.value = opt.id;
        if (i === 0) input.checked = true;

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        const cardTitle = document.createElement("span");
        cardTitle.className = "card-title";
        cardTitle.textContent = (i === 0 ? '✓ ' : '') + opt.title;

        const cardSubtitle = document.createElement("span");
        cardSubtitle.className = "card-subtitle";
        cardSubtitle.textContent = opt.subtitle;

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardSubtitle);
        label.appendChild(input);
        label.appendChild(cardContent);
        optionsContainer.appendChild(label);
      });
    }

    groupDiv.appendChild(optionsContainer);
    mainContainer.appendChild(groupDiv);
  });

  addInteractivity();
}

function addInteractivity() {
  stock.forEach(groupe => {
    const inputs = document.querySelectorAll(`input[name="${groupe.groupeName}"]`);
    
    inputs.forEach(input => {
      input.addEventListener('change', (e) => {

        inputs.forEach(inp => {
          const card = inp.closest('.custom-card') || inp.closest('.colors');
          card.classList.remove('selected', 'active');
          
          if (groupe === reference) {
            const labelSpan = card.querySelector('.swatch-label');
            labelSpan.textContent = labelSpan.textContent.replace('✓ ', '');
          } else {
            const titleSpan = card.querySelector('.card-title');
            if (titleSpan) titleSpan.textContent = titleSpan.textContent.replace('✓ ', '');
          }
        });

    
        const currentCard = e.target.closest('.custom-card') || e.target.closest('.colors');
        currentCard.classList.add(groupe === reference ? 'active' : 'selected');

        
        if (groupe === reference) {
          const currentLabel = currentCard.querySelector('.swatch-label');
          currentLabel.textContent = '✓ ' + currentLabel.textContent;
        } else {
          const currentTitle = currentCard.querySelector('.card-title');
          if (currentTitle) currentTitle.textContent = '✓ ' + currentTitle.textContent;
        }
      });
    });
  });
}

sectionGroupe();