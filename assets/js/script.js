window.addEventListener('DOMContentLoaded',()=>{
    let navToggle = document.querySelector('#navToggle');
    let nav = document.querySelector('#nav');


    navToggle.addEventListener('click',(e)=>{
        e.preventDefault;
        nav.classList.toggle('show');
    })
})