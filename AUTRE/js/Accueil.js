var parcourirDiv = document.getElementById('Parcourir1');
var declare = document.getElementById('decouvrir');


function ajoutDiv(qte){
    for(let i=0; i<qte; i++){
        let clone = parcourirDiv.cloneNode(true);
        declare.appendChild(clone);
    }
}

ajoutDiv(3);



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
