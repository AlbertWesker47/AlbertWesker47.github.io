import Avion from "./Avion.js";

export const C130Hercules = new Avion("Lockheed Martin","C-130 Hercules", "4 turboprop engines", "34300","3800",
    "images/LockheedMartin/face.jpg","C130.html");


if(document.getElementById("renegade") != null)
{
    C130Hercules.createCard();

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
//Procédures pour le Lockheed Martin C-130 Hercules

export function beforeStartingEngines () {
    C130Hercules.procedureBeforeStartingEngines = new Map();
    C130Hercules.procedureBeforeStartingEngines.set("FORMS","CHECKED");
    C130Hercules.procedureBeforeStartingEngines.set("OXYGEN","SET (ALL CREWMEMBERS)");
    C130Hercules.procedureBeforeStartingEngines.set("SCNS/GPS","SET");
    C130Hercules.procedureBeforeStartingEngines.set("RADIOS","ON/SET (REQUEST START CLEARANCE)");
    C130Hercules.procedureBeforeStartingEngines.set("CLEAR/START","GTC/APU");
    C130Hercules.procedureBeforeStartingEngines.set("LIGHTS","SET");
    C130Hercules.procedureBeforeStartingEngines.set("FUEL","CHECKED (TOTAL QTY AND BALANCE LIMITATIONS)");
    C130Hercules.procedureBeforeStartingEngines.set("RAMP AND DOOR CONTROLS","NEUTRAL");
    C130Hercules.procedureBeforeStartingEngines.set("HYDRAULIC PANEL","SET (EMERGENCY BRAKES AND ALL PUMPS ON");
    C130Hercules.procedureBeforeStartingEngines.set("PARKING BRAKE","SET, PRESSURE CHECKED, REMOVE CHOCKS");
    C130Hercules.procedureBeforeStartingEngines.set("THROTTLES","GROUND IDLE");
    C130Hercules.procedureBeforeStartingEngines.set("CHOCKS","REMOVED");
    C130Hercules.procedureBeforeStartingEngines.set("BEFORE STARTING ENGINES CHECK","COMPLETE");

    return C130Hercules.procedureBeforeStartingEngines;
};

export function startingEngines () {
    C130Hercules.procedureStartingEngines = new Map();
    C130Hercules.procedureStartingEngines.set("CLEAR/START #3 ENGINE","OK");
    C130Hercules.procedureStartingEngines.set("REMOVE EXTERNAL EQUIPEMENT (GRD PWR CART)","OK");
    C130Hercules.procedureStartingEngines.set("CLEAR/START #4 ENGINE","OK");
    C130Hercules.procedureStartingEngines.set("EXTERNAL EQUIPMENT","REMOVED");
    C130Hercules.procedureStartingEngines.set("CLEAR/START #2 ENGINE","OK");
    C130Hercules.procedureStartingEngines.set("CLEAR/START #1 ENGINE","OK");
    C130Hercules.procedureStartingEngines.set("SECURE CREW ENTRANCE DOOR","(LOADMASTER)");

    return C130Hercules.procedureStartingEngines;
};

export function beforeTaxi () {
    C130Hercules.procedureBeforeTaxi = new Map();
    C130Hercules.procedureBeforeTaxi.set("COMPASS SYSTEM AND HEADING INDICATORS","CHECKED AND VERIFIED");
    C130Hercules.procedureBeforeTaxi.set("RADIOS AND NAVIGATION", "CHECKED (ALL NECESSARY EQUIPMENT ON)");
    C130Hercules.procedureBeforeTaxi.set("IFF/TRANSPONDER", "CHECKED/STANDBY");
    C130Hercules.procedureBeforeTaxi.set("FLAPS", "SET 50% (FOR TAKEOFF)");
    C130Hercules.procedureBeforeTaxi.set("HYDRAULIC PRESSURES", "CHECKED");
    C130Hercules.procedureBeforeTaxi.set("AUTOPILOT", "VERIFY OFF");
    C130Hercules.procedureBeforeTaxi.set("INSTRUMENTS", "CHECKED");
    C130Hercules.procedureBeforeTaxi.set("SCNS/GPS", "CHECKED");
    C130Hercules.procedureBeforeTaxi.set("ALTIMETERS", "SET (LOCAL SETTING)");
    C130Hercules.procedureBeforeTaxi.set("TAXI LIGHT", "ON");

    return C130Hercules.procedureBeforeTaxi;
};

export function taxi () {
    C130Hercules.procedureTaxi = new Map();
    C130Hercules.procedureTaxi.set("BRAKES", "(emergency then switch/check normal)");
    C130Hercules.procedureTaxi.set("INSTRUMENTS", "(PROPER MOVEMENT AND DISPLACEMENT DURING LEFT AND RIGHT TURN)");

    return C130Hercules.procedureTaxi;
};

export function beforeTakeOff () {
    C130Hercules.procedureBeforeTakeOff = new Map();
    C130Hercules.procedureBeforeTakeOff.set("SAFETY BELT/SHOULDER HARNESS", "FASTENED/UNLOCKED");
    C130Hercules.procedureBeforeTakeOff.set("TRIM TABS", "SET (FOR TAKEOFF)");
    C130Hercules.procedureBeforeTakeOff.set("FLAPS", "SET (CONFIRM 50% FOR TAKEOFF)");
    C130Hercules.procedureBeforeTakeOff.set("FLIGHT CONTROLS", "CHECKED (FREEDOM OF MOVEMENT)");
    C130Hercules.procedureBeforeTakeOff.set("CREW BRIEFING", "COMPLETED (INCLUDED TOLD,DEPARTURE INSTRUCTIONS, AND EMERGENCIES)");
    C130Hercules.procedureBeforeTakeOff.set("INSTRUMENTS", "SET (FOR DEPARTURE)");
    C130Hercules.procedureBeforeTakeOff.set("SCNS/GPS", "ENHANCED INTERRUPTED ALIGNMENT COMPLETE (IF NEEDED)");

    return C130Hercules.procedureBeforeTakeOff;
};

export function lineUp () {
    C130Hercules.procedureLineup = new Map();
    C130Hercules.procedureLineup.set("EXTERIOR LIGHTS", "SET (EXTEND AND TURN ON LANDING LIGHTS)");
    C130Hercules.procedureLineup.set("IFF TRANSPONDER", "ON/SET");

    return C130Hercules.procedureLineup;
};

export function takeOff () {
    C130Hercules.procedureTakeOff = new Map();
    C130Hercules.procedureTakeOff.set("HOLD BRAKES AND SET TAKEOFF POWER", "(100% RPM DO NOT EXCEED MAX TORQUE)");
    C130Hercules.procedureTakeOff.set("RELEASE BRAKES", "CHECKED");
    C130Hercules.procedureTakeOff.set("TAKEOFF SPEED", "(100-110 KIAS DEPENDING ON WEIGHT)");
    C130Hercules.procedureTakeOff.set("ROTATE/ESTABLISH 10 DEGREES NOSE UP", "CHECKED");

    return C130Hercules.procedureTakeOff;
};

export function afterTakeOff () {
    C130Hercules.procedureAfterTakeOff = new Map();
    C130Hercules.procedureAfterTakeOff.set("LANDING GEAR", "UP (UPON POSITIVE INDICATION OF CLIMB)");
    C130Hercules.procedureAfterTakeOff.set("FLAPS", "UP (AFTER GEAR RETRACTS)");
    C130Hercules.procedureAfterTakeOff.set("TAXI/LANDING LIGHTS", "OFF AND RETRACT");
    C130Hercules.procedureAfterTakeOff.set("AUX HYDRAULIC PUMP", "OFF");
    C130Hercules.procedureAfterTakeOff.set("LEADING EDGE ANTI-ICE", "CHECKED");
    C130Hercules.procedureAfterTakeOff.set("ACCELERATE TO 180 KIAS FOR CLIMB", "CHECKED");

    return C130Hercules.procedureAfterTakeOff;
};

export function cruise () {
    C130Hercules.procedureCruise = new Map();
    C130Hercules.procedureCruise.set("CLIMB TO CRUISE ALTITUDE", "(180KIAS to 10K, 170KIAS 10-15K, 160KIAS above 15K)");
    C130Hercules.procedureCruise.set("IFF TRANSPONDER", "ON/SET");

    return C130Hercules.procedureCruise;
};
