module.exports = function() {
    return new stateMachine();
};


function stateMachine() {

        var self = this;

        this.init = function(initValue) {

            self._startState = initValue;             
        };

        this.start = function() {            
             self._state = self._startState;
        };
        this.step = function(input) {            
             var result = self.getNextValues(input,self._state);
             self._state = result.nextState;
             return result.output;
        };
        this.getCurrentState = function() {
            return self._state;
        };
        this.transduce =  function(inputs) {
            
            var outputs = [];
            for(var i=0;i<inputs.length;i++){
               outputs.push(self.step(inputs[i]));
            };
            return outputs;
            
        };
	    this.getNextValues = function(input,state) {
		      return {nextState:input+state,output:input+state};		
	    };
};


