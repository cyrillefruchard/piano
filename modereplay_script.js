function lancermusique(numeromusique){
    liste_musiques=localStorage.getItem('liste_musiques').split(",");
    musique=liste_musiques[numeromusique];
    localStorage.setItem('musique', musique);
}

