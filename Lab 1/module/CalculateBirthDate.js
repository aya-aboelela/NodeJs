

var CalcAge=
function(name,birthday){
    const current = new Date();
    const age = current.getFullYear() - birthday.getFullYear();

    if(age <0){
        throw new Error('Invalid Year..');
    }

    return `Hello ${name} , Your Age Now Equal : ${age}`;
}


try{
    var age = CalcAge('Aya', new Date(1999,11,10));
    console.log(age);
}
catch(err){
    console.log(err.message);
}

module.exports = {
    CalcAge : CalcAge
};