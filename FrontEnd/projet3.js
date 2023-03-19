
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




//rattachement des éléments //

document.querySelector('.blackbanner').appendChild(newDiv);
document.querySelector('.newdiv').appendChild(firstBlock);
document.querySelector('.firstblock').appendChild(firstIcon);
document.querySelector('.firstblock').appendChild(firstEdition);
document.querySelector('.newdiv').appendChild(myLink);
document.querySelector('.mylink').appendChild(indoorLink);





const buttonPortfolio = document.querySelector("#button-portfolio").innerHTML = "Tous";
const buttonPortfolio1 =document.querySelector("#button-portfolio-1").innerHTML = "Objets";
const buttonPortfolio2 =document.querySelector("#button-portfolio-2").innerHTML = "Appartements";
const buttonPortfolio3 =document.querySelector("#button-portfolio-3").innerHTML = "Hôtels & restaurants";

 

let monSet = new Set()
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
    console.log(savedData)
    }

}
useFetcher()

const eventButtonObjet = document.querySelector('#button-portfolio-1')
eventButtonObjet.addEventListener('click', function (){
    document.querySelector('.gallery').innerHTML = "";
    const boutonVert = document.querySelectorAll(".button-portfolio")
        for (let i = 0 ; i < boutonVert.length ; i++)
        {
            
            if (boutonVert[i] == buttonPortfolio1)
            {
                boutonVert.classList.add("button-portfolio-green")
            }
        }

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


const eventButtonTous = document.querySelector('.button-portfolio')
eventButtonTous.addEventListener('click', function (){
    document.querySelector('.gallery').innerHTML = "";
    useFetcher()
})


if (window.sessionStorage.getItem('tokenUser') !=null)
{
    document.querySelector('.blackbanner').style.display = 'block';
    document.querySelector('.div-button-portfolio').style.display = 'none';
    document.querySelector('.modifier').style.display = 'flex';
    document.querySelector('#modifierId').style.display = 'flex';
}



