var stateMachine = require('./stateMachine.js').stateMachine;

var average2 = Object.create(stateMachine);

average2.getNextValues = function(input,state) {
	return {nextState:input,output:(input + state)/2};
}; 

module.exports.average2 = average2;
