var stateMachine = require('./stateMachine.js').stateMachine;

var selector = Object.create(stateMachine);

selector.getNextValues = function(input) {
	return {output:input[this._startState]};
}; 

module.exports.selector = selector;
