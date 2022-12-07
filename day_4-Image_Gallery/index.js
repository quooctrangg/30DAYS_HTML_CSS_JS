let image = document.querySelectorAll('.img img')
let gallery = document.getElementsByClassName('gallery')[0]
let gallery__inner = document.querySelectorAll('.gallery__inner img')[0]
let Close = document.getElementsByClassName('gallery__control-close')[0]
let next = document.getElementsByClassName('gallery__control-next')[0]
let prev = document.getElementsByClassName('gallery__control-prev')[0]

let currentIndex = 0;

const showGallery = (index) => {
    if (index == 0) {
        prev.style.display = 'none'
    } else {
        prev.style.display = 'block'
    }

    if (index == image.length - 1) {
        next.style.display = 'none'
    } else {
        next.style.display = 'block'
    }

    gallery__inner.src = image[index].src;
    gallery.classList.add("show");
}

image.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showGallery(currentIndex)
    })
})

Close.addEventListener('click', () => {
    gallery.classList.remove("show");
})

next.addEventListener('click', () => {
    if (currentIndex < image.length - 1) {
        currentIndex++;
        showGallery(currentIndex)
    }
})

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery(currentIndex)
    }
})