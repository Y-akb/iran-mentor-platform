const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle.addEventListener('click',()=>{
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
//close menu when clicking outside
document.addEventListener('click',(event)=>{
    if(
        !nav.contains(event.target)&&
        !menuToggle.contains(event.target)
    ){
        nav.classList.remove('active');
        menuToggle.classList.toggle('active');
    }
});