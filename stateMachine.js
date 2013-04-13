stateMachine = {    

        init: function(initValue) {
            this._startState = initValue;             
        },
        start: function() {            
             this._state = this._startState;
        },
        step: function(input) {            
             var result = this.getNextValues(input,this._state);
             this._state = result.nextState;
             return result.output;
        },
        get currentState() {
            return this._state;
        },
        transduce: function(inputs) {
            
                var outputs = [];
                for(var i=0;i<inputs.length;i++){
                   outputs.push(this.step(inputs[i]));
                };
                return outputs;
            
        },
	getNextValues:function(input,state) {
		return {nextState:input+state,output:input+state};		
	}
};

module.exports.stateMachine = stateMachine;
