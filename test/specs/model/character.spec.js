const { expect } = require('chai');



var ron = new Person("Ron Weasley", 11, "male", true);
var hermione = new Person("Hermione Granger", 11, 'female', true);
var harry = new Person("Harry Potter", 11, "male", true);

describe('A character', function() {

	describe('Ron', function() {
		console.log(ron);
		var character = ron;
		it('should have a name', function() {
			expect(character).to.have.property('name');
			expect(character.name).to.not.be.empty;
			expect(character.name).to.equal('Ron Weasley');
		});

		it('should have an age', function() {ins
			expect(character).to.have.property('age');
			expect(character.age).to.equal(11);
		});

		it('should have a gender', function() {
			expect(character).to.have.property('gender');
			expect(character.gender).to.equal('male');
		});

		it('should have a magical status', function() {
			expect(character).to.have.property('magical');
			expect(character.magical).to.be.true;
		});

		it('should get salutation', function() {
			expect(character.salutation).to.equal("Mr.")
		});
	});


	describe('Hermione', function() {
		console.log(hermione);
		var character = hermione;
		it('should have a name', function() {
			expect(character).to.have.property('name');
			expect(character.name).to.not.be.empty;
			expect(character.name).to.equal('Hermione Granger');
		});

		it('should have an age', function() {
			expect(character).to.have.property('age');
			expect(character.age).to.equal(11);
		});

		it('should have a gender', function() {
			expect(character).to.have.property('gender');
			expect(character.gender).to.equal('female');
		});

		it('should have a magical status', function() {
			expect(character).to.have.property('magical');
			expect(character.magical).to.be.true;
		});

		it('should get salutation', function() {
			expect(character.salutation).to.equal("Miss")
		});
	});

	describe('Harry', function() {
		var character = harry;
		console.log(character);

	   it('should have a name', function() {
			expect(character).to.have.property('name');
			expect(character.name).to.not.be.empty;
			expect(character.name).to.equal('Harry Potter');
		});

		it('should have an age', function() {
			expect(character).to.have.property('age');
			expect(character.age).to.equal(11);
		});

		it('should have a gender', function() {
			expect(character).to.have.property('gender');
			expect(character.gender).to.equal('male');
		});

		it('should have a magical status', function() {
			expect(character).to.have.property('magical');
			expect(character.magical).to.be.true;
		});

		it('should get salutation', function() {
			expect(character.salutation).to.equal("Mr.")
		});
	});

	describe('dumbledore', function() {
		var character = new Wizard("Albus Dumbledore", 99);

		it('should have a name', function() {
			expect(character).to.have.property('name');
			expect(character.name).to.equal('Albus Dumbledore');
			expect(character.firstName).to.equal('Albus');
			expect(character.lastName).to.equal('Dumbledore');
			
		});

	})
});

