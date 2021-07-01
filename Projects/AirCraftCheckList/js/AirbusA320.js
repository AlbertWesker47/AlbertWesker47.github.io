import Avion from "./Avion.js";

 export const AirbusA320 = new Avion("Airbus","A320",
     "2 turbofan engines","42600","6112",
     "images/Airbus/face.jpg","A320.html");


if(document.getElementById("renegade") != null)
{
 AirbusA320.createCard();

}
export function validate(id)
 {
  let status = true;
  let check_previous_step_status = function (id)
  {
   let previous_id = parseInt(id)-1;
   let previous_element = document.getElementById(previous_id);
   if(previous_element.style.color !== "limegreen")
   {
    status = false;
    alert("The previous step must be checked and clicked.")
   }
  }

   if (parseInt(id) > 0)
   {
    check_previous_step_status(id);
   }

  let target_element = document.getElementById(id);
   if (target_element.value === "SET" && status == true)
   {
    var entered_value = prompt("Please enter the value :")
    while(entered_value == null || entered_value == "")
    {
     entered_value = prompt("The value must be entered.")
    }
    target_element.value = entered_value;
    target_element.style.color = "limegreen";
    target_element.disabled = true;
   }
   else if (status === true)
       {
        target_element.style.color = "limegreen";
        target_element.disabled = true;
       }
 }



export function beforeStart () {
 AirbusA320.procedureBeforeStart = new Map();
 AirbusA320.procedureBeforeStart.set("COCKPIT PREP", "COMPLET(BOTH)");
 AirbusA320.procedureBeforeStart.set("PINS AND COVERS", "PINS AND COVERS");
 AirbusA320.procedureBeforeStart.set("SIGNS", "ON/AUTO");
 AirbusA320.procedureBeforeStart.set("ADIRS", "NAV");
 AirbusA320.procedureBeforeStart.set("FUEL QUANTITY", "______KG");
 AirbusA320.procedureBeforeStart.set("TO DATA/V.BUGS", "SET(BOTH)");
 AirbusA320.procedureBeforeStart.set("BARO REF", "SET(BOTH)");
 AirbusA320.procedureBeforeStart.set("MOBILE PHONES", "OFF");
 AirbusA320.procedureBeforeStart.set("A/SKID & N/W STEERING", "AS RQRD");
 AirbusA320.procedureBeforeStart.set("WINDOWS/DOORS", "CLOSED(BOTH)");
 AirbusA320.procedureBeforeStart.set("BEACON", "ON/AUTO");
 AirbusA320.procedureBeforeStart.set("THR LEVERS", "IDLE");
 AirbusA320.procedureBeforeStart.set("PARKING BRAKE", "AS RQRD");

 return AirbusA320.procedureBeforeStart;
};

export function engineManagement () {
 AirbusA320.procedureEngineManagement = new Map();
 AirbusA320.procedureEngineManagement.set("ENGINE MASTER SWITCH", "OFF");
 AirbusA320.procedureEngineManagement.set("ENGINE START SELECTOR", "NORM");
 AirbusA320.procedureEngineManagement.set("ENGINE MANUAL START PB", "OFF");
 AirbusA320.procedureEngineManagement.set("CHECK ECAM OIL", "10 QTS ++");
 AirbusA320.procedureEngineManagement.set("ENGINE START SELECTOR", "IGN/START");
 AirbusA320.procedureEngineManagement.set("ENGINE 1 MASTER SWITCH", "ON");

 let engine2masterSwitch = [];
 engine2masterSwitch.push("AUTO BRK MAX");
 engine2masterSwitch.push("SIGNS ON");
 engine2masterSwitch.push("SPLRS ARM");
 engine2masterSwitch.push("FLAPS TO");
 engine2masterSwitch.push("TO CONFIG NORM");

 AirbusA320.procedureEngineManagement.set("ENGINE 2 MASTER SWITCH", engine2masterSwitch);

 return AirbusA320.procedureEngineManagement;
};

export function afterStart () {
 AirbusA320.procedureAfterStart = new Map();
 AirbusA320.procedureAfterStart.set("FLIGHT CONTROLS", "CHECKED(BOTH)");
 AirbusA320.procedureAfterStart.set("FLT INST", "CHECKED(BOTH)");
 AirbusA320.procedureAfterStart.set("BRIEFING", "CONFIRMING");
 AirbusA320.procedureAfterStart.set("FLAP SETTING", "CONF_____(BOTH)");
 AirbusA320.procedureAfterStart.set("V1. VR. V1/FLEX TEMP", "___(BOTH)");
 AirbusA320.procedureAfterStart.set("BUMP/DE-RATE", "SET(BOTH)");
 AirbusA320.procedureAfterStart.set("ATC+TCAS", "SET");
 AirbusA320.procedureAfterStart.set("RADAR+PWS", "SECURED FOR TO");
 AirbusA320.procedureAfterStart.set("CABIN", "TO NO BLUE");

 let ecamMemo = [];
 ecamMemo.push("AUTO BRK MAX");
 ecamMemo.push("SIGNS ON");
 ecamMemo.push("SPLRS ARM");
 ecamMemo.push("FLAPS TO");
 ecamMemo.push("TO CONFIG NORM");

 AirbusA320.procedureAfterStart.set("ECAM MEMO", ecamMemo);
 AirbusA320.procedureAfterStart.set("LAPTOP", "STOWED");
 AirbusA320.procedureAfterStart.set("STROBELIGHTS", "AS RQRD");
 AirbusA320.procedureAfterStart.set("CABIN CREW", "ADVISED");
 AirbusA320.procedureAfterStart.set("ENG MODE SEL", "AS RQRD");
 AirbusA320.procedureAfterStart.set("PACKS", "AS RQRD");

 return AirbusA320.procedureAfterStart;
};

export function afterTakeOff () {
 AirbusA320.procedureAfterTakeOff = new Map();
 AirbusA320.procedureAfterTakeOff.set("LDG GEAR", "UP");
 AirbusA320.procedureAfterTakeOff.set("FLAPS", "ZERO");
 AirbusA320.procedureAfterTakeOff.set("PACKS", "ON");
 AirbusA320.procedureAfterTakeOff.set("BARO REF", "SET(BOTH)");

 return AirbusA320.procedureAfterTakeOff;
};
