var stateMachine = require('./stateMachine.js').stateMachine;

var increment = Object.create(stateMachine);


increment.getNextValues = function(input) {
	if(input==="undefined") return {output:"undefined"};
	return {output:input+this._startState};
	
}; 

module.exports.increment = increment;
