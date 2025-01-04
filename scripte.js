const listTitle = document.querySelectorAll(".list");

listTitle.forEach((item, index) => {
    // item.addEventListener('mouseover', () => {
    //     item.querySelector('img').src = '/images/icon-arrow-up.svg';
    // });
    // item.addEventListener('mouseout', () => {
    //     item.querySelector('img').src = '/images/icon-arrow-down.svg';
    // });

    
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
