// Additional JavaScript for any interactive features or animations

window.onload = () => {

    const galleryItems = document.querySelectorAll('.gallery-item');



    galleryItems.forEach(item => {

        item.addEventListener('mouseenter', () => {

            item.style.transform = 'rotateY(360deg)';

        });



        item.addEventListener('mouseleave', () => {

            item.style.transform = 'rotateY(0deg)';

        });

    });

};
