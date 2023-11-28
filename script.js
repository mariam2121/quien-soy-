function shuffleOptions(groupId) {
    const group = document.getElementById(groupId);
    const options = Array.from(group.children);
    options.shift(); // Elimina la opción "Categorias"
    options.sort(() => Math.random() - 0.5);
    group.innerHTML = "";
    group.appendChild(document.createElement("option")); // Añade la opción "Categorias" nuevamente
    options.forEach(option => group.appendChild(option));
  }

  // Llama a la función para reorganizar aleatoriamente las opciones de cada grupo
  shuffleOptions("influencers-group");
  shuffleOptions("cantantes-group");
  shuffleOptions("actores-group");