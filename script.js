// CAROUSEL BANNERS
const photos = [
    {
        src: 'images/banners/B1.png',
        alt: 'Placeholder 1'
    },
    {
        src: 'images/banners/B2.png',
        alt: 'Placeholder 2'
    },
        {
        src: 'images/banners/B3.png',
        alt: 'Placeholder 3'
    },
        {
        src: 'images/banners/B4.png',
        alt: 'Placeholder 4'
    },
        {
        src: 'images/banners/B5.png',
        alt: 'Placeholder 5'
    },
]

let currentIndex = 0;
const image = document.querySelector('#carousel-image');

function showPhoto() {
    image.src = photos[currentIndex].src;
    image.alt = photos[currentIndex].alt;
}

document.querySelector('#next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto()
});

document.querySelector('#previous').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showPhoto();
});

showPhoto()



// Get Button to Change Image