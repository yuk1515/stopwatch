const timeElement = document.getElementById('time')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

//経過時間mm秒
let keikajikan = 0 ;

let tomerutame = null;

function updateTime(){
    const s = Math.floor(keikajikan / 1000);
    const m = Math.floor(keikajikan /(1000*60))%60;
 
    
    const sStr = s.toString().padStart(2 ,'0');
    const mStr = m.toString().padStart(2 ,'0');
    
    timeElement.innerHTML = `${mStr}:${sStr}`;
    
} 

start.addEventListener('click',function(e){
    if(tomerutame !== null){ return;}
    let pre = new Date();
    tomerutame=setInterval(function(){
        const now =new Date()
        keikajikan += now -pre;
        pre = now;
        
        updateTime()
        
        console.log(keikajikan)
    
},10);
});

stop.addEventListener('click' , function(e){
clearInterval(tomerutame);
tomerutame =null;
});



reset.addEventListener('click' , function(e){
    tomerutame =null;
    keikajikan =  0;
    updateTime();
    
    
});

function startbutton(){
    document.getElementById("start").disabled="disabled";
    document.getElementById("stop").disabled="";
    document.getElementById("reset").disabled="disabled";
}
function stopbutton(){
    document.getElementById("start").disabled="";
    document.getElementById("stop").disabled="disabled";
    document.getElementById("reset").disabled="";
}
function resetbutton(){
    document.getElementById("start").disabled="";
    document.getElementById("stop").disabled="disabled";
    document.getElementById("reset").disabled="disabled";
}