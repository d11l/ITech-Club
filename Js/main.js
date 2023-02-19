
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

// Change Style

let overlay = document.querySelector('.overlay');
let allinks =  document.querySelectorAll('.header .links li a');
let seLogo = document.querySelector('.se-logo img');
let Logo = document.querySelector('.logo img');
     




let fDay = document.querySelector(".FoundingDay a") ;
let r = 1 ;
let arrOFimgs = ['Lan1.jpg','Lan3.jpg'];
fDay.addEventListener('click',()=>{
    //let r = Math.floor(Math.random() * arrOFimgs.length); 
    landing.style.backgroundImage = `url(Imgs/${arrOFimgs[r]})`;    
  if(r === 1){
    landing.style.color = `#231f20`;
    document.querySelector('.intro-text').style.backgroundColor = '#eeeeeee8'
    //overlay.style.backgroundImage = `url(Imgs/)`;
    allinks.forEach(e => e.style.color = `#6b4e45` );
    gear.style.color = `#6b4e45`;
    seLogo.src = "Imgs/FoundingDayBr.png";
    Logo.src = "Imgs/logo-day27-removebg-preview.png";
    document.querySelector('.logo-tu img').style.display = "none";
    document.documentElement.style.setProperty('--main-color', "#6b4e45")
    document.querySelector('.toggle-menu').style.color = "#6b4e45";
    
    r--;
  }else{
    landing.style.color = `white`;
    document.querySelector('.intro-text h1').style.color = `var(--main-color)`;
    document.querySelector('.intro-text').style.backgroundColor = '#eeeeee15'
   //overlay.style.backgroundImage = `url(Imgs/)`;
    allinks.forEach(e => { 
    e.style.color = `white`;
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('color_option'))
    });
    gear.style.color = `white`;
    seLogo.src = "Imgs/FoundingDay.png";
    Logo.src = "Imgs/logo-removebg-preview.png";
    document.querySelector('.logo-tu img').style.display = "block";
    document.querySelector('.toggle-menu').style.color = "white";
   r++;
  }
});
/* End Change Style */




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


//--------------------------------
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