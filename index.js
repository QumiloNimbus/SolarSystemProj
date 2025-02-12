const earth=document.getElementById("earth");
const body=document.querySelector("body");
const time=new Date();

//earth properties
const radius=250;
const angularVelocity=1;
const timePeriod=5;
const frequency=0.1;


initTime=time.getTime();
initTime=(initTime/1000);
console.log(initTime)


//stars
for(let i=0;i<=100;i++){
    
    const star=document.createElement("div");
    //position
    x=(Math.random()*100).toFixed(0);
    y=(Math.random()*100).toFixed(0);
    star.style.top=`${x}%`;
    star.style.left=`${y}%`;
    //size
    let w=(Math.random()/3).toFixed(3);
    star.style.width=`${w}vw`;
    star.style.height=`${w}vw`;
    //colors
    let h=(Math.random()*361).toFixed(0);
    let s=(Math.random()*101).toFixed(0);
    let l=(Math.random()*16).toFixed(0)+60;
    let color=`hsl(${h},${s}%,${l}%)`
    star.style.backgroundColor=color;
    //glow
    star.style.boxShadow=`0px 0px 10px 1px hsl(${h},70%,50%)`
    
    star.classList.add("star");
    body.append(star);
    console.log(star.style.width)
}


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
    // if(angularVelocity*runTime>=6.28){
    //     console.log(runTime.toFixed(2));
    // }
},1);

