var stateMachine = require('./stateMachine.js').stateMachine;
var adder = require('./adder.js').adder;
var delay1 = require('./delay.js').delay;
var delay2 = require('./delay.js').delay;
var delay3 = require('./delay.js').delay;
var parallel = require('./parallel.js').parallel;
var cascade = require('./cascade.js').cascade; 

var fibonacci = Object.create(stateMachine);

fibonacci.init = function(startState) {
	delay1.init(startState);
	delay2.init(startState);
	delay3.init(0);
	adder.init(0);
	
	this._startState = startState;
};

fibonacci.start = function() {
	delay1.start();	
	delay2.start();
	delay3.start();
	adder.start();
	this._state = this._startState;	
	
};

fibonacci.getNextValues = function(input) {
	var output = 
}; 

module.exports.fibonacci = fibonacci;
