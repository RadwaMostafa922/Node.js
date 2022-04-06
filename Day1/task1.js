// Add:
const add =(a=0,b=0) => {
    if(isNaN(a)||isNaN(b)){
        console.log("please enter numbers");
    }
    else{
        return a+b;
    }
}

//Sub:
const sub = (a=0 ,b=0) =>{
    if(isNaN(a)||isNaN(b)){
        console.log("please enter numbers");
    }
    else{
        return a-b;
    }
}

//Multiply:
const multi = (a=0 ,b=0) =>{
    if(isNaN(a)||isNaN(b)){
        console.log("please enter numbers");
    }
    else{
        return a*b;
    }
}

module.exports = {
    add,
    sub,
    multi
}