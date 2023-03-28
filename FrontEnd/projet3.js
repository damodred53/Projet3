
// intégration dynamique des images et des titres des projets //

let savedData = null;
async function useFetcher () {
const response = await fetch("http://localhost:5678/api/works")
savedData = await response.json()
    {
        for (let i =0; i<savedData.length ; i++)
    {
        const maGallerie = document.querySelector(".gallery")
        const mafigure = document.createElement("figure")
        const monImage = document.createElement("img")
        const maCaption = document.createElement("p")
        monImage.src = savedData[i].imageUrl
        maCaption.innerHTML = savedData[i].title
        maGallerie.appendChild(mafigure)
        mafigure.appendChild(monImage)
        mafigure.appendChild(maCaption)  
    }
    }
}
useFetcher()



// intégration des boutons de filtres dans la page hors-admin //

const buttonPortfolio = document.querySelector("#button-portfolio").innerHTML = "Tous";
const buttonPortfolio1 =document.querySelector("#button-portfolio-1").innerHTML = "Objets";
const buttonPortfolio2 =document.querySelector("#button-portfolio-2").innerHTML = "Appartements";
const buttonPortfolio3 =document.querySelector("#button-portfolio-3").innerHTML = "Hôtels & restaurants";

// intégration des trois boutons de filtrage //

const eventButtonObjet = document.querySelector('#button-portfolio-1')
eventButtonObjet.addEventListener('click', function (){
    document.querySelector('.gallery').innerHTML = "";
        let dataFiltered = savedData.filter(function(savedData)
        {
            return savedData.categoryId ==1
        })
    for (let i = 0 ; i <dataFiltered.length ; i++)
    {
        const maGallerie = document.querySelector(".gallery")
        const mafigure = document.createElement("figure")
        const monImage = document.createElement("img")
        const maCaption = document.createElement("p")
        monImage.src = dataFiltered[i].imageUrl
        maCaption.innerHTML = dataFiltered[i].title
        maGallerie.appendChild(mafigure)
        mafigure.appendChild(monImage)
        mafigure.appendChild(maCaption)
    }
})


const eventButtonAppartement = document.querySelector('#button-portfolio-2')
eventButtonAppartement.addEventListener('click', function (){
    document.querySelector('.gallery').innerHTML = "";
        let dataFiltered = savedData.filter(function(savedData)
        {
            return savedData.categoryId ==2   
        })
    for (let i = 0 ; i <dataFiltered.length ; i++)
    {
        const maGallerie = document.querySelector(".gallery")
        const mafigure = document.createElement("figure")
        const monImage = document.createElement("img")
        const maCaption = document.createElement("p")
        monImage.src = dataFiltered[i].imageUrl
        maCaption.innerHTML = dataFiltered[i].title
        maGallerie.appendChild(mafigure)
        mafigure.appendChild(monImage)
        mafigure.appendChild(maCaption)
    }  
})

const eventButtonHotelRestaurant = document.querySelector('#button-portfolio-3')
eventButtonHotelRestaurant.addEventListener('click', function (){
    document.querySelector('.gallery').innerHTML = "";
        let dataFiltered = savedData.filter(function(savedData)
        {
            return savedData.categoryId ==3   
        })
    for (let i = 0 ; i <dataFiltered.length ; i++)
    {
        const maGallerie = document.querySelector(".gallery")
        const mafigure = document.createElement("figure")
        const monImage = document.createElement("img")
        const maCaption = document.createElement("p")
        monImage.src = dataFiltered[i].imageUrl
        maCaption.innerHTML = dataFiltered[i].title
        maGallerie.appendChild(mafigure)
        mafigure.appendChild(monImage)
        mafigure.appendChild(maCaption)
    }
})

// bouton de filtre "tous" rendant visible l'ensemble des projets //

const eventButtonTous = document.querySelector('.button-portfolio')
eventButtonTous.addEventListener('click', function (){
    document.querySelector('.gallery').innerHTML = "";
    useFetcher()
})




// intégration des éléments une fois l'utilisateur connecté en admin //
const newDiv = document.createElement('div');
const firstBlock = document.createElement('div');
const firstIcon = document.createElement('img');
const firstEdition = document.createElement('p');
const myLink = document.createElement('a');
const indoorLink = document.createElement('p');

newDiv.classList.add('newdiv');
firstBlock.classList.add('firstblock');
firstIcon.classList.add('firsticon');
firstEdition.classList.add('firstedition');
myLink.classList.add('mylink');
indoorLink.classList.add('indoorlink');

firstIcon.src = "assets/icons/edit_square.png";
firstIcon.style.color="white";
firstEdition.innerText = "Mode édition";
indoorLink.innerHTML = "publier les changements";

//rattachement des éléments de la page admin//

document.querySelector('.blackbanner').appendChild(newDiv);
document.querySelector('.newdiv').appendChild(firstBlock);
document.querySelector('.firstblock').appendChild(firstIcon);
document.querySelector('.firstblock').appendChild(firstEdition);
document.querySelector('.newdiv').appendChild(myLink);
document.querySelector('.mylink').appendChild(indoorLink);

// activation de la modale et de l'overlay, une fois le token admin récupéré //

if (window.localStorage.getItem('tokenUser') !=null)
{
    document.querySelector('.blackbanner').style.display = 'block';
    document.querySelector('.div-button-portfolio').style.display = 'none';
    document.querySelector('.modifier').style.display = 'flex';
    document.querySelector('#modifierId').style.display = 'flex';
    document.querySelector('.lien-header').innerHTML = "logout";
}

// ouverture de la modale depuis l'écran admin //

document.querySelector('#modifierId').addEventListener('click', function (){
    let resultToken = window.localStorage.getItem('tokenUser');
    console.log(resultToken);
    if (resultToken != null)
    {
        document.querySelector('.overlay').style.display = 'flex';
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('.projectcontainer').innerHTML=' ';
        fetcher()
    }
    }
)

document.querySelector('#modifier_2').addEventListener('click', function (){
    let resultToken = window.localStorage.getItem('tokenUser');
    console.log(resultToken);
    if (resultToken != null)
    {
        document.querySelector('.overlay').style.display = 'flex';
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('.projectcontainer').innerHTML=' ';
        fetcher()
    }
    }
)

// création de ma modale de manière dynamique //

// icone de la croix //
const linkCross = document.createElement('a')
linkCross.classList.add('linkcross');
const cross = document.createElement('img');
cross.classList.add('cross');
cross.src=('./assets/images/Vector.png');
document.querySelector('.modal').appendChild(linkCross);
document.querySelector('.linkcross').appendChild(cross);
  
// titre de la galerie //
const galeriePhoto = document.createElement('p');
galeriePhoto.classList.add('galeriephoto');
galeriePhoto.innerHTML = "Galerie photo";
document.querySelector('.modal').appendChild(galeriePhoto);

// création de la grid //
const projectContainer = document.createElement('div');
projectContainer.classList.add('projectcontainer');
document.querySelector('.modal').appendChild(projectContainer);

// création du séparateur entre la grid et le boutton de validation //
const separation = document.createElement('div');
separation.classList.add('separation');
document.querySelector('.modal').appendChild(separation);

// création du boutton d'ajout d'une photo //
const buttonAddPhoto = document.createElement('button');
buttonAddPhoto.innerHTML = "Ajouter une photo";
buttonAddPhoto.classList.add('addphoto');
document.querySelector('.modal').appendChild(buttonAddPhoto);

// création du lien pour supprimer un projet //
const eraseProject = document.createElement('a');
eraseProject.innerHTML = "Supprimer la galerie";
eraseProject.classList.add('removeproject');
document.querySelector('.modal').appendChild(eraseProject);

 // fermer la modale avec la croix //
   
 document.querySelector('.linkcross').addEventListener('click', function ()
 {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
 })

 // fermer la modale en cliquant hors du cadre //

 document.querySelector('.overlay').addEventListener('click', function ()
 {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
 })


 // fonction permettant l'intégration de la page dynamique de la modale //

function fetcher() {
 
    for (let i =0; i<savedData.length ; i++)
    {
        let innerDiv = document.createElement('div');
        let monImage = document.createElement('img');
        let monParagraphe = document.createElement('p');
        let linkDelete = document.createElement('a');
        let elargissement = document.createElement('img');
        let dustBinImage = document.createElement('img');

        innerDiv.classList.add('innerdiv');
        linkDelete.classList.add('linkdelete');
        elargissement.classList.add('elargissement');
        dustBinImage.classList.add('dustbinimage');

        identifiant = innerDiv.id=i+1;
        
        monImage.src = savedData[i].imageUrl;
        monParagraphe.innerHTML = 'éditer';
        elargissement.src = 'assets/icons/élargissement.png';
        dustBinImage.src = "assets/icons/dustbin.png";
        

        document.querySelector('.projectcontainer').appendChild(innerDiv);
        innerDiv.appendChild(linkDelete);
        innerDiv.appendChild(elargissement);
        innerDiv.appendChild(monImage);
        innerDiv.appendChild(monParagraphe);
        linkDelete.appendChild(dustBinImage);


        linkDelete.addEventListener('click', function()
        {
            const fetchToken = localStorage.getItem('tokenUser');
            if (fetchToken != null)
            console.log(fetchToken)
        {
            let id = savedData[i].id
           const response = fetch(`http://localhost:5678/api/works/${id}`,
            {
                method:'DELETE',
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${fetchToken}`
                }
            })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    console.log('Données envoyées avec succès !');
                    if (innerDiv.id == id)
                    {
                        innerDiv.remove();
                    }
                } else {
                    console.error('Erreur lors de l\'envoi des données : ', response.status);
                }
        }
        )}
})
    }}

    const toFormAddPhoto = document.querySelector('.addphoto').addEventListener('click', function()
    {
        // suppression des parties de la modale précédente //

        document.querySelector('.galeriephoto').style.display = 'none';
        document.querySelector('.projectcontainer').style.display = 'none';
        document.querySelector('.separation').style.display = 'none';
        document.querySelector('.addphoto').style.display = 'none';
        document.querySelector('.removeproject').style.display = 'none';

        // intégration de la page permettant l'ajout de projet //

        // ajout du titre de la page //
        const divAjoutPhoto = document.createElement('div');
        divAjoutPhoto.classList.add('divAjoutPhoto');
        divAjoutPhoto.innerHTML = "Ajout photo";

        // ajout du formulaire //

        const formAddProject = document.createElement('form');
        formAddProject.classList.add('formaddproject');

        // ajout de la division formulaire-titre //
        const divTitre = document.createElement('div')
        divTitre.classList.add('divtitre');

        // ajout de la division formulaire-categorie //
        const divcategorie = document.createElement('div');
        divcategorie.classList.add('divcategorie');

        // ajout de la partie 'titre' du formulaire //
        const labelTitre = document.createElement('label');
        labelTitre.classList.add('labeltitre');


        // ajout de la partie intégration d'une image //
        const ajoutPhoto = document.createElement('div');
        ajoutPhoto.classList.add('ajoutphoto');

        

        document.querySelector('.modal').appendChild(divAjoutPhoto);
        document.querySelector('.modal').appendChild(formAddProject);

        document.querySelector('.formaddproject').appendChild(ajoutPhoto);
        document.querySelector('.formaddproject').appendChild(divTitre);
        document.querySelector('.formaddproject').appendChild(divcategorie);

    })
    
            
        
    

  