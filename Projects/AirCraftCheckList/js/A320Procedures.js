import {beforeStart, engineManagement, afterTakeOff, afterStart, validate} from "./AirbusA320.js";

const pro1 = beforeStart();
const pro2 = engineManagement();
const pro3 = afterStart();
const pro4 = afterTakeOff();
let buttonCount = 0;
let maintitle;
let counter = document.getElementsByTagName('table').length;
let procedures = [pro1, pro2, pro3, pro4];
let procedure_titles = ["BEFORE START","ENGINES MANAGEMENT","AFTER START","AFTER TAKE-OFF / CLIMB"]

if (!String.prototype.contains) {
    String.prototype.contains = function(s) {
        return this.indexOf(s) > -1
    }
}



function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
procedures.forEach(function (item){
    if(counter === 0)
    {
        maintitle = document.querySelector("h1");

    }
    else
    {
        maintitle = document.querySelector("table:last-of-type");
    }
    let conteneur = document.createElement("table");
    conteneur.setAttribute("class", "table procedure table-striped table-bordered table-sm");
    let conteneurTitre = document.createElement("thead");
    let titre = document.createElement("th");
    titre.setAttribute("class", "th-sm")
    titre.setAttribute("colspan", "2")
    titre.setAttribute('style', 'font-size: 20px; cursor: pointer; text-align: center');
    titre.innerText = procedure_titles[counter];
    conteneur.setAttribute("id",procedure_titles[counter]);
    counter++;
    titre.setAttribute("colspan", "2");
    titre.setAttribute('style', 'font-size: 20px; cursor: pointer; text-align: center');
    insertAfter(maintitle,conteneur);
    conteneur.appendChild(conteneurTitre);
    conteneurTitre.appendChild(titre);
    let proceduresBody = document.createElement("tbody");
    conteneur.appendChild(proceduresBody);


    for (const [key,value] of item)
    {

            let procedureLine = document.createElement("tr");
            let procedureConstruct = document.createElement("td");
            procedureConstruct.innerText = key + "  ..................  ";
            proceduresBody.appendChild(procedureLine);
            let buttonRow = document.createElement("td");


            if (value.toString().contains("BOTH")) {
                let tournevisSpatial = value.split('(');
                let displayText = tournevisSpatial[0];
                let pilot1button = document.createElement("input");
                pilot1button.setAttribute("class", "button");
                pilot1button.setAttribute("type", "button");
                pilot1button.setAttribute("value", displayText);
                pilot1button.setAttribute("id", buttonCount)
                pilot1button.onclick = function () {
                    validate(pilot1button.getAttribute("id"))
                }
                buttonCount++;

                let pilot2button = document.createElement("input");
                pilot2button.setAttribute("class", "button");
                pilot2button.setAttribute("type", "button");
                pilot2button.setAttribute("value", displayText);
                pilot2button.setAttribute("id", buttonCount)
                pilot2button.onclick = function () {
                    validate(pilot2button.getAttribute("id"))
                }
                buttonRow.appendChild(pilot1button);
                buttonRow.appendChild(pilot2button);
                procedureLine.appendChild(procedureConstruct);
                procedureLine.appendChild(buttonRow);
                buttonCount++;

            } else if (value.toString().contains("__")) {

            } else if (value.toString().contains(",")) {

            } else {
                let procedureButton = document.createElement("input");
                procedureButton.setAttribute("class", "button");
                procedureButton.setAttribute("type", "button");
                procedureButton.setAttribute("id", buttonCount)
                procedureButton.setAttribute("value", value);
                procedureButton.onclick = function () {
                    validate(procedureButton.getAttribute("id"));
                }
                buttonRow.appendChild(procedureButton);
                procedureLine.appendChild(procedureConstruct);
                procedureLine.appendChild(buttonRow);
                buttonCount++;
        }


    }
});



