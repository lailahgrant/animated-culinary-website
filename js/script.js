// toggle search bar
function toggleSearch() {
    const search = document.querySelector('.search');
    search.classList.toggle('active')
}

/* a) toggle 3D flipping plate effect
b) toggle learn more button
*/

function toggleFlip() {
    const imgBox = document.querySelector('.imgBox');
    const btn = document.querySelector('.btn');
    imgBox.classList.toggle('active');
    btn.classList.toggle('active');
}

/**
 * Swap the banner images when a small image is selected
 */
function changeImg(img) {
    const foodImg = document.querySelector('.food-img');
    foodImg.src = `../img/${img}`;
}




