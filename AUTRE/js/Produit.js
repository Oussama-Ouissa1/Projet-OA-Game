var descGamerDiv = document.getElementById('descGamer');
var declare = document.getElementById('setupGamer');

function ajoutDiv(qte){
    for(let i=0; i<qte; i++){
        let clone = descGamerDiv.cloneNode(true);
        declare.appendChild(clone);
    }
}
ajoutDiv(4);



var moniteur = document.getElementById('moniteurs');

function moniteurDiv(qte){
    for(let i=0; i<qte; i++){
        let clone = descGamerDiv.cloneNode(true);
        moniteur.appendChild(clone);
    }
}
moniteurDiv(5);



var chaise = document.getElementById('chaise');

function chaiseDiv(qte){
    for(let i=0; i<qte; i++){
        let clone = descGamerDiv.cloneNode(true);
        chaise.appendChild(clone);
    }
}
chaiseDiv(5);



var accessoir = document.getElementById('accessoir');

function accessoirDiv(qte){
    for(let i=0; i<qte; i++){
        let clone = descGamerDiv.cloneNode(true);
        accessoir.appendChild(clone);
    }
}
accessoirDiv(5);