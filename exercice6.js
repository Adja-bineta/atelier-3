        function calculerTTC() {
            var prixHT = parseFloat(document.getElementById("prixHT").value);
            var tauxTVA = parseFloat(document.getElementById("tauxTVA").value);

            if (isNaN(prixHT) || isNaN(tauxTVA)) {
                alert("Veuillez entrer des valeurs numériques valides.");
                return;
            }

            var prixTTC = prixHT * (1 + tauxTVA / 100);

            var resultatElement = document.getElementById("resultat");
            resultatElement.innerHTML = "Prix TTC : " + prixTTC.toFixed(2);

            if (prixTTC > 100) {
                resultatElement.style.color = "red";
            } else {
                resultatElement.style.color = "green";
            }
        }

        console.log(resultatElement)