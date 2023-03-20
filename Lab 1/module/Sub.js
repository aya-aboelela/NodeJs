

// Subtraction method

function Sub(x,y){

    if(typeof x=='number' && typeof y=='number'){

        if(x>y){
            var result = x - y;
            console.log("Subtraction = ",result);
        }
        else{
            var result = y-x;
            console.log("Subtraction = ",result);
        }
    }
    else{
        console.log("Error Occured in the page");
    } 
}

Sub(10,6);

module.exports = Sub;