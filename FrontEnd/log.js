const monLabel = document.createElement('label');
const inputText = document.createElement('input');
const monLabel2 = document.createElement('label');
const inputText2 = document.createElement('input');
const monLien = document.createElement('a');
const monParagraphe = document.createElement('p');
const monTitre = document.createElement('h2')
const monForm = document.createElement('form');
const divForm1 = document.createElement('div')
const divForm2 = document.createElement('div')



monForm.classList.add("monformulaire");
inputText.classList.add('moninput');
inputText2.classList.add('moninput');
divForm1.classList.add('divinput');
divForm2.classList.add('divinput2');



document.querySelector('#madiv').appendChild(monForm);
document.querySelector('#madiv').appendChild(monLien);
document.querySelector('#madiv').appendChild(monParagraphe);

monForm.appendChild(monTitre);
monForm.appendChild(divForm1);
monForm.appendChild(divForm2);

divForm1.appendChild(monLabel).innerHTML='E-mail';
divForm1.appendChild(inputText);
divForm2.appendChild(monLabel2).innerHTML='Mot de passe'
divForm2.appendChild(inputText2);

monTitre.innerHTML='Log in';
monLien.innerHTML = 'Se connecter';
monParagraphe.innerHTML = "mot de passe oublié";







    
    


















 

   
