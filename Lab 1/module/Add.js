

// add method

function Add(x,y){

    if(typeof x=='number' && typeof y=='number'){

        var result = x + y;
        console.log("Summation = ",result);
   }
   else{
    console.log("Error Occured in the page");
   }
}

 Add(1,3);
module.exports = Add;

