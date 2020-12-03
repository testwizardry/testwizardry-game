const Gender = {
    MALE: 'male',
    FEMALE: 'female'
}

const Category = {
    MAGICAL: 'magical',
    MUGGLE: 'muggle'
}

class Person {    
    constructor(name, age, gender, magical = false) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.magical = this.valid_magical(magical);
        this.inventory = [];
    }
    
    valid_magical(value)
    {
        if (value == true || value == false)
        {
            return value;
        }

        if ((typeof value)  == "string")
        {
            switch(value.toLowerCase())
            {
                case "wizard":
                    return true;
                case "witch":
                    return true;
                case "muggle":
                    return false;
                default: 
                    return undefined;
            }
        }
    }

    get allNames() {
        return this.name.split(" ");
    }
    get firstName() {
        return this.allNames[0];
    }

    get lastName() {
        return this.allNames[this.allNames.length-1];
    }

    get salutation() {
        if (this.gender == Gender.MALE) {
            return 'Mr.'
        }
        else if (this.gender == Gender.FEMALE)
        {
            return 'Ms.'
        }
        else 
        {
            return undefined;
        }
    }

    get status() {
        if (! this.magical)
        {
            return 'muggle';
        } 
        else
        if (this.gender == 'male')
        {
            return 'wizard';
        }
        else
        if (this.gender = 'female')
        {
            return 'witch';
        }
        else 
        {
            return undefined;
        }
    }

    useItem(item)
    {
        console.log("TODO: implement use item");
    }
}

class Muggle extends Person
{
    constructor(name, age, gender)
    {
        super(name, age, gender, false);
        delete (this.magical);
    }
}

class WizardKind extends Person
{
    constructor(name, age, gender)
    {
        super(name, age, gender, true);
        this.spells = [];
        this.potions = [];
    }

    castSpell(spell)
    {
        console.log("TODO: implement cast spell")
    }

    brewPotion(potion)
    {
        console.log("TODO: implement brew potion");
    }
}

class Wizard extends WizardKind
{
    constructor(name, age)
    {
        super(name, age, Gender.MALE);
    }
}

class Witch extends WizardKind
{
    constructor(name, age)
    {
        super(name, age, Gender.FEMALE, true);
    }
}

export {Gender, Person, Muggle, WizardKind, Wizard, Witch}
