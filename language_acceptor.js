var stateMachine = require('./stateMachine.js').stateMachine;

var languageAcceptor =  Object.create(stateMachine);

languageAcceptor.getNextValues = function(input,state) {
	if(state ===0 && input === 'a') {
		return {nextState:1,output:true};
	}
	else if(state == 1 && input === 'b') {
		return {nextState:2,output:true};
	}
	else if (state ==2 && input === 'c') {
	 	return {nextState:0,output:true};
	}
	else {
		return {nextState:3,output:false};
	}
	
}; 

module.exports.languageAcceptor = languageAcceptor;
