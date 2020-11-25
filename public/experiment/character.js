class Character 
{
    constructor(name, age, gender, magical)
    {
        console.log("creating Character with: ", name, age, gender, magical);
        
        this._name = Character.valid_name(name);
        this._age = Character.valid_age(age);
        this._gender = Character.valid_gender(gender);
        this._magical = Character.valid_magical(magical);
    }

    static valid_name(value) {
        if (typeof value != "string")
        {
            return undefined;
        }

        if  (value.length == 0)
        {
            return undefined;
        }

        return value;
    }

    static valid_age(value) {
        if (isNaN(value)) { return undefined; }
        if (value <= 0) { return undefined; }

        return value;
    }

    static valid_gender(value) {
        if (typeof value != "string")
        {
            return undefined;
        }

        value = value.toLowerCase();

        var male_values = ["male", "man", "boy"]
        if (male_values.includes(value))
        {
            return "male";
        }
        var female_values = ["female", "lady", "woman", "girl"];
        if (female_values.includes(value))
        {
            return "female";
        }

        return undefined;
    }

    static valid_magical(magical)
    {
        if (typeof magical == 'boolean')
        {
            return magical;
        }

        if (typeof magical != 'string')
        {
            return undefined;
        }
         
        magical = magical.toLowerCase();

        var magical_values = ["magical", "yes", "true"];
        if (magical_values.includes(magical))    
        {
            return true;
        }

        var non_magical_values = ["nonmagical", "muggle", "no", "false"];
        if (non_magical_values.includes(magical))
        {
            return false;
        }

        return undefined;
    }

    set name(value) { this._name = Character.valid_name(value); console.log("setting character name", this._name); }
    set age(value) { this._age = Character.valid_age(value); console.log("setting character age", this._age); }
    set gender(value) { this._gender = Character.valid_gender(value); console.log("setting character gender", this._gender); }
    set magical(value) { this._magical = Character.valid_magical(value); console.log("setting character magical", this._magical); }

    get name() { return this._name; }
    get age() { return this._age; }
    get gender() { return this._gender; }
    get magical() { return this._magical; }

    get firstName() { return this.name.split(" ", 2)[0]; }
    get lastName() { return this.name.slice( this.name.lastIndexOf(" ") + 1, this.name.length); }

    get salutation() { 
        if (this.gender == "male") { return "Mr."; }
        if (this.gender == "female") { return "Ms."; }
        return undefined;
    }

    get category() { 
        if (this.magical == false) { return "muggle"; }
        if (this.magical == true) {
            if (this.gender == "male") { return "wizard"; }
            if (this.gender == "female") { return "witch"; }
        }
        return undefined;
    }
}
