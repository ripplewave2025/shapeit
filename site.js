const currentPage = document.body.dataset.page;

document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === currentPage) {
    link.classList.add("is-active");
    if (currentPage !== "home") {
      link.setAttribute("aria-current", "page");
    }
  }
});

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-menu]");

if (menuToggle && mobileMenu) {
  const openMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-gallery-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.galleryTarget;
    const nextSrc = button.dataset.galleryImage;
    const nextAlt = button.dataset.galleryAlt;
    const target = document.getElementById(targetId);

    if (!target || !nextSrc) {
      return;
    }

    target.src = nextSrc;
    if (nextAlt) {
      target.alt = nextAlt;
    }

    document
      .querySelectorAll(`[data-gallery-target="${targetId}"]`)
      .forEach((thumb) => thumb.classList.remove("is-active"));

    button.classList.add("is-active");
  });
});
