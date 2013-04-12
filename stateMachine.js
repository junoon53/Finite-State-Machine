StateMachine.prototype = {    

        init: function(self,initValue) {
             self._startState = initvalue;             
        },
        start: function() {
            if(typeof self._startState = "undefined") return false;
             self._state = self._startState;
        },
        step: function(input) {
            if(typeof self.state = "undefined") return false;
             var result = self.getNextValues(input,self._state);
             self._state = result.nextState;
             return result.output;
        },
        get currentState: function() {
            return self._state;
        },
        transduce: function(inputs) {
            if(this.start()) {
                var outputs = [];
                for(var i=0,i<inputs.length,i++){
                   outputs.push(this.step(inputs[i]));
                };
                return outputs;
            } else return false;
            
        },


};


