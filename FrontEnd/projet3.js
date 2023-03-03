



/*const boutonTous = document.createElement("div").innerHTML = "Tous";
const boutonObjets = document.createElement("button").innerHTML = "Objets";
const boutonAppartements = document.createElement("button").innerHTML = "Appartements";
const boutonHotelRestaurant = document.createElement("button").innerHTML = "Hôtels & restaurants";
const maDiv = document.querySelector('#portfolio');
maDiv.appendChild(boutonTous);*/
document.querySelector("#button-portfolio").innerHTML = "Tous";
document.querySelector("#button-portfolio-2").innerHTML = "Objets";
document.querySelector("#button-portfolio-3").innerHTML = "Appartements";
document.querySelector("#button-portfolio-4").innerHTML = "Hôtels & restaurants";

const response = fetch("http://localhost:5678/api/works")
.then(res => res.json())

.then(data =>
    {
        for (let i =0; i<data.length ; i++)
        {
            const image = document.querySelectorAll('.image');
            image[i].src = data[i].imageUrl;
            const caption = document.querySelectorAll(".caption");
            caption[i].innerHTML = data[i].title;
            const categoryId = data[i].categoryId   
            console.log(categoryId);      
        }
    })

   
