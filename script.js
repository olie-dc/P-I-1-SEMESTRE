document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
        });
    }

    leftButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showItem(currentIndex);
    });

    rightButton.addEventListener('click', function() {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    });

    showItem(currentIndex);
});
