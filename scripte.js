const listTitle = document.querySelectorAll(".list-title");

listTitle.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('img').src = '/images/icon-arrow-up.svg';
    });
    item.addEventListener('mouseout', () => {
        item.querySelector('img').src = '/images/icon-arrow-down.svg';
    });

    
    // item.querySelector('img').src = item.querySelector('img').src === '/images/icon-arrow-up.svg'? '/images/icon-arrow-down.svg' : '/images/icon-arrow-up.svg';
});
