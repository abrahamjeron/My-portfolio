var num=document.getElementById("num1");
var counter = 0;
setInterval(()=>{
    if(counter==90){
        clearInterval
    } else{
        counter+=1
        num.innerText=`${counter}%`
    }
},25)

var num2=document.getElementById("num2");
var counter2 = 0;
setInterval(()=>{
    if(counter2==90){
        clearInterval
    } else{
        counter2+=1
        num2.innerText=`${counter2}%`
    }
},25)

var num3=document.getElementById("num3");
var counter3 = 0;
setInterval(()=>{
    if(counter3==80){
        clearInterval
    } else{
        counter3+=1
        num3.innerText=`${counter3}%`
    }
},25)

var num4=document.getElementById("num4");
var counter4 = 0;
setInterval(()=>{
    if(counter4==60){
        clearInterval
    } else{
        counter4+=1
        num4.innerText=`${counter4}%`
    }
},55)

var num5=document.getElementById("num5");
var counter5 = 0;
setInterval(()=>{
    if(counter5==75){
        clearInterval
    } else{
        counter5+=1
        num5.innerText=`${counter5}%`
    }
},55)


var num6=document.getElementById("num6");
var counter6 = 0;
setInterval(()=>{
    if(counter6==60){
        clearInterval
    } else{
        counter6+=1
        num6.innerText=`${counter6}%`
    }
},55)

var opt1 = document.querySelector(".close");
const cosmochronicle = document.querySelector(".cosmochronicle");

cosmochronicle.addEventListener('click', function () {
    if (opt1.style.display === 'flex') {
        opt1.style.display = 'none';
    } else {
        opt1.style.display = 'flex';
    }
});

var opt2 = document.querySelector(".close2");
const shurl = document.querySelector(".shurl");

shurl.addEventListener('click', function () {
    if (opt2.style.display === 'flex') {
        opt2.style.display = 'none';
    } else {
        opt2.style.display = 'flex';
    }
});

var opt3 = document.querySelector(".close3");
const ugr = document.querySelector(".ugr");

ugr.addEventListener('click', function () {
    if (opt3.style.display === 'flex') {
        opt3.style.display = 'none';
    } else {
        opt3.style.display = 'flex';
    }
});



var opt4 = document.querySelector(".close4");
const ff = document.querySelector(".ff");

ff.addEventListener('click', function () {
    if (opt4.style.display === 'flex') {
        opt4.style.display = 'none';
    } else {
        opt4.style.display = 'flex';
    }
});

var opt5 = document.querySelector(".close5");
const qz = document.querySelector(".qz");

qz.addEventListener('click', function () {
    if (opt5.style.display === 'flex') {
        opt5.style.display = 'none';
    } else {
        opt5.style.display = 'flex';
    }
});

const f1 = document.getElementById("nth")
f1.addEventListener('click',function(){
    location.href='https://www.figma.com/file/WPECwp4IsqL1STSQ28iFR7/Nth-Harmony?type=design&node-id=0-1&mode=design&t=rbuyLmzzkTCYgSzv-0'
})
const f2=document.getElementById('cc')
f2.addEventListener('click',function(){
    location.href='https://www.figma.com/file/wsMx6CWd6gpkCjxGlB0Sny/Cosmo-Chronicle?type=design&mode=design&t=rbuyLmzzkTCYgSzv-0'
})
const f3 = document.getElementById('unr')
f3.addEventListener('click',function(){
    location.href='https://www.figma.com/file/93srD5Liylrk1vbllwrBdk/Underground-runner?type=design&mode=design&t=rbuyLmzzkTCYgSzv-0'
})