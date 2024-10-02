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




function openBurger(){
    const navbar = document.querySelector('.navbarBurger1')
    navbar.style.display = 'block'
    const nv1 = document.querySelector('.nv1')
    nv1.style.display = 'none'
    const nv2 = document.querySelector('.nv2')
    nv2.style.display = 'block'
}

function closeBurger(){
    const navbar = document.querySelector('.navbarBurger1')
    navbar.style.display = 'none'
    const nv2 = document.querySelector('.nv2')
    nv2.style.display = 'none'
    const nv1 = document.querySelector('.nv1')
    nv1.style.display = 'block'
}