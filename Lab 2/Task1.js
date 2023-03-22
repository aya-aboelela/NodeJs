/* 1.create custom module  
contain function constructor 
inheriting from emitter  
this function has on and emit  
I can send data from emit and log in on function  
*/


var EventEmitter=require('events');
var util=require('util');


function Greetr()
{
    this.greeting="Hello From Lab 2 Node JS"
}

util.inherits(Greetr,EventEmitter);

// Function emit to fire event
Greetr.prototype.greet=function()
{
    console.log(this.greeting);   //Hello From Lab 2 Node JS
    this.emit("greet");           // fire Event called greet
}


var greeter1=new Greetr();

// Function on to handel event
greeter1.on('greet',function()
{
    console.log("Event Greet occured"); // Handel Event
});

greeter1.greet();


