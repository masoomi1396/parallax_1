const hill1 = document.getElementById('hill1');
const hill2 = document.getElementById('hill2');
const hill3 = document.getElementById('hill3');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');
const leaf = document.getElementById('leaf');
const plant = document.getElementById('plant');
const tree = document.getElementById('tree');
const text1 = document.getElementsByClassName('text1')[0];

window.addEventListener('scroll', ()=>{
    const topY = window.scrollY;
   
        hill1.style.top = (1*topY)+'px';
        hill2.style.left = -(2.5*topY)+'px';
        hill3.style.left = (2.5*topY)+'px';
        hill4.style.left = -(2*topY)+'px';
        hill5.style.left = (2*topY)+'px';
        plant.style.top = (1.5*topY)+'px';
        tree.style.top = (1.5*topY)+'px';
        leaf.style.left = (1.5*topY)+'px';
        leaf.style.top = -(1.5*topY)+'px';
        text1.style.marginTop = (topY * 2.5) + 'px';
    
})