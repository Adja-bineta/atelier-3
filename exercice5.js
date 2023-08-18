// Demander le prix HT à l'utilisateur
var prixHT = parseFloat(prompt("Entrez le prix HT :"));

// Demander le taux de TVA à l'utilisateur
var tauxTVA = parseFloat(prompt("Entrez le taux de TVA en pourcentage :"));

// Calculer le prix TTC avec le taux de TVA entré par l'utilisateur
var tauxDecimal = tauxTVA / 100;
var prixTTC = prixHT * (1 + tauxDecimal);

// Modifier le contenu du body avec le prix TTC
document.body.innerText = "Le prix TTC avec une TVA de " + tauxTVA + "% est : " + prixTTC.toFixed(2) + " €";