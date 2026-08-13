document.addEventListener('DOMContentLoaded', () => {
    // تفاعلات الشريط السفلي
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.tagName === 'BUTTON') {
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });
});

