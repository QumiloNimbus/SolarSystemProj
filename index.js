const earth=document.getElementById("earth");
const radius=250;
const angularVelocity=1;
const timePeriod=5;
const frequency=0.5;
const time=new Date();
initTime=time.getTime();
initTime=(initTime/1000);
console.log(initTime)
a=setInterval(()=>{
    newTime=new Date();
    currentTime=newTime.getTime();
    currentTime=(currentTime/1000);
    let runTime=(currentTime-initTime);
    let phase=(2*Math.PI*frequency)*runTime;
    let x=radius*Math.cos(phase);
    let y=radius*Math.sin(phase);
    earth.style.transform=`translate(${x}px,${y}px)`;
    // earth.style.top=`${y}px`;
    // earth.style.right=`${x}px`;
    if(angularVelocity*runTime>=6.28){
        console.log(runTime.toFixed(2));
    }
},1);

