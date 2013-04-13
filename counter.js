var feedback = require('./feedback.js').feedback;
var cascade = require('./cascade.js').cascade;
var increment = require('./increment.js').increment;
var delay =   require('./delay.js').delay;

var counter = {};
counter.init = function(init,step) {
	increment.init(step);
	delay.init(init);	
	cascade.init([increment,delay]);
	feedback.init(cascade);
};

counter.start = function() {
	increment.start();
	delay.start();
	cascade.start();	
	feedback.start();	
};

counter.step = function() {
	return feedback.step();
};

module.exports.counter = counter;


