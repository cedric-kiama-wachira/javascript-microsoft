// Implicit False
const noNameOne = '';

if(noNameOne){
    console.log("Name is undefined")
} else {
    console.log(`Name is: ${noNameOne} defined`)
};

const noNameTwo = '';

if(!noNameTwo){
    console.log("Name is undefined")
} else {
    console.log(`Name is: ${noNameTwo} defined`)
};

const statusOne = 500;

if(statusOne === 200){
    console.log("This is ok");
} else if(statusOne === 400 || statusOne === 500){
    console.log("Not Ok");
} else{
    console.log("Unknown!");
};


const statusTwo = 990;

switch(statusTwo) {
    case 200:
        console.log("Ok!");
        break;
    case 400:
    case 990:
        console.log("Error");
        break;
    default:
        console.log("Unknown Status");
        break;
}