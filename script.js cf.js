/* =====================================
   Credit Fix — Interactions & Animations
   File: script.js
   ===================================== */
(() => {
  // Slogan rotator
  const slogans = [
    "We Can't Fix It, No One Can.",
    "Credit Done Right — The First Time.",
    "From Disputes to Results — Faster.",
    "Navy & Gold Service. White-Glove Care."
  ];
  let idx = 0;
  const el = document.querySelector('[data-slogan]');
  function rotateSlogan(){
    if(!el) return;
    idx = (idx + 1) % slogans.length;
    el.classList.add('wiggle');
    setTimeout(() => {
      el.textContent = slogans[idx];
      el.classList.remove('wiggle');
    }, 250);
  }
  setInterval(rotateSlogan, 4000);

  // Button ripple effect
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if(!btn) return;
    btn.classList.add('wiggle');
    setTimeout(() => btn.classList.remove('wiggle'), 500);
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    for(const it of entries){
      if(it.isIntersecting){
        it.target.classList.add('is-visible');
        io.unobserve(it.target);
      }
    }
  }, {threshold: .2});
  document.querySelectorAll('.reveal').forEach(n => io.observe(n));
})();
