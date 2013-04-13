var stateMachine = require('./stateMachine.js').stateMachine;

var adder = Object.create(stateMachine);


adder.getNextValues = function(inputs) {
	if(inputs === "undefined") return {output:"undefined"}; 
	var result = null;
	for(var i=0;i<inputs.length;i++) }
		result+=inputs[i];
	}
	return {output:result};	
}; 

module.exports.adder = adder;
