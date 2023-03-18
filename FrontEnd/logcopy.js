const monLabel = document.createElement('label');
const inputText = document.createElement('input');
const monLabel2 = document.createElement('label');
const inputText2 = document.createElement('input');
const monButton = document.createElement('button');
const monParagraphe = document.createElement('p');
const monTitre = document.createElement('h2');
const monForm = document.createElement('form');
const divForm1 = document.createElement('div');
const divForm2 = document.createElement('div');

//en cas d'erreur //
const paragrapheError = document.createElement('p');
paragrapheError.innerHTML = "Le mot de passe ou le login est inccorrect, veuillez reessayer.";
paragrapheError.id="message_erreur";



monForm.classList.add("monformulaire");
inputText.classList.add('moninput');
inputText2.classList.add('moninput');
inputText.id='input1';
inputText2.id='input2';
divForm1.classList.add('divinput');
divForm2.classList.add('divinput2');
monTitre.classList.add('log_in');
monLabel.classList.add("monlabel");
monLabel2.classList.add("monlabel");
monButton.classList.add('monbouton');
monParagraphe.classList.add('monparagraphe');

document.querySelector('#madiv').appendChild(monForm);
document.querySelector('#madiv').appendChild(monParagraphe);

monForm.appendChild(monTitre);
monForm.appendChild(divForm1);
monForm.appendChild(divForm2);
monForm.appendChild(paragrapheError);
monForm.appendChild(monButton);

divForm1.appendChild(monLabel).innerHTML='E-mail';
divForm1.appendChild(inputText);
divForm2.appendChild(monLabel2).innerHTML='Mot de passe'
divForm2.appendChild(inputText2);

monTitre.innerHTML='Log in';
monButton.innerHTML = 'Se connecter';
monParagraphe.innerHTML = "mot de passe oublié";

document.querySelector('li:nth-child(3)').id='thirdelement';

async function ajoutProjet (){
    const formulaireProjet = document.querySelector('.monformulaire')
    formulaireProjet.addEventListener('submit', async function(event){
        event.preventDefault();

        let newProjet = {
            email: event.target.querySelector('#input1').value,
            password:  event.target.querySelector('#input2').value,
        };
        let chargeUtile = JSON.stringify(newProjet);

        let verif = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body : chargeUtile
        });
        
        const response = await verif.json();
        let valeurResponse = JSON.stringify(response.token)
        window.localStorage.setItem("idUser", valeurResponse);
        
        

        if(verif.ok)
        {
            window.location.href='file:///C:/Users/flore/OneDrive/Bureau/projet--3/Projet3/FrontEnd/admin.html'
        }
        else
        {
            if(paragrapheError.style.display = 'none')
            {
                paragrapheError.style.display = "block";
            }
        }
    })
}
ajoutProjet()
;

window.localStorage.setItem("clé", "c'est la clé");
