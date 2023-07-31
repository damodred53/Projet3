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
paragrapheError.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
paragrapheError.id="message_erreur";
// fin de la gestion des cas d'erreur //


monForm.classList.add("monformulaire");
inputText.classList.add('moninput');
inputText2.classList.add('moninput');
inputText.id='input1';
inputText2.id='input2';
inputText2.setAttribute('type', 'password');
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
        window.localStorage.removeItem('tokenUser');
        let newProjet = {
            email: event.target.querySelector('#input1').value,
            password:  event.target.querySelector('#input2').value,
        };
        let chargeUtile = JSON.stringify(newProjet);

        let response = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body : chargeUtile
        });
        
        let valeurResponse = await response.json();
        let token = await valeurResponse.token;
        localStorage.setItem("tokenUser", token);
        

        if(token != null)
        {
            window.location.href='index.html';
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

