const listTitle = document.querySelectorAll(".list");
const closeButton  = document.querySelector(".close-button");
const navigator  = document.querySelector(".nav");
const blackParent  = document.querySelector(".black-parent");
const menu  = document.querySelector(".menu");

listTitle.forEach(item => {
   
    item.addEventListener('click', function(){
        item.querySelector('.drop-down-list').classList.toggle('showList');
        const imgLs = item.querySelector('img');
        
        if(imgLs.src.includes('/images/icon-arrow-up.svg')){
            imgLs.src = '/images/icon-arrow-down.svg';
        } else {
            imgLs.src = '/images/icon-arrow-up.svg';
        }
    });
});

// Open the dropdown sidebar menu

menu.addEventListener('click', function(){
    navigator.style.display = 'flex';
    blackParent.style.display = 'block';
});
// Close the dropdown sidebar menu

closeButton.addEventListener('click', function(){
    navigator.style.display = 'none';
    blackParent.style.display = 'none';
});

 