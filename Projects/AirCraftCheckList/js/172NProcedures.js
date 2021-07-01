import {beforeStartingEngineProcedure,startingEngineProcedure,beforeTakeOffProcedure, validate, takeOffProcedure} from "./Cessna172N.js"

const pro1 = beforeStartingEngineProcedure();
const pro2 = startingEngineProcedure();
const pro3 = beforeTakeOffProcedure();
const pro4 = takeOffProcedure();
let procedures = [pro1,pro2,pro3,pro4];
let buttonCount = 0;
let maintitle;
let counter = document.getElementsByTagName('table').length;
let procedure_titles = ["BEFORE STARTING ENGINE","STARTING ENGINE","BEFORE TAKE-OFF","TAKE-OFF"];
if (!String.prototype.contains) {
    String.prototype.contains = function(s) {
        return this.indexOf(s) > -1
    }
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

procedures.forEach(function (item)
{
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
})




