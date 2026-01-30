(() => {
  const BASE = 'https://cdn.jsdelivr.net/gh/DevNyanHa/artmug-repo@main/components'
  document.querySelectorAll('[data-gh-component]').forEach(async el => {
    const name = el.dataset.ghComponent;
    const res = await fetch(`${BASE}/${name}.html`);
    if (!res.ok) return;
      el.innerHTML = await res.text();
  });
})
