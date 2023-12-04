window.onload = function() {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    function hoverEffect(image) {
        image.style.transition = 'transform 0.3s ease-in-out';
        let up = true;
        let position = 0;

        setInterval(() => {
            if (up) {
                position -= 2; // liikumise kiirus alla
                if (position <= -4) {
                    up = false;
                }
            } else {
                position += 2; // liikumise kiirus yles
                if (position >= 4) {
                    up = true;
                }
            }
            image.style.transform = `translateY(${position}px)`;
        }, 200); // muudab sagedust
    }

    hoverEffect(image1);
    hoverEffect(image2);
};
