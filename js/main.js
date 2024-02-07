// JEU DE LA FOURCHETTE AVEC DES BOITE DE DIALOGUES "prompt" et "alert"

// 1 Générer le nombre à trouver :le nombre secret

let compteur = 0;

let numberSecret = Math.round(Math.random() * 500);
console.log(numberSecret);

// 2 Faire trouver le nombre aléatoire au joueur

let userNumber = prompt("Proposer un nombre :");
console.log(userNumber);

// Boucle test

while (userNumber !== numberSecret) {
  if (userNumber < numberSecret) {
    userNumber = parseInt(prompt("Le nombre proposé est trop petit !"));
    compteur++;
  } else if (userNumber > numberSecret) {
    userNumber = parseInt(prompt("Le nombre proposé est trop grand !"));
    compteur++;
  }
}

// Si le nombre est trouvé

if (userNumber) {
  alert(`Gagné, vous avez trouvé le nombre secret en ${compteur} essais !`);
  console.log(compteur);
}
