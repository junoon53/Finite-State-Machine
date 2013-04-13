var stateMachine = require('./stateMachine.js').stateMachine;

var parallel= Object.create(stateMachine);

parallel.init = function(stateMachines) {
	this._startState = stateMachines;
}

parallel.getNextValues = function(input,state) {
	var output = [];
	for(var i=0;i<state.length;i++) {
	    output.push(state[i].step(input));	
	}
	return {output:output,nextState:state};
}; 

module.exports.parallel = parallel;
