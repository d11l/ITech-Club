/* Start Sitting box */
let gear = document.querySelector('#gear') ;

gear.addEventListener('click',()=>{
    document.querySelector('.setting-box').classList.toggle('open') ;
    gear.classList.toggle('fa-spin') ;
 });

document.querySelector('.reset-setting').addEventListener('click',()=>{
localStorage.clear();
location.reload();
});


if(localStorage.getItem('color_option') !== null){

document.documentElement.style.setProperty('--main-color', localStorage.getItem('color_option')) ;

// Remove active class from all and Set active class for target
document.querySelectorAll('.color-list li').forEach(e => {
    e.classList.remove('active')
    if(e.dataset.color === localStorage.getItem('color_option')){
        e.classList.add('active');
    }
});

}

// Switch Colors
const colorslist = document.querySelectorAll('.color-list li');

colorslist.forEach(li => {

li.addEventListener('click',(e)=>{
//console.log(e.target.dataset.color);

// Set color
document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
localStorage.setItem('color_option',e.target.dataset.color)


// Remove active class from all
e.target.parentElement.querySelectorAll('.active').forEach(e => e.classList.remove('active'));

// Set active class
e.target.classList.add('active');
})    

})

//----------------------------------------------------------------

if(localStorage.getItem('font_option') !== null){

document.body.style.fontFamily = localStorage.getItem('font_option');

// Remove active class from all and Set active class for target
document.querySelectorAll('.fonts-list li').forEach(e => {
    e.classList.remove('active')
    if(e.dataset.font === localStorage.getItem('font_option')){
        e.classList.add('active');
    }
});

}

// Switch fonts
const fontslist = document.querySelectorAll('.fonts-list li');

fontslist.forEach(li => {

li.addEventListener('click',(e)=>{
//console.log(e.target.dataset.color);

// Set font
document.body.style.fontFamily = e.target.dataset.font ; 
localStorage.setItem('font_option',e.target.dataset.font)


// Remove active class from all
e.target.parentElement.querySelectorAll('.active').forEach(e => e.classList.remove('active'));

// Set active class
e.target.classList.add('active');
})    

})
 

// Switch background 

let landing = document.querySelector('.landing');
let arrOFbac = ['Lan1.jpg','Lan2.webp'];
let ibac = localStorage.getItem('ibac') ? localStorage.getItem('ibac') : 0;

if(localStorage.getItem('ibac')){
landing.style.backgroundImage = `url(Imgs/${arrOFbac[ibac]})`;  
}
document.querySelector('.plusi').addEventListener('click',() =>{
    ibac++;
    ibac = ibac > 1 ? 0 : ibac;
    landing.style.backgroundImage = `url(Imgs/${arrOFbac[ibac]})`; 
    localStorage.setItem('ibac',ibac) ;
});

document.querySelector('.muni').addEventListener('click',() =>{
    ibac--;
    ibac = ibac < 0 ? 1 : ibac;
    landing.style.backgroundImage = `url(Imgs/${arrOFbac[ibac]})`;  
    localStorage.setItem('ibac',ibac) ;
});    
/* End Sitting box */ 





/*  Start Gallery  */

// Create Popup with the image
let gal = document.querySelectorAll('.gallery img');

gal.forEach(img =>{

img.addEventListener('click',(e) =>{

// Create Overlay Element and Add to the body
let overlay = document.createElement('div');
overlay.className = 'popup-overlay';
document.body.appendChild(overlay);



// Create the popup box and 
let popup_box = document.createElement('div');
popup_box.className = 'popup-box';

//if(img.alt !== null ){
    let imgh3 = document.createElement('h3');
    imgh3.appendChild(document.createTextNode(img.alt || 'ITech Club'));
    popup_box.appendChild(imgh3);
//}

let popup_img = document.createElement('img');
popup_img.src = img.src;
popup_box.appendChild(popup_img);

document.body.appendChild(popup_box);

// Create close button

let close_button = document.createElement('span');
close_button.appendChild(document.createTextNode('X'));
close_button.className = 'close_button';


popup_box.appendChild(close_button);
});

});

// add event close to close popup
document.addEventListener('click',(e) => {

if(e.target.className == "close_button"){
    e.target.parentElement.remove();

    // Remove overlay
    document.querySelector('.popup-overlay').remove();
}
});

/*  End Gallery  */



/* Start menu butten */ 
let linksa = document.querySelectorAll('.links li a');

document.querySelector('.toggle-menu').addEventListener('click', () => {
    document.querySelector('.links').classList.toggle('open');
    document.querySelector('.toggle-menu i ').classList.toggle('fa-x');
    
});


linksa.forEach((link) => {
    link.addEventListener('click', () =>{
    document.querySelector('.links').classList.toggle('open')
    document.querySelector('.toggle-menu i ').classList.toggle('fa-x');
    });
}) 
/* End menu butten */






/*======================================================================*/