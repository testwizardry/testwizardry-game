
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

    const PersonModule = await import('./Person.js');
    const Person = PersonModule.Person;
    
    let name = sessionStorage.getItem("character_name");
    let age = sessionStorage.getItem("character_age");
    let gender = sessionStorage.getItem("character_gender");
    let status = sessionStorage.getItem("character_status");

    let player_character = new Person(name, age, gender, status);
    console.log("saving player character to local storage", player_character)
    localStorage.setItem("player_character", JSON.stringify(player_character));

    alert("Your owl flutters off with the application clutched in it's talons!");

    const Hogwarts = await import("./Hogwarts.js");
    console.log(Hogwarts);
    console.log(Hogwarts.admissions);

    let response = Hogwarts.admissions(player_character);
    console.log("response", response);
    sessionStorage.setItem("hogwarts_response", JSON.stringify(response));

    if (response.accepted == true)
    {
        console.log("Congratulations, you've just been accepted to Hogwarts!");
        window.location.href = "/accepted.html";

    }
    else 
    {
        console.log("Sorry, you were not accepted to Hogwarts!");
        console.log(response.reason);
        window.location.href = "/rejected.html";
    }
}

async function getCharacterDataFromSessionStorage()
{
    console.log("loading character data");

    let name = sessionStorage.getItem("character_name");
    let age = sessionStorage.getItem("character_age");
    let gender = sessionStorage.getItem("character_gender");
    let status = sessionStorage.getItem("character_status");

    console.log(name, age, gender, status);

    const PersonModule = await import('./Person.js');
    const Person = PersonModule.Person;

    let character = new Person(name, age, gender, status);
    console.log(character);

    return character;
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

// pre-populate form fields if we have the character information in Session Storage
document.addEventListener("DOMContentLoaded", populateCharacterDataFromSessionStorage);