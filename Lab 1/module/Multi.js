

// Multiplication method

var Multi =
function(x,y){

    if(typeof x=='number' && typeof y=='number'){

        var result = y * x;
        console.log("Multiplication = ",result);
    }
    else{
        console.log("Error Occured in the page");
    }
}

Multi(1,3);

module.exports = Multi;
