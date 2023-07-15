
const mainFeaturedImage = document.querySelector('#gallery figure img');
const bottomThumbnailImages = document.querySelectorAll('#gallery ul li img');

mainFeaturedImage.src = bottomThumbnailImages[0].src.replace('-small.jpg', '-large.jpg');
mainFeaturedImage.alt = bottomThumbnailImages[0].alt;
mainFeaturedImage.parentElement.querySelector('figcaption').textContent = bottomThumbnailImages[0].alt;

bottomThumbnailImages.forEach(thumbnail =>
{
    thumbnail.addEventListener('click', function() 
    {
        // Here we update the featured image with the new click thumbnail image
        mainFeaturedImage.src = this.src.replace('-small.jpg', '-large.jpg');
        mainFeaturedImage.alt = this.alt;
        mainFeaturedImage.parentElement.querySelector('figcaption').textContent = this.alt;
    });
});

