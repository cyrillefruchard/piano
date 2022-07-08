

function initialisation() {
    dic = { 'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'Na': 0, 'Nb': 0, 'Nc': 0, 'Nd': 0, 'Ne': 0, 'Nf': 0, 'Ng': 0, 'Nh': 0, 'Ni': 0, 'Nj': 0, 'Nk': 0, 'Nl': 0, 'Nm': 0, 'Nn': 0 }
    dic2 = { 'a': 'Sol--', 'b': 'La--', 'c': 'Si--', 'd': 'Do-', 'e': 'Re-', 'f': 'Mi-', 'g': 'Fa-', 'h': 'Sol-', 'i': 'La-', 'j': 'Si-', 'k': 'Do', 'l': "Re", 'm': 'Mi', 'n': 'Fa', 'o': 'Sol', 'p': 'La', 'q': 'Si', 'r': 'Do+', 's': 'Re+', 't': 'Mi+', 'u': 'Fa+', 'Na': 'Sol--d', 'Nb': 'La--d', 'Nc': 'Do-d', 'Nd': 'Re-d', 'Ne': 'Fa-d', 'Nf': 'Sol-d', 'Ng': 'La-d', 'Nh': 'Dod', 'Ni': 'Red', 'Nj': 'Fad', 'Nk': 'Sold', 'Nl': 'Lad', 'Nm': 'Do+d', 'Nn': 'Re+d', }
    dic_clavier_touchesblanches = { 65: 'a', 90: 'b', 69: 'c', 82: 'd', 84: 'e', 89: 'f', 85: 'g', 73: 'h', 79: 'i', 80: 'j', 221: 'k', 186: 'l', 13: 'm', 87: 'n', 88: 'o', 67: 'p', 86: 'q', 66: 'r', 78: 's', 188: 't', 190: 'u' }
    dic_clavier_touchesnoires = { 50: 'Na', 51: 'Nb', 53: 'Nc', 54: 'Nd', 56: 'Ne', 57: 'Nf', 48: 'Ng', 187: 'Nh', 8: 'Ni', 83: 'Nj', 68: 'Nk', 70: 'Nl', 72: 'Nm', 74: 'Nn' }
    musiques = {
        'Au clair de la lune': [['k'], ['k'], ['k'], ['l'], ['m'], [''], ['l'], [''], ['k'], ['m'], ['l'], ['l'], ['k'], [''], [''], ['k'], ['k'], ['k'], ['l'], ['m'], [''], ['l'], [''], ['k'], ['m'], ['l'], ['l'], ['k'], [''], [''], ['l'], ['l'], ['l'], ['l'], ['i'], [''], ['i'], [''], ['l'], ['k'], ['j'], ['i'], ['h'], [''], [''], ['k'], ['k'], ['k'], ['l'], ['m'], [''], ['l'], [''], ['k'], ['m'], ['l'], ['l'], ['k']],
        'How deep is your love': [['Ng'], ['Ni'], ['n'], ['o'], [''], ['o'], ['Ni'], ['n'], [''], ['o'], ['Ni'], [''], [''], [''], [''], [''], ['m'], ['n'], ['o'], ['Nk'], ['']
            , ['Nk'], ['Nk'], ['n'], ['o'], [''], ['Nk'], ['n'], [''], [''], [''], [''], [''], [''], ['o'], ['Nk'], ['Nl'], [''], ['Nl'], ['Nl'], ['o'], ['Nl'], ['r'], ['']
            , ['Nl'], [''], ['o'], [''], ['Ni'], [''], ['Ni'], ['n'], ['o'], ['Nk'], ['Nk'], ['Nk'], ['Nk'], ['Nl'], [''], ['o'], ['n'], [''], [''], [''], [''], [''], ['']
            , ['Ni'], ['Ni'], ['r'], [''], ['r'], [''], ['r'], [''], ['Nn'], ['r'], ['u'], [''], ['s'], [''], ['Nl'], [''], ['Nl']],
        'Marche Nuptiale': [['d'], ['d'], ['d'], ['d'], [''], [''], [''], [''], ['d'], ['d'], ['d'], ['d'], [''], [''], [''], [''], ['d'], ['d'], ['d'], ['d','f'], [''], ['d','f'], ['d','f'], ['d','f'], ['d','f'], [''], ['d','f']
            , ['d','f'], ['d','f'], ['d','f','h'], [''], ['d','f','h'], ['d','f','h'], ['d','f','h'], ['d','f','h']],
        'Song for Anna':[['l'],['Nj'],['q'],['p'],['Nj'],['s','e'],['l','Ne'],['Nj','i'],['Nm','l'],['l'],['Nj'],['q','e'],['l','Ne'],['Nj','i'],['p','l']
                        ,['l'],['Nj'],['p','f'],['j','h'],['m','j'],['o','m'],['j'],['Nj'],['o','f'],['j'],['m'],['Nh'],['l'],['m'],
                        ['i'],['Nh'],['m'],['f','p'],['o'],['m'],['Nm','i'],['Nh'],['m'],['q','f'],['Nh'],['m'],['b','p'],['Nh'],['m'],['Nc','o'],['Nh'],['m'],['e','o'],['i'],['l'],['b','Nj'],['i'],['m'],
                        ['Nj','e'],['i'],['l'],['i'],['j'],['Nh'],['l'],['l'],['Nj'],['q'],['p'],['Nj'],['s','e'],['l','Ne'],['Nj','i'],['Nm','l'],['l'],['Nj'],['q','e'],['l','Ne'],['Nj','i'],['p','l']
                        ,['l'],['Nj'],['p','f'],['j','h'],['m','j'],['o','m'],['j'],['Nj'],['o','f'],['j'],['m'],['Nh'],['l'],['m'],
                        ['i'],['Nh'],['m'],['f','p'],['o'],['m'],['Nm','i'],['Nh'],['m'],['q','f'],['Nh'],['m'],['b','p'],['Nh'],['m'],['Nc','o'],['Nh'],['m'],['e','o'],['i'],['l'],['b','Nj'],['i'],['m']
                        ,['Nj','e'],['i'],['l'],['i'],['j'],['k'],['j'],['s','o'],['Nm','p'],['s','q'],[''],['e'],['h'],['Nm','p'],['s','q'],['Nm','t'],[''],['q','s'],['s','e'],
                        [''],[''],['s'],['Nj'],['o'],['p','e'],[''],[''],['e'],['Nc'],['c'],['b'],['Nj','p'],['o','q'],['p','Nm'],[''],['f'],['i'],['p','Nm'],['q','s'],['Nm','t'],
                        ['s'],['Nm','t'],['q','i'],[''],[''],['p'],[''],['o','t'],['e','q'],['p'],['o','t'],['e','p'],['f'],['Ne'],['h'],['o','q'],['p','Nm'],['q','s'],[''],['e'],
                        ['h'],['p','Nm'],['q','s'],['Nm','t'],[''],['q','s'],['e','s'],[''],[''],['s'],['Nj'],['o']]
    }

    liste_musiques = ['Au clair de la lune', 'How deep is your love', 'Marche Nuptiale','Song for Anna'];
    console.log(liste_musiques[0]);
    localStorage.setItem('musique', '');
    localStorage.setItem('charge', 0);
    localStorage.setItem('liste_musiques', liste_musiques);
    window.onstorage = () => {
        musique_choisie = window.localStorage.getItem('musique');
        charge = window.localStorage.getItem('charge');
        if (musique_choisie in musiques & charge == 0) {
            window.localStorage.setItem('charge', 1);
            jouermusique(musique_choisie);

        }
        window.localStorage.setItem('musique', '');
    };

    document.addEventListener("keyup", function (event) {

        chiffre = event.keyCode;



        if (chiffre in dic_clavier_touchesblanches) {
            jouer(dic_clavier_touchesblanches[chiffre]);
        }
        if (chiffre in dic_clavier_touchesnoires) {
            jouer2(dic_clavier_touchesnoires[chiffre]);
        }


    });

}

function jouermusique(titre) {
    liste_notes = musiques[titre];
    var id = null;
    var pos = 0;
    clearInterval(id);
    longueur = liste_notes.length;
    id = setInterval(frame, 250);
    function frame() {
        if (pos == longueur) {
            clearInterval(id);
            window.localStorage.setItem('charge', 0);
        } else {
            pos++;
            notes = liste_notes[pos - 1];
            for (var a = 0; a < notes.length; a++) {
                note = notes[a];
                if (note === '') {
                } else {
                    if (note[0] === 'N') {
                        jouer2(note);
                    } else {
                        jouer(note);

                    }

                }
            }


        }
    }
}


function jouer(touche) {
    var id = null;
    var pos = 0
    const music = new Audio('musiques/' + dic2[touche] + '.m4a');
    music.play();

    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 255) {
            clearInterval(id);
        } else {
            pos++;

            if (pos < 5) {
                document.getElementById(touche).setAttribute("style", "box-shadow:0px 0px black;height:305px; background-color:rgb(255," + (Math.round(128 + pos / 2)) + ",255)");
                dic[touche] = 1
            }
            if (pos == 5) {
                document.getElementById(touche).setAttribute("style", "box-shadow:0px 0px black; height:305px; background-color:rgb(255," + (Math.round(128 + pos / 2)) + ",255)");
                dic[touche] = 0
            }
            if (pos > 5) {

                if (dic[touche] == 1) {
                    pos = 255;
                }
                else {
                    if (pos <= 40) {
                        document.getElementById(touche).setAttribute("style", "box-shadow:0px 0px black; height:305px; background-color:rgb(255," + (Math.round(128 + pos / 2)) + ",255)");
                    }
                    else {
                        document.getElementById(touche).setAttribute("style", "background-color:rgb(255," + (Math.round(128 + pos / 2)) + ",255)");
                    }


                }
            }


        }
    }
}

function jouer2(touche) {
    var id = null;
    var pos = 0
    const music = new Audio('musiques/' + dic2[touche] + '.m4a');
    music.play();

    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 255) {
            clearInterval(id);
        } else {
            pos++;
            if (pos < 5) {
                document.getElementById(touche).setAttribute("style", "box-shadow:0px 0px black;height:212px; background-color:rgb(" + (Math.round(127 - pos / 2)) + "," + (Math.round(127 - pos / 2)) + "," + (255 - pos) + ")");
                dic[touche] = 1
            }
            if (pos == 5) {
                document.getElementById(touche).setAttribute("style", "box-shadow:0px 0px black;height:212px; background-color:rgb(" + (Math.round(127 - pos / 2)) + "," + (Math.round(127 - pos / 2)) + "," + (255 - pos) + ")");
                dic[touche] = 0
            }
            if (pos > 5) {

                if (dic[touche] == 1) {
                    pos = 255;
                }
                else {
                    if (pos <= 40) {
                        document.getElementById(touche).setAttribute("style", "box-shadow:0px 0px black;height:212px; background-color:rgb(" + (Math.round(127 - pos / 2)) + "," + (Math.round(127 - pos / 2)) + "," + (255 - pos) + ")");
                    }
                    else {
                        document.getElementById(touche).setAttribute("style", "background-color:rgb(" + (Math.round(127 - pos / 2)) + "," + (Math.round(127 - pos / 2)) + "," + (255 - pos) + ")");
                    }


                }
            }



        }
    }
}