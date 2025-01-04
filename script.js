const result = document.querySelector(".result"); // Zone de résultat
const keys = document.querySelectorAll(".key"); // Tous les boutons
const clearButton = document.querySelector(".key.C"); // Bouton "C" pour clear
let currentInput = ""; // Variable pour stocker l'entrée actuelle

// Parcours tous les boutons de la calculatrice
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const value = key.textContent; // Valeur du bouton cliqué

    // Si le bouton "=" est cliqué, on évalue l'expression
    if (value === "=") {
      try {
        currentInput = eval(currentInput); // Évaluation de l'expression mathématique
        result.textContent = currentInput; // Affichage du résultat
      } catch {
        result.textContent = "Erreur"; // Si erreur dans l'expression
      }
    }
    // Si le bouton "C" est cliqué, on réinitialise l'entrée
    else if (value === "C") {
      currentInput = ""; // Réinitialiser l'entrée
      result.textContent = ""; // Effacer l'affichage
    }
    // Sinon, ajouter la valeur du bouton à l'entrée
    else {
      currentInput += value; // Ajouter le caractère à l'entrée
      result.textContent = currentInput; // Afficher l'entrée dans la zone de résultat
    }
  });
});
