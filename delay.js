var stateMachine = require('./stateMachine.js').stateMachine;

var delay = Object.create(stateMachine);

delay.getNextValues = function(input,state) {
	return {nextState:input,output:state};
}; 

module.exports.delay = delay;
