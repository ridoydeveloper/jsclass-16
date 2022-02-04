

const button = document.getElementById('apply');
const keep = document.getElementById('keep');
const discard = document.getElementById('discard');
const modal = document.querySelector('.rid-modal');
const mclose = document.querySelector('.rid-modal .close');
const aclose = document.querySelector('.rid-alert .close');
const alert = document.querySelector('.rid-alert');



button.addEventListener('click', function(e){
    e.preventDefault();


    modal.classList.add('active');
});

mclose.addEventListener('click', function(){

    alert.style.display = 'flex';
});

aclose.addEventListener('click', function(){

    alert.style.display = 'none';
});

keep.addEventListener('click', function(){

    alert.style.display = 'none';
});

discard.addEventListener('click', function(){

    alert.style.display = 'none';
    modal.classList.remove('active');
});


modal.addEventListener('click', function(e){

    if ( e.target == this ){
        
        modal.classList.remove('active');
    }
    
});



// Accordion

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#0084e9";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}