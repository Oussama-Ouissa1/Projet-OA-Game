var parcourirDiv = document.getElementById('Parcourir1');
var declare = document.getElementById('decouvrir');


function ajoutDiv(qte){
    for(let i=0; i<qte; i++){
        let clone = parcourirDiv.cloneNode(true);
        declare.appendChild(clone);
    }
}

ajoutDiv(3);

