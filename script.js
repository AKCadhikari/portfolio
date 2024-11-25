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

