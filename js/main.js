// Live cursor coordinate listener
document.addEventListener('mousemove', (e) => {
  const lat = (39.9526 + (0.5 - e.clientY / window.innerHeight) * 0.02).toFixed(4);
  const lng = (-75.1652 + (e.clientX / window.innerWidth - 0.5) * 0.02).toFixed(4);
  const coordEl = document.querySelector('.coord-tag');
  if (coordEl) {
    coordEl.textContent = `${lat}° N, ${Math.abs(lng)}° W : PHILADELPHIA, PA [LIVE]`;
  }
});

// Basemap theme toggle (Dark vs. Light Topo)
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.documentElement.removeAttribute('data-theme');
    toggleBtn.innerHTML = '<span class="swatch" style="background:var(--ink)"></span>Basemap: Dark';
    toggleBtn.setAttribute('aria-pressed', 'false');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.innerHTML = '<span class="swatch" style="background:var(--ink)"></span>Basemap: Light';
    toggleBtn.setAttribute('aria-pressed', 'true');
  }
});
}
// Last updated, pulled from the latest commit on GitHub
fetch('https://api.github.com/repos/evanklarsen/evanklarsen.github.io/commits/main')
  .then(res => res.json())
  .then(data => {
    const date = new Date(data.commit.committer.date);
    const formatted = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    const el = document.getElementById('last-updated');
    if (el) {
      el.textContent = `evanklarsen.github.io — last surveyed ${formatted}`;
    }
  })
  .catch(() => {}); // fails quietly, hardcoded text stays as fallback
