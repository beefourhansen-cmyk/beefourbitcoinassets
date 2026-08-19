// Pumpkin Protocol — deliberately small, calm interactions.

(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const leafEmoji = ['🍂', '🍁', '🍃', '🌰'];
  hero.addEventListener('click', function (e) {
    if (e.target.closest('a, button')) return;
    const leaf = document.createElement('span');
    leaf.className = 'leaf';
    leaf.textContent = leafEmoji[Math.floor(Math.random() * leafEmoji.length)];
    const rect = hero.getBoundingClientRect();
    leaf.style.position = 'absolute';
    leaf.style.left = (e.clientX - rect.left) + 'px';
    leaf.style.top = (e.clientY - rect.top) + 'px';
    leaf.style.pointerEvents = 'none';
    hero.appendChild(leaf);
    setTimeout(function () { leaf.remove(); }, 1600);
  });
})();

(function () {
  if (!('IntersectionObserver' in window)) return;
  const items = document.querySelectorAll('.card, .charm, .pass-card');
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = '';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    io.observe(el);
  });
})();
