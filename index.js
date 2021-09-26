'use strict'
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerButton = $('#header').querySelector('button');
headerButton.addEventListener('mouseover', changeColor => {
    headerButton.style.animationDuration = '0.5s'
        headerButton.style.animationFillMode = 'both'
        headerButton.style.animationName = 'changeButton';
        headerButton.querySelector('i').style.color = 'white'
    headerButton.addEventListener('mouseout', changeColor => {
        headerButton.style.animationName = 'changeBack';
    })
 
});
document.addEventListener('scroll', function(e){
    console.log(document.defaultView.pageYOffset === 0)
    if (document.defaultView.pageYOffset === 0){
        headerButton.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    }else{
        headerButton.style.background = 'black';
    }
    
})

