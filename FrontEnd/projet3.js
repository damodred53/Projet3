
const buttonPortfolio = document.querySelector("#button-portfolio").innerHTML = "Tous";
const buttonPortfolio1 =document.querySelector("#button-portfolio-1").innerHTML = "Objets";
const buttonPortfolio2 =document.querySelector("#button-portfolio-2").innerHTML = "Appartements";
const buttonPortfolio3 =document.querySelector("#button-portfolio-3").innerHTML = "Hôtels & restaurants";
const allButton = document.querySelectorAll(".button-portfolio");


let savedData = null;
async function useFetcher () {
    let response = await fetch("http://localhost:5678/api/works")
    savedData = await response.json()
            console.log(savedData)
            for (let i =0; i<savedData.length ; i++)
            {
                let maGallerie = document.querySelector(".gallery")
                let mafigure = document.createElement("figure")
                let monImage = document.createElement("img")
                let maCaption = document.createElement("p")
                monImage.src = savedData[i].imageUrl
                maCaption.innerHTML = savedData[i].title
                maGallerie.appendChild(mafigure)
                mafigure.appendChild(monImage)
                mafigure.appendChild(maCaption)
            }
        }
useFetcher()

const eventButtonObjet = document.querySelector('#button-portfolio-1');
eventButtonObjet.addEventListener('click', function () {
    document.querySelector('.gallery').innerHTML='';
            
    for (let i = 0 ; i < savedData.length ; i++)
    {
        console.log(savedData[i].categoryId)
        if ( savedData[i].categoryId == 1)
        {
            
            let maGallerie = document.querySelector(".gallery")
            let mafigure = document.createElement("figure")
            let monImage = document.createElement("img")
            let maCaption = document.createElement("p")
            monImage.src = savedData[i].imageUrl
            maCaption.innerHTML = savedData[i].title
            maGallerie.appendChild(mafigure)
            mafigure.appendChild(monImage)
            mafigure.appendChild(maCaption)
            
        }
        
    }
    
    
}

)

const eventButtonAppartement = document.querySelector('#button-portfolio-2');
eventButtonAppartement.addEventListener('click', function () {
    document.querySelector('.gallery').innerHTML='';
            
    for (let i = 0 ; i < savedData.length ; i++)
    {
        console.log(savedData[i].categoryId)
        if ( savedData[i].categoryId == 2)
        {
            
            let maGallerie = document.querySelector(".gallery")
            let mafigure = document.createElement("figure")
            let monImage = document.createElement("img")
            let maCaption = document.createElement("p")
            monImage.src = savedData[i].imageUrl
            maCaption.innerHTML = savedData[i].title
            maGallerie.appendChild(mafigure)
            mafigure.appendChild(monImage)
            mafigure.appendChild(maCaption)
            
        }
        
    }
}

)

const eventButtonHotelRestaurant = document.querySelector('#button-portfolio-3');
eventButtonHotelRestaurant.addEventListener('click', function () {
    document.querySelector('.gallery').innerHTML='';
            
    for (let i = 0 ; i < savedData.length ; i++)
    {
        console.log(savedData[i].categoryId)
        if ( savedData[i].categoryId == 3)
        {
            
            let maGallerie = document.querySelector(".gallery")
            let mafigure = document.createElement("figure")
            let monImage = document.createElement("img")
            let maCaption = document.createElement("p")
            monImage.src = savedData[i].imageUrl
            maCaption.innerHTML = savedData[i].title
            maGallerie.appendChild(mafigure)
            mafigure.appendChild(monImage)
            mafigure.appendChild(maCaption)
            
        }
        
    }
}

)

const eventButtonTous = document.querySelector('#button-portfolio');
eventButtonTous.addEventListener('click', function () {
    document.querySelector('.gallery').innerHTML='';
            
    useFetcher();
}

)