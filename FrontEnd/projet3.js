
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