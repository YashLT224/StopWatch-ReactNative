const padToTwo=(number)=>(number<=9?`0${number}`:number);
export const displayTime=(centieconds)=>{

    //1 sec=100 centiseconds
 let minutes=0;
 let seconds=0;
if(centieconds<0){
    centieconds=0;
}
if(centieconds<100){
    return `00:00:${padToTwo(centieconds)}`
}
let remainCentiseconds=centieconds%100;
seconds=(centieconds-remainCentiseconds)/100;
if(seconds<60){
    return `00:${padToTwo(seconds)}:${padToTwo(remainCentiseconds)}`
}

let remainesconds=seconds%60;
minutes=(seconds-remainesconds)/100;
return `${padToTwo(minutes)}:${padToTwo(remainesconds)}:${padToTwo(remainCentiseconds)}`
}