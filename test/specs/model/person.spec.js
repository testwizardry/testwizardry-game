import chai from 'chai';
const { expect } = chai;

import { Gender, Person, Muggle, WizardKind, Wizard, Witch } from "../../../public/scripts/testwizardry/Person.js";

let dumbledore = new Person("Albus Percival Wulfric Brian Dumbledore", 99, Gender.MALE, true);
let harry = new Person("Harry Potter", 11, Gender.MALE, true);
let hermione = new Person("Hermione Granger", 11, Gender.FEMALE, true);

let dudley = new Muggle("Dudley J. Dursley", 11, Gender.MALE);

let ron = new Wizard("Ronald Weasley", 11);
let jenny = new Witch("Jenny Weasley", 10);

let people = [dumbledore, harry, hermione, dudley, ron, jenny];
let magical = [dumbledore, harry, hermione, ron, jenny];
let males = [dumbledore, harry, ron, dudley];
let females = [hermione, jenny];

describe("A Person", function() {
    it("should have name", function() {
        expect(harry).to.have.property("name");
        expect(harry.name).to.equal("Harry Potter");
    });

    it("should give first and last name", function() {
        expect(dumbledore.firstName).to.equal("Albus");
        expect(dumbledore.lastName).to.equal("Dumbledore");
    });

    it("should have age", function() {
        expect(dumbledore).to.have.property("age");
        expect(dumbledore.age).to.equal(99);
    });

    it("should have gender (male)", function() {
        expect(harry).to.have.property("gender");
        expect(harry.gender).to.equal(Gender.MALE);
    });

    it("should have gender (female)", function() {
        expect(hermione).to.have.property("gender");
        expect(hermione.gender).to.equal(Gender.FEMALE);
    });

    it("should give gender salutation 'Mr.' for male", function() {
        expect(harry.salutation).to.equal('Mr.');
    });

    it("should return gender salutation 'Ms.' for female", function() {
        expect(hermione.salutation).to.equal('Ms.');
    });

    it("should have a magical trait set true for wizard", function() {
        expect(ron).to.have.property("magical").that.is.true;
        expect(ron).to.be.an.instanceof(WizardKind);
        expect(ron).to.be.an.instanceof(Wizard)
    });

    it("should have a magical trait set true for witch", function() {
        expect(jenny).to.have.property("magical").that.is.true;
        expect(jenny).to.be.an.instanceof(WizardKind);
        expect(jenny).to.be.an.instanceof(Witch)
    });

    it("should not have magical trait for muggle", function() {
        expect(dudley).to.not.have.property("magical");
        expect(dudley).to.be.an.instanceof(Muggle);
    });
}); 