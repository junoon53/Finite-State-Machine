var stateMachine = require('./stateMachine.js').stateMachine;

var feedback = Object.create(stateMachine);

feedback.init = function(machine) {
	this._machine = machine;
	this._startState = machine._startState;
}	 

feedback.getNextValues = function(input,state) {
	var output1 = this._machine.getNextValues("undefined",state)
	var output2 = this._machine.getNextValues(output1.output,state);
	return {output:output1.output,nextState:output2.nextState};		
}; 



module.exports.feedback= feedback;
