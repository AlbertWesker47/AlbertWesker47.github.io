
import Avion from "./Avion.js";

export const Cessna172N = new Avion("Cessna","172N",
    "1 4-cylinder motor", "767","1289",
    "images/CESSNA/primary.jpg","172N.html");


if(document.getElementById("renegade") != null) {
    Cessna172N.createCard();
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

    if (status === true)
    {
        target_element.style.color = "limegreen";
        target_element.disabled = true;
    }
}

//Procédures pour le Cessna 172N
export function beforeStartingEngineProcedure () {
Cessna172N.procedureBeforeStartingEngine = new Map ();
Cessna172N.procedureBeforeStartingEngine.set("PREFLIGHT INSPECTION","COMPLETE");
Cessna172N.procedureBeforeStartingEngine.set("PASSENGER BRIEFING","COMPLETE");
Cessna172N.procedureBeforeStartingEngine.set("SEATS & BELTS"," ADJUST & LOCK");
Cessna172N.procedureBeforeStartingEngine.set("DOORS","CLOSED & LOCKED");
Cessna172N.procedureBeforeStartingEngine.set("BRAKES","TEST & SET");
Cessna172N.procedureBeforeStartingEngine.set("CIRCUIT BREAKERS","CHECK IN");
Cessna172N.procedureBeforeStartingEngine.set("ELECTRICAL EQUIP/AUTOPILOT","OFF");
Cessna172N.procedureBeforeStartingEngine.set("AVIONICS POWER SWITCH","OFF");
Cessna172N.procedureBeforeStartingEngine.set("FUEL SELECTOR VALVE","BOTH");
Cessna172N.procedureBeforeStartingEngine.set("FUEL SHUTOFF VALVE","ON(IN)");

return Cessna172N.procedureBeforeStartingEngine;
};

export function startingEngineProcedure () {
Cessna172N.procedureStartingEngine = new Map ();
Cessna172N.procedureStartingEngine.set("THROTTLE","OPEN 1/4 INCH");
Cessna172N.procedureStartingEngine.set("MIXTURE","RICH (IN)");
Cessna172N.procedureStartingEngine.set("CARB HEAT","COLD(IN)");
Cessna172N.procedureStartingEngine.set("CARB PRIME","AS RQRD;LOCKED");
Cessna172N.procedureStartingEngine.set("AUX FUEL PUMP","ON");
Cessna172N.procedureStartingEngine.set("PROPELLER AREA","CLEAR");
Cessna172N.procedureStartingEngine.set("MASTER SWITCH","ON");
Cessna172N.procedureStartingEngine.set("BEACON","ON");
Cessna172N.procedureStartingEngine.set("IGNITION","START");
Cessna172N.procedureStartingEngine.set("THROTTLE","ADJUST 1000 RPM");
Cessna172N.procedureStartingEngine.set("OIL PRESSURE","CHECK NORMAL");
Cessna172N.procedureStartingEngine.set("AUX FUEL PUMP","OFF");
Cessna172N.procedureStartingEngine.set("AVIONICS MASTER SWITCH","ON");
Cessna172N.procedureStartingEngine.set("RADIOS","ON");
Cessna172N.procedureStartingEngine.set("TRANSPONDER","STDBY");
Cessna172N.procedureStartingEngine.set("FLAPS","UP");
Cessna172N.procedureStartingEngine.set("AMMETER","CHECK");
Cessna172N.procedureStartingEngine.set("HEADING INDICATOR","SET");
Cessna172N.procedureStartingEngine.set("ATIS/AWOS/ASOS","OBTAIN");
Cessna172N.procedureStartingEngine.set("ALTIMETER","SET");
Cessna172N.procedureStartingEngine.set("AUTOPILOT","ENGAGE");
Cessna172N.procedureStartingEngine.set("FLIGHT CONTROLS","MOVE AGAINST AP");
Cessna172N.procedureStartingEngine.set("AUTOPILOT","DISCONNECT (SOUND)");
Cessna172N.procedureStartingEngine.set("DEPARTURE & TAXI CLRNCE","CONTACT");

return Cessna172N.procedureStartingEngine;
 };

export function beforeTakeOffProcedure () {
    Cessna172N.procedureBeforeTakeOff = new Map();
    Cessna172N.procedureBeforeTakeOff.set("PARKING BRAKE", "SET");
    Cessna172N.procedureBeforeTakeOff.set("CABIN DOORS", "CLOSED & LOCKED");
    Cessna172N.procedureBeforeTakeOff.set("SEATS & BELTS", "ADJUST & LOCK");
    Cessna172N.procedureBeforeTakeOff.set("FLIGHT CONTROLS", "FREE & CORRECT");
    Cessna172N.procedureBeforeTakeOff.set("INSTRUMENTS(4)", "SET");
    Cessna172N.procedureBeforeTakeOff.set("FUEL QUANTITY", "CHECK");
    Cessna172N.procedureBeforeTakeOff.set("FUEL SHUTOFF VALVE", "ON");
    Cessna172N.procedureBeforeTakeOff.set("MIXTURE", "RICH(IN)");
    Cessna172N.procedureBeforeTakeOff.set("FUEL SELECTOR VALVE", "ON");
    Cessna172N.procedureBeforeTakeOff.set("ELEVATOR TRIM", "SET FOR TAKEOFF");
    Cessna172N.procedureBeforeTakeOff.set("THROTTLE", "1800RPM");
    Cessna172N.procedureBeforeTakeOff.set("MAGNETOS", "CHECK");
    Cessna172N.procedureBeforeTakeOff.set("SUCTION GAGE", "CHECK");
    Cessna172N.procedureBeforeTakeOff.set("ENGINE INSTRUMENTS", "CHECK");
    Cessna172N.procedureBeforeTakeOff.set("AMMETER", "CHECK");
    Cessna172N.procedureBeforeTakeOff.set("MIXTURE", "SET FOR DENSITY ALT");
    Cessna172N.procedureBeforeTakeOff.set("CARB HEAT", "ON");
    Cessna172N.procedureBeforeTakeOff.set("ANNUNCIATOR PANEL", "CLEAR");
    Cessna172N.procedureBeforeTakeOff.set("THROTTLE", "1000 RPM");
    Cessna172N.procedureBeforeTakeOff.set("THROTTLE FRICTION LOCK", "ADJUST");
    Cessna172N.procedureBeforeTakeOff.set("STROBE LIGHTS", "ON");
    Cessna172N.procedureBeforeTakeOff.set("RADIOS/AVIONICS", "SET");
    Cessna172N.procedureBeforeTakeOff.set("AUTOPILOT", "OFF");
    Cessna172N.procedureBeforeTakeOff.set("FLAPS", "SET FOR TAKEOFF (0°-10°)");
    Cessna172N.procedureBeforeTakeOff.set("PARKING BREAK", "RELEASE");
    Cessna172N.procedureBeforeTakeOff.set("WINDOWS", "CLOSED");

    return Cessna172N.procedureBeforeTakeOff;
};

export function takeOffProcedure () {
    Cessna172N.procedureTakeOff = new Map();
    Cessna172N.procedureTakeOff.set("FLAPS", "UP");
    Cessna172N.procedureTakeOff.set("CARB HEAT", "COLD(IN)");
    Cessna172N.procedureTakeOff.set("TRANSPONDER", "ALTITUDE");
    Cessna172N.procedureTakeOff.set("TRIM", "SET FOR TAKEOFF");
    Cessna172N.procedureTakeOff.set("THROTTLE", "FULL");
    Cessna172N.procedureTakeOff.set("TACH, OIL, AIRSPEED", "CHECK");
    Cessna172N.procedureTakeOff.set("ELEVATOR", "LIFT AT 55 KIAS");
    Cessna172N.procedureTakeOff.set("CLIMB", "70-80 KIAS");

    return Cessna172N.procedureTakeOff;
};
