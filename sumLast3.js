var stateMachine = require('./stateMachine.js').stateMachine;

var sumLast3 = Object.create(stateMachine);

sumLast3.getNextValues = function(input,state) {
	if(input === "undefined") return {output:"undefined",nextState:state};
	return {nextState:[state[1],input],output:state[0]+state[1]+input};
}; 

module.exports.sumLast3 = sumLast3;
