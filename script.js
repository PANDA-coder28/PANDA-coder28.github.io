if (document.querySelector('.login-box')) {
    const form = document.querySelector('.login-box form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Redirect with parameters
        window.location.href = `home.html?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    });
}

// Check for URL parameters on index.html
if (window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const password = params.get('password');
    console.log('Email:', email);
    console.log('Password:', password);
}

if (document.querySelector('.slider-wrapper')) {
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}