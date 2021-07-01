export default class Avion{
    constructor(marque, modele, propulsion, poidsVide, rayonAction, pictureLocation, url)
    {
        this.marque = marque;
        this.modele = modele;
        this.propulsion = propulsion;
        this.poidsVide = poidsVide;
        this.rayonAction = rayonAction;
        this.pictureLocation = pictureLocation;
        this.url = url;
    }

    createCard () {

        var conteneur = document.createElement("div");
        conteneur.setAttribute("class", "card card-block");
        document.getElementById("renegade").appendChild(conteneur);

        var image = document.createElement("img");
        image.setAttribute("src",this.pictureLocation);
        image.setAttribute("class", "card-img-top");
        image.setAttribute("style", "height:230px");
        conteneur.appendChild(image);



                var contenant = document.createElement("div");
                contenant.setAttribute("class", "card-body");
                conteneur.appendChild(contenant);

                var titre = document.createElement("h5");
                titre.setAttribute("class","card-title")
                titre.innerText = this.marque + " " + this.modele;
                contenant.appendChild(titre);


                var propulsion = document.createElement("h6");
                propulsion.setAttribute("class","card-text");
                propulsion.innerText = "Propulsion : "+this.propulsion;
                contenant.appendChild(propulsion);

                var rayonAction = document.createElement("h6");
                rayonAction.setAttribute("class","card-text");
                rayonAction.innerText = "Rayon d'action : "+this.rayonAction+" km";
                contenant.appendChild(rayonAction);

                var poidsVide = document.createElement("h6");
                poidsVide.setAttribute("class","card-text");
                poidsVide.innerText = "Poids à vide : "+this.poidsVide+" kg";
                contenant.appendChild(poidsVide);




                var bouton = document.createElement("a");
                bouton.setAttribute("class", "btn btn-outline-success stretched-link");
                bouton.setAttribute("href",this.url);
                bouton.innerHTML = this.modele + " Take-Off";
                contenant.appendChild(bouton);






    }


}










/*module.exports =function(marque,modele,propulsion,poidsVide,rayonAction)
{
    this.marque = marque;
    this.modele = modele;
    this.propulsion = propulsion;
    this.poidsVide = poidsVide;
    this.rayonAction = rayonAction;

return this.marque, this.rayonAction, this.modele, this.propulsion, this.poidsVide

};
*/
