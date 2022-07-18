//const { timeline } = require("animejs");

function Stopwatch(){
    let startTime , endTime , running , duration = 0;

   
    Object.defineProperty(this, 'duration',{
        get: function(){return duration;},
        set: function(value){duration = value;}
    });


    Object.defineProperty(this, 'startTime',{
        get: function(){return startTime;}
    });


    Object.defineProperty(this, 'endTime',{
        get: function(){return endTime;}
    }); 

    Object.defineProperty(this, 'running',{
        get: function(){return running;}
    });
}


 Stopwatch.prototype.start = function(){
    if(this.running)
    throw new Error('Stopwatch has already started.');
    this.running =  true;
    this.startTime = new Date();
};

Stopwatch.prototype.stop = function(){
    if(!this.running)
    throw new Error('Stopwatch is not started.');
    this.running = false;
    this.endTime =new Date();

    const seconds = (this.endTime.getTime() -this.startTime()) / 1000;
    this.duration =+duration;
};
Stopwatch.prototype.reset = function(){
    this.startTime = null;
   this.endTimeime = null;
   this.duration = 0;
};