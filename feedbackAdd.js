function feedbackAdd() {
	var self = require('./stateMachine.js')();
	var adder = require('./adder.js')();
	var cascade = require('./cascade.js')();

	self.init = function(machine) {
		cascade.init([adder,machine]);
		self._startState = cascade._startState;
	};

	self.start = function() {
		cascade.start();
		self._state = cascade._startState;
	};	 

	self.step = function(input,state) {
		var output1 = cascade.getNextValues([input],state);
		var output2 = cascade.getNextValues([input,output1.output],state);
		return {output:output1.output,nextState:output2.nextState};		
	};
	return self;
};

module.exports = function(){
	return new feedbackAdd();
};
