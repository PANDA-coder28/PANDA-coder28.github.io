if (document.querySelector('.login-box')) {
    const form = document.querySelector('.login-box form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;
        window.location.href = `home.html?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    });
}
if (window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const password = params.get('password');
    console.log('Email:', email);
    console.log('Password:', password);
}

(function() {
  const query = window.location.search;

  if (query) {
    localStorage.setItem("params", query);
  }

  else if (localStorage.getItem("params")) {
    window.location.search = localStorage.getItem("params");
  }

  const savedQuery = localStorage.getItem("params");
  if (savedQuery) {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
      const href = link.getAttribute("href");
      if (href && !href.includes("?")) {
        link.href = href + savedQuery;
      }
    });
  }
})();

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("params");  
    window.location.href = "index.html";
  });
}

if (logoutBtn && !localStorage.getItem("params")) {
  logoutBtn.style.display = "none";
}

if (document.querySelector('.slider-wrapper')) {
  const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}