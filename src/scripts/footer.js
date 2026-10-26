// Footer
(function () {
  const LANGUAGE_EVENT = "portfolio:languagechange";

  function render() {
    const footer = document.getElementById("footer");
    const i18n = window.i18n;

    if (!footer) {
      console.error("Content Failure", "Missing #footer container");
      return;
    }

    if (!i18n) {
      console.error("Content Failure", "Missing i18n helper");
      return;
    }

    try {
      footer.innerHTML = `
      <footer class="footer">
        <nav class="social-links" aria-label="${i18n.t("footer.ariaLabel")}">
          <a
            class="social-link"
            href="https://t.me/pedroomar23"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <img src="/public/assets/icons/icon-1.png" alt="Telegram" />
          </a>
          <a
            class="social-link"
            href="https://x.com/pedroomar23"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <img src="/public/assets/icons/icon-2.png" alt="X" />
          </a>
          <a
            class="social-link"
            href="https://www.facebook.com/pedroomar23"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src="/public/assets/icons/icon-3.png" alt="Facebook" />
          </a>
          <a
            class="social-link"
            href="https://www.instagram.com/pedroomar23"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="/public/assets/icons/icon-4.png" alt="Instagram" />
          </a>
          <a
            class="social-link social-link--github"
            href="https://github.com/pedroomar23"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"
              />
            </svg>
          </a>
        </nav>
        <p class="footer-text">${i18n.t("footer.text")}</p>
      </footer>
      `;
    } catch (error) {
      console.error("Content Failure", error);
    }
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener(LANGUAGE_EVENT, render);
})();
