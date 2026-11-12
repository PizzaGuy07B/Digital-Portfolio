(() => {
  /* ---- Edit this one line with your real LinkedIn profile URL ---- */
  const LINKEDIN_URL = "https://www.linkedin.com/in/";

  document.querySelectorAll("#linkedinHero,#linkedinContact").forEach(a => a.href = LINKEDIN_URL);
  document.getElementById("year").textContent = new Date().getFullYear();

  /* theme toggle */
  const root = document.documentElement;
  const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
  if (saved) root.dataset.theme = saved;
  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  });

  /* screenshot fallback: if an image file is missing, show a tidy placeholder */
  document.querySelectorAll(".frame img").forEach(img => {
    const fail = () => {
      const f = img.parentElement;
      f.classList.add("empty");
      f.innerHTML = '<div>Screenshot coming soon<span>add ' + img.getAttribute("src").split("/").pop() + '</span></div>';
    };
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener("error", fail);
  });

  /* lightbox */
  const lb = document.getElementById("lightbox"), lbImg = document.getElementById("lbImg"), lbCap = document.getElementById("lbCap");
  const close = () => { lb.hidden = true; };
  document.getElementById("gallery").addEventListener("click", e => {
    const img = e.target.closest(".frame:not(.empty) img");
    if (!img) return;
    lbImg.src = img.src; lbImg.alt = img.alt;
    lbCap.textContent = img.closest("figure").querySelector("h4").textContent;
    lb.hidden = false;
  });
  lb.addEventListener("click", e => { if (e.target !== lbImg) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

  /* scroll reveal */
  const targets = document.querySelectorAll(".section .card, .shot, .section h2");
  targets.forEach(t => t.classList.add("reveal"));
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
  targets.forEach(t => io.observe(t));
})();
