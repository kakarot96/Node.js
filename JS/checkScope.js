


let i = 'function scope';

if(true){
     let i = 'block scope';
    console.log('block '+i);
    
}
console.log('funciton '+ i);