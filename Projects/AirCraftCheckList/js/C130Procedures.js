import {beforeStartingEngines, startingEngines, beforeTaxi, taxi,beforeTakeOff,lineUp,takeOff, afterTakeOff,cruise, validate } from "./C130-Hercules.js";

const pro1 = beforeStartingEngines();
const pro2 = startingEngines();
const pro3 = beforeTaxi();
const pro4 = taxi();
const pro5 = beforeTakeOff();
const pro6 = lineUp();
const pro7 = takeOff();
const pro8 = afterTakeOff();
const pro9 = cruise();
let procedures = [pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9];
let buttonCount = 0;
let maintitle;
let clicked;
let counter = document.getElementsByTagName('table').length;
let procedure_titles = ["BEFORE STARTING ENGINES","STARTING ENGINES","BEFORE TAXI","TAXI","BEFORE TAKE-OFF","LINE UP","TAKE-OFF","AFTER TAKE-OFF","CRUISE"];

if (!String.prototype.contains) {
    String.prototype.contains = function(s) {
        return this.indexOf(s) > -1
    }}
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
        procedureButton.setAttribute("value", value.toUpperCase());
        procedureButton.onclick = function () {
            validate(procedureButton.getAttribute("id"));
            clicked = true;
        }
        buttonRow.appendChild(procedureButton);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
        buttonCount++;
    }
})




