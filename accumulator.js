var stateMachine = require('./stateMachine.js').stateMachine;

var accumulator = Object.create(stateMachine);

accumulator.getNextValues = function(input,state) {
	return {nextState:state+input,output:state+input};
}; 

module.exports.accumulator = accumulator;
