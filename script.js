//compare two json

var obj1={name:"person 1",age:5};
var obj2={age:5,name:"person 1"}; 


var a=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            a=false;
            break;
        }
    }
}
else {
    a=false;
}
console.log("is object equal"+a);
