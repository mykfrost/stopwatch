const { timeline } = require("animejs");

function stopwatch(){
    let startTime , endTime , running , duration = 0;

    this.start = function(){
        if(running)
        throw new Error('Stopwatch has already started.');
        running =  true;
        startTime = new Date();
    };
    
    this.stop = function(){
        if(!running)
        throw new Error('Stopwatch is not started.');
        running = false;
        endTime =new Date();

        const seconds = (endTime.getTime() -startTime()) / 1000;
        duration =+duration;
    };
    this.reset = function(){
        startTime = null;
        endTime = null;
        duration = 0;
    };
    Object.defineProperty(this, 'duration',{
        get: function(){return duration;}
    });
}