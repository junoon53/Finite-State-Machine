var stateMachine = require('./stateMachine.js').stateMachine;

var countUpNDown = Object.create(stateMachine);

countUpNDown.getNextValues = function(input,state) {

	if(input == 'u') {
	    	return {nextState:state+1,output:state+1};
	} else {
		return {nextState:state-1,output:state-1};
	}
}; 

module.exports.countUpNDown = countUpNDown;
