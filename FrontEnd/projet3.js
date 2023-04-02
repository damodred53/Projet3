
// intégration dynamique des images et des titres des projets //

let savedData = null;
async function useFetcher () {
const response = await fetch("http://localhost:5678/api/works")
savedData = await response.json()
    {
        console.log(savedData)
        for (let i =0; i<savedData.length ; i++)
    {
        const maGallerie = document.querySelector(".gallery")
        const mafigure = document.createElement("figure")
        const monImage = document.createElement("img")
        const maCaption = document.createElement("p")
        monImage.src = savedData[i].imageUrl
        mafigure.id=savedData[i].id
        maCaption.innerHTML = savedData[i].title
        maGallerie.appendChild(mafigure)
        mafigure.appendChild(monImage)
        mafigure.appendChild(maCaption)  
        mafigure.classList.add('mafigure');
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
document.querySelector('.addphoto').addEventListener('click', function(){
    const modificationButton = document.querySelector('.modal');
    modificationButton.id = "heightmodal";
})

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

async function fetcher() {
 projectContainer.innerHTML="";
 const fetch2 = await fetch("http://localhost:5678/api/works")
 savedData = await fetch2.json()

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

        identifiant = innerDiv.id= savedData[i].id;
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
                        innerDiv.remove();
                        const figure = document.querySelectorAll('.mafigure')
                    for (let i = 0 ; i<figure.length; i++)
                    {
                        if (figure[i].id == id)
                        {
                            figure[i].remove()
                        }
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
        const photoSender = document.createElement('input');
        photoSender.classList.add('photosender');
        photoSender.setAttribute('type', 'file');
        photoSender.setAttribute('required', "");

        const divAjoutPhoto = document.createElement('div');
        divAjoutPhoto.classList.add('divAjoutPhoto');
        divAjoutPhoto.innerHTML = "Ajout photo";

        // ajout du formulaire //

        const formAddProject = document.createElement('form');
        formAddProject.classList.add('formaddproject');

        // ajout de la division formulaire-titre //
        const divTitre = document.createElement('div')
        divTitre.classList.add('divtitre');

        // ajout de la partie 'titre' du formulaire //
        const labelTitre = document.createElement('label');
        labelTitre.classList.add('labeltitre');
        labelTitre.innerHTML = "Titre";

        const formTextTitre1 = document.createElement('input');
        formTextTitre1.classList.add('formtexttitre'); 
        formTextTitre1.setAttribute('required', "");
        formTextTitre1.id = "formtexttitre1";

        // ajout de la division formulaire-categorie //
        const divcategorie = document.createElement('div');
        divcategorie.classList.add('divcategorie');

        const labelTitre2 = document.createElement('label');
        labelTitre2.classList.add('labeltitre');
        labelTitre2.innerHTML = "Catégorie";

        const formTextTitre2 = document.createElement('select');
        formTextTitre2.classList.add('formselectcategory'); 
        formTextTitre2.setAttribute('required', "");
        //formTextTitre2.setAttribute('type', 'select');
        formTextTitre2.id = "formselectcategory";
        const optionVoid = document.createElement('option');
        const option1 = document.createElement('option');
        option1.innerHTML = 'Objets';
        const option2 = document.createElement('option');
        option2.innerHTML = 'Appartements';
        const option3 = document.createElement('option');
        option3.innerHTML = 'Bar & restaurants';

        // ajout de la partie intégration d'une image //
        const ajoutPhoto = document.createElement('div');
        ajoutPhoto.classList.add('ajoutphoto');

        // ajout de l'image de paysage dans la partie intégration d'une image //
        const imageLandscape = document.createElement('img');
        imageLandscape.classList.add('imagelandscape');
        imageLandscape.src = "assets/icons/paysage.svg";

        // ajout du lien "Ajouter photo" //
        const addPhotoLink = document.createElement('a');
        addPhotoLink.classList.add('addphotolink');
        //addPhotoLink.innerHTML = " + Ajouter photo ";
        const overParagraphe = document.createElement('p')
        overParagraphe.innerHTML = " + Ajouter photo ";

        // ajout de la phrase des mo max //
        const addPhotoParagraphe = document.createElement('p');
        addPhotoParagraphe.classList.add('addphotoparagrpahe');
        addPhotoParagraphe.innerHTML="jpg, png : 4mo max";

        // création d'une nouvelle interface pour la deuxième modale //
        const newDiv2 = document.createElement('div');
        newDiv2.classList.add('newdiv2');



        // ajout de la barre grise entre la catégorie et le bouton valider //
        const greyBar = document.createElement('div');
        greyBar.classList.add('greybar');
        greyBar.id = 'greybar';

        // ajout du bouton de validation //
        validateButton = document.createElement('button');
        validateButton.classList.add('validatebutton');
        validateButton.setAttribute('type', 'submit');
        validateButton.innerHTML = "Valider";

       
        document.querySelector('.modal').appendChild(newDiv2);
        
     
        document.querySelector('.newdiv2').appendChild(formAddProject);
        document.querySelector('.formaddproject').appendChild(divAjoutPhoto);
        //document.querySelector('.formaddproject').appendChild(photoSender);
        document.querySelector('.formaddproject').appendChild(ajoutPhoto);
        document.querySelector('.formaddproject').appendChild(divTitre);
        document.querySelector('.formaddproject').appendChild(divcategorie);
        document.querySelector('.formaddproject').appendChild(greyBar);
        document.querySelector('.formaddproject').appendChild(validateButton);

        

        document.querySelector('.ajoutphoto').appendChild(imageLandscape);
        
        document.querySelector('.ajoutphoto').appendChild(addPhotoLink);
        document.querySelector('.addphotolink').appendChild(photoSender);
        document.querySelector('.addphotolink').appendChild(overParagraphe);
        document.querySelector('.ajoutphoto').appendChild(addPhotoParagraphe);

        document.querySelector('.divtitre').appendChild(labelTitre);
        document.querySelector('.divtitre').appendChild(formTextTitre1);
        
        document.querySelector('.divcategorie').appendChild(labelTitre2);
        document.querySelector('.divcategorie').appendChild(formTextTitre2);

        document.querySelector('.formselectcategory').appendChild(optionVoid);
        document.querySelector('.formselectcategory').appendChild(option1);
        document.querySelector('.formselectcategory').appendChild(option2);
        document.querySelector('.formselectcategory').appendChild(option3);
        
        // affichage de l'image téléchargée //

        let pictureDisplayed = document.querySelector('.photosender').addEventListener('change', function(event){
            let newReader = new FileReader;
            let file = event.target.files;
            let fileLength = file.length;
            if (fileLength != 0)
            {
                let imageUpload = document.createElement('img');
                imageUpload.classList.add('imageupload');
                const imageSource = URL.createObjectURL(file[0]);
                imageUpload.src = imageSource;
                if (imageUpload.src != null)
                {
                    document.querySelector('.ajoutphoto').innerHTML='';
                    document.querySelector('.ajoutphoto').appendChild(imageUpload);
                }
                const lecture = newReader.readAsDataURL(file[0]);
                console.log(newReader);
            }
        })


        // validation d'un nouveau projet via le formulaire //

        document.querySelector('.validatebutton').addEventListener('click', (event) =>{
            event.preventDefault();
           console.log(document.querySelector('.formtexttitre').value);
           console.log(document.querySelector('.formselectcategory').value);
        })


        
    })
    
    
/*async function postData () {
    const sending = await fetch("http://localhost:5678/api/works", 
    {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${fetchToken}`
        },
        body: document.querySelector('.formtexttitre').value
    });
    
}*/

  