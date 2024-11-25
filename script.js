document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.style.background = window.scrollY > 50 ? 'rgba(0, 0, 0, 0.8)' : 'transparent';
    header.style.transition = 'background 0.3s';
});

const filterProjects = (category) => {
    const items = document.querySelectorAll('.project-item');
    items.forEach((item) => {
        item.style.display =
            category === 'all' || item.dataset.category === category
                ? 'block'
                : 'none';
    });
};

// Example usage: Add buttons to filter (optional)
document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
        filterProjects(button.dataset.filter);
    });
});
const projectItems = document.querySelectorAll('.project-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const closeBtn = document.querySelector('.close-btn');

// Open lightbox on project click
projectItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;

        lightboxImage.src = imgSrc;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;

        lightbox.style.display = 'flex';
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

