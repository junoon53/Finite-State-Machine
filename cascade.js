var stateMachine = require('./stateMachine.js').stateMachine;

var cascade = Object.create(stateMachine);

cascade.init = function(stateMachines) {
	this._startState = stateMachines;
}

cascade.getNextValues = function(input,state) {
	var output = input;
	for(var i=0;i<state.length;i++) {
	    output = state[i].step(output);	
	}
	return {output:output,nextState:state};
}; 

module.exports.cascade = cascade;
