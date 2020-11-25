function updateCharacter(element)
{
    let key = element.getAttribute("name");
    let value = element.value;

    // no validation on data

    console.log("updating character...",  element, key, value);

    console.log("saving to local storage");
    localStorage.setItem(key, value);
}

function RetrievePerson()
{
    let name = localStorage.getItem("character_name");
    let age = localStorage.getItem("character_age");
    let gender = localStorage.getItem("character_gender");
    let status = localStorage.getItem("character_status");

    return new Person(name, age, gender, status);
}

function sendApplication() {
    console.log("send application to Hogwarts!")

    let person = RetrievePerson();
    console.log("person", person);


    alert("Your owl flutters off with the application clutched in it's talons!");

    var accepted = true;

    if (person.age > 11)
    {
        alert("But you're too old to apply to Hogwarts");
        accepted = false;
    }
    else if (person.age < 11)
    {
        alert("But you're too young to apply to Hogwarts");
        accepted = false;
    }

    
    if (accepted)
    {
        document.location.href="/accepted.html"
    }
    else
    {
        document.location.href="/rejected.html"
    }

}

export {updateCharacter, sendApplication};