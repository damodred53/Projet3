
const buttonPortfolio = document.querySelector("#button-portfolio").innerHTML = "Tous";
const buttonPortfolio1 =document.querySelector("#button-portfolio-1").innerHTML = "Objets";
const buttonPortfolio2 =document.querySelector("#button-portfolio-2").innerHTML = "Appartements";
const buttonPortfolio3 =document.querySelector("#button-portfolio-3").innerHTML = "Hôtels & restaurants";
const allButton = document.querySelectorAll(".button-portfolio");

// code à maintenir //
 

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
    }

}
useFetcher()

const eventButtonObjet = document.querySelector('#button-portfolio-1')
eventButtonObjet.addEventListener('click', function (){
    document.querySelector('.gallery').innerHTML = "";
    for ( let i =0 ; i <savedData.length ; i++){
        console.log(savedData[i].categoryId)
        let myArray = savedData[i].categoryId
        console.log(myArray)
    
    if (savedData[i].categoryId == 1)
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
    //document.querySelector('.gallery').innerHTML = "";
    
    
}})


const eventButtonAppartement = document.querySelector('#button-portfolio-2')
eventButtonAppartement.addEventListener('click', function (){
    document.querySelector('.gallery').innerHTML = "";
    for ( let i =0 ; i <savedData.length ; i++){
        console.log(savedData[i].categoryId)
        let myArray = savedData[i].categoryId
        console.log(myArray)
    
    if (savedData[i].categoryId == 2)
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
    //document.querySelector('.gallery').innerHTML = "";
    
    
}})

const eventButtonHotelRestaurant = document.querySelector('#button-portfolio-3')
eventButtonHotelRestaurant.addEventListener('click', function (){
    document.querySelector('.gallery').innerHTML = "";
    for ( let i =0 ; i <savedData.length ; i++){
        console.log(savedData[i].categoryId)
        let myArray = savedData[i].categoryId
        console.log(myArray)
    
    if (savedData[i].categoryId == 3)
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
    //document.querySelector('.gallery').innerHTML = "";
    
    
}})


const eventButtonTous = document.querySelector('.button-portfolio')
eventButtonTous.addEventListener('click', function (){
    document.querySelector('.gallery').innerHTML = "";
    useFetcher()
})





    
    


















 

   
