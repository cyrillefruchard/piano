
//Création de la grille contenant les boutons (1 par musique). Comme le nombre de boutons est indéterminé, l'approche par des balises 
//HTML n'est pas idéale
var grille = document.createElement('div');
liste_musiques=localStorage.getItem('liste_musiques').split(",");
longueur_table=liste_musiques.length;
for (var i = 0; i < longueur_table; i++) { 
    const numeromusique=i;
    var item = document.createElement('div');
    var texte = document.createElement('div');
    texte.innerHTML=liste_musiques[i];
    item.setAttribute("class","item");
    item.setAttribute("id","mus"+numeromusique);
    item.appendChild(texte);
    item.onclick=function(){lancer(numeromusique)}; // Appel de la fonction définie ci-dessous
    
    grille.appendChild(item);
}
grille.setAttribute("id","grille")
document.getElementById("reste").appendChild(grille);



// Fonction: Si on sélectionne un bouton et qu'aucune musique est en cours, le bouton s'enfonce, devient bleu foncé,
// et la musique se lance.
function lancer(numeromusique){   
    if(localStorage.getItem('charge')==0){
        document.getElementById("mus"+numeromusique).setAttribute('style','background:cyan;box-shadow:none;transform:translate(5px ,5px)'); 
    };
    lancermusique(numeromusique);
}




// Cette partie est un trigger. Dès qu'une musique se termine, tous les boutons retrouvent leur style initial (bleu ciel + non enfoncé)
window.onstorage = () => {
    charge=window.localStorage.getItem('charge');
    if(charge==0){
        for (var i = 0; i < longueur_table; i++) { 
            const numeromusique=i;
            document.getElementById("mus"+numeromusique).setAttribute('style','none');
        }
    }
}