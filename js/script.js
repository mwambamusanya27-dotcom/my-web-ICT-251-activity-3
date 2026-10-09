document.addEventListener('DOMContentLoaded', () => {
  // MENU BUTTON
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('main-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuBtn.textContent = nav.classList.contains('open')? '✕ Close' : '≡ Menu';
    });
  }

  // DARK MODE - SWITCH BLACK/LIGHT
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      themeBtn.textContent = isDark? '☀️ Light Mode' : '🌙 Dark Mode';
      localStorage.setItem('theme', isDark? 'dark' : 'light');
    });
    // Keep dark mode after refresh
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
      themeBtn.textContent = '☀️ Light Mode';
    }
  }

  // SHOW/HIDE DETAILS
  const detailsBtn = document.getElementById('details-btn');
  const moreDetails = document.getElementById('more-details');
  if (detailsBtn && moreDetails) {
    detailsBtn.addEventListener('click', () => {
      const hidden = moreDetails.style.display === 'none' || moreDetails.style.display === '';
      moreDetails.style.display = hidden? 'block' : 'none';
      detailsBtn.textContent = hidden? 'Hide Details' : 'Show Details';
    });
  }

  // GALLERY - Previous / Next (will not error if you removed it)
  const images = [
    { src: 'images/photo1.jpg', caption: 'My photo at Mulungushi University' },
    { src: 'images/photo2.jpg', caption: 'Study time in library' },
    { src: 'images/photo3.jpg', caption: 'With my friends' }
  ];
  let cur = 0;
  const gImg = document.getElementById('gallery-image');
  const gCap = document.getElementById('gallery-caption');
  const show = (i) => {
    if (gImg) gImg.src = images[i].src;
    if (gCap) gCap.textContent = images[i].caption;
  };
  document.getElementById('prev-btn')?.addEventListener('click', () => {
    cur = (cur - 1 + images.length) % images.length;
    show(cur);
  });
  document.getElementById('next-btn')?.addEventListener('click', () => {
    cur = (cur + 1) % images.length;
    show(cur);
  });

  // CONTACT FORM - Browser demo only
  const form = document.getElementById('contact-form');
  const preview = document.getElementById('form-preview');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('nameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('messageError').textContent = '';

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      let valid = true;

      if (!name) {
        document.getElementById('nameError').textContent = 'Name required';
        valid = false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Enter valid email';
        valid = false;
      }
      if (!message) {
        document.getElementById('messageError').textContent = 'Message required';
        valid = false;
      }

      if (valid) {
        preview.style.display = 'block';
        preview.innerHTML = `<h3>Preview - No message sent</h3><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p><p style="color:green;font-weight:bold;">Validated successfully</p>`;
        form.reset();
      }
    });
  }
});
