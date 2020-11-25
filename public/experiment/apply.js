function saveCharacter()
{
    console.log("save character...")
    var character = getCharacterFromForm("characterForm");
    console.log("character", character);
    console.log("name", character.name);
    console.log("firstName", character.firstName);
    console.log("lastName", character.lastName);
    console.log("salutation", character.salutation);
    console.log("category", character.category);

    localStorage.setItem("character", character);
}

function validate_name(element)
{
    console.log("validate name", element);
    var name = element.value;
    console.log(name);
    console.log("valid", Character.valid_name(name));

    if (Character.valid_name(name) == undefined)
    {
        document.getElementById("name_validation").innerText = "Name is required";
    }
    else 
    {
        document.getElementById("name_validation").innerText  = "";
    }
}

function validate_age(element)
{
    console.log("validate age", element);
    var age = element.value;

    console.log(age);
    console.log("valid", Character.valid_age(age));

    if (age.length == 0)
    {
        document.getElementById("age_validation").innerText = "Age is required"
    }
    else if (Character.valid_age(age) ==  undefined)
    {
        document.getElementById("age_validation").innerText = "Age is invalid";
    }
    else 
    {
        document.getElementById("age_validation").innerText  = "";
    }
}

function validate_gender(element)
{
    console.log("validate gender", element);
    var gender = element.value;
    console.log(gender);
    console.log("valid", Character.valid_gender(gender));
}

function validate_magical(element)
{
    console.log("validate magical", element);
    var magical =  element.value;
    console.log(magical);
    console.log("valid", Character.valid_magical(magical));
}

function getCharacterFromForm(formName)
{
    console.log("getting character from form...")
    var form = document.forms[formName];
    console.log(form);

    var name = form.elements.name.value;
    var age = form.elements.age.value;
    var gender = form.elements.gender.value;
    var magical = form.elements.magical.value;

    var character = new Character(name, age, gender, magical);
    return character;
}
