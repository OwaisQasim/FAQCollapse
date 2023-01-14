const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        if (toggle.parentNode.classList.contains('active')) {
            toggle.parentNode.classList.remove('active');
        } else {
            toggles.forEach(t => t.parentNode.classList.remove('active'))
            toggle.parentNode.classList.add('active');
        }
    });
});




