document.addEventListener('DOMContentLoaded', () => {
    // Image slider
    const images = [
        'https://via.placeholder.com/800x400',
        'https://via.placeholder.com/800x400',
        'https://via.placeholder.com/800x400'
    ];
    let currentImageIndex = 0;
    const imageSlider = document.getElementById('image-slider');
    const imgElement = imageSlider.querySelector('img');

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.src = images[currentImageIndex];
    }

    setInterval(changeImage, 30000); // Change image every 30 seconds

    // Music player
    const musicList = document.getElementById('music-list');
    const audioPlayer = new Audio();

    musicList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const audioSrc = event.target.getAttribute('data-audio');
            audioPlayer.src = audioSrc;
            audioPlayer.play();

            // Highlight the clicked item
            const items = musicList.querySelectorAll('li');
            items.forEach(item => item.classList.remove('playing'));
            event.target.classList.add('playing');
        }
    });
});