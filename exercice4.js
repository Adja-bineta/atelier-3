// Demander le prix HT à l'utilisateur
var prixHT = parseFloat(prompt("Entrez le prix HT :"));

// Calculer le prix TTC avec TVA 20%
var tauxTVA = 0.2;
var prixTTC = prixHT * (1 + tauxTVA);

// Modifier le contenu du body avec le prix TTC
document.body.innerText = "Le prix TTC avec TVA 20% est : " + prixTTC.toFixed(2) + " €";