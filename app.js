// import {compmed} from './index.js';


const pt1 = document.getElementById("dx1");
const pt2 = document.getElementById("dx2");
const pt3 = document.getElementById("dx3");
const bk = document.getElementById("bk");
const dj = document.getElementById("dj");
const hp = document.getElementById("hp");
const bkhpi = document.getElementById("bkHPI");
const djhpi = document.getElementById("djHPI");
const hphpi = document.getElementById("hpHPI");
const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");
const sub3 = document.getElementById("sub3");
const view2 = document.getElementById("view2");


function addHPI(pt){
    if(pt === dx1){
        dj.classList.add("hidden");
        hp.classList.add("hidden");
        dx1.classList.add("hidden");
        bk.classList.add("expand");
        bkhpi.classList.remove("hidden");
        sub1.classList.remove("hidden");
    }
    else if(pt ===dx2){
            bk.classList.add("hidden");
            hp.classList.add("hidden");
            dx2.classList.add("hidden");
            dj.classList.add("expand");
            djhpi.classList.remove("hidden");
            sub2.classList.remove("hidden");
    }
    else if(pt ===dx3){
        dj.classList.add("hidden");
        bk.classList.add("hidden");
        dx3.classList.add("hidden");
        hp.classList.add("expand");
        hphpi.classList.remove("hidden");
        sub3.classList.remove("hidden");
}
}

function subHPI(){
    console.log(sub3);
    sub2.classList.add("hidden");
    var delayInMilliseconds = 3000; //1 second

    setTimeout(function() {
        view2.classList.remove("hidden");
    }, delayInMilliseconds);

}

