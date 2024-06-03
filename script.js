let s2Index=0;

function accordian(x){
let panel = x.nextElementSibling;
x.classList.toggle("active");
let panels=document.getElementsByClassName('panel');
for(let i=0;i<panels.length;++i){
    if(panel!=panels[i])
    panels[i].style.maxHeight=null;
}
if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
} else {
panel.style.maxHeight = panel.scrollHeight + "px";
} 
}
function slider2Next(){
    let images=document.getElementsByClassName('slider2-content');
    for(let i=0;i<images.length;++i){
        images[i].style.display='none';
    }
    if(s2Index>=31){
        s2Index=31;
    }
    else{
        s2Index++;
    }
    for(let i=0;i<5;++i){
        images[s2Index++].style.display='block';
    }
    s2Index=s2Index-5;
}
function slider2Prev(){
    let images=document.getElementsByClassName('slider2-content');
    for(let i=0;i<images.length;++i){
        images[i].style.display='none';
    }
    if(s2Index<1){
        s2Index=0;
    }
    else{
        s2Index--;
    }
    for(let i=0;i<5;++i){
        images[s2Index++].style.display='block';
    }
    s2Index=s2Index-5;
}