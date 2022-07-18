//const { timeline } = require("animejs");

function Stopwatch(){
    let startTime , endTime , running , duration = 0;

   
    Object.defineProperty(this, 'duration',{
        get: function(){return duration;}
    });
}

const watch = new Stopwatch();
 console.log(watch.start());

 Stopwatch.prototype.start = function(){
    if(running)
    throw new Error('Stopwatch has already started.');
    running =  true;
    startTime = new Date();
};

Stopwatch.prototype.stop = function(){
    if(!running)
    throw new Error('Stopwatch is not started.');
    running = false;
    endTime =new Date();

    const seconds = (endTime.getTime() -startTime()) / 1000;
    duration =+duration;
};
Stopwatch.prototype.reset = function(){
    startTime = null;
    endTime = null;
    duration = 0;
};