var Bee = function() {
	Grub.call(this); // call the grub Superclass
	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';
};
Bee.prototype = Object.create(Grub.prototype); // create an object that delegates to the Superclass prototype
Bee.prototype.constructor = Bee;
