// メニュー開閉
document.querySelector('.menu-btn')?.addEventListener('click', () => {
  document.querySelector('nav.gnav').classList.toggle('open');
});

// ふわっと表示
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade').forEach((el) => io.observe(el));

// 数字のカウントアップ
const counter = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const end = Number(el.dataset.count);
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    counter.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach((el) => counter.observe(el));

// デモ用フォーム(送信しない)
document.querySelector('form.cf')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('こちらは見本ページのため送信されません。公開時はお問い合わせが届くフォームに切り替えます。');
});
