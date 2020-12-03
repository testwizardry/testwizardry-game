
function updateCharacter(element)
{
    console.log("updating character");
    
    let key = element.getAttribute("name");
    let value = element.value;

    console.log("updating character...",  element, `${key} :  ${value}`);

    // TODO: validate fields

    console.log("saving to session storage");

    sessionStorage.setItem(key, value);
}


async function sendApplication()
{
    console.log("sending application");

    let PersonModule = await import('./Person.js');
    console.log(PersonModule);
    console.log(PersonModule.Person);

    let name = sessionStorage.getItem("character_name");
    let age = sessionStorage.getItem("character_age");
    let gender = sessionStorage.getItem("character_gender");
    let status = sessionStorage.getItem("character_status");

    let player_character = new Person.Person(name, age, gender, status);
    console.log("player_character", player_character);
    localStorage.setItem("player_character", player_character);

    alert("Your owl flutters off with the application clutched in it's talons!");

    //let Application = await import("./Application")
}

async function getCharacterDataFromSessionStorage()
{
    console.log("loading character data");

    let name = sessionStorage.getItem("character_name");
    let age = sessionStorage.getItem("character_age");
    let gender = sessionStorage.getItem("character_gender");
    let status = sessionStorage.getItem("character_status");

    console.log(name,age,gender,status);

    let Person = (await import("./Person.js")).Person;
    console.log(Person);

    let player_character = new Person(name, age, gender, status);
    console.log(player_character);

    return player_character;
}

async function populateCharacterDataFromSessionStorage()
{
    let person = await getCharacterDataFromSessionStorage();

    document.querySelector("#character_name").value = person.name;
    document.querySelector("#character_gender").value = person.gender;
    document.querySelector("#character_age").value = person.age;

    if (person.magical == false) {
        document.querySelector("#character_status_muggle").checked = true;
    }
    else if (person.magical == true)
    {
        document.querySelector("#character_status_wizard").checked = true;
    }
    else {
        console.log("unknown status");
    }
}

document.addEventListener("DOMContentLoaded", populateCharacterDataFromSessionStorage);