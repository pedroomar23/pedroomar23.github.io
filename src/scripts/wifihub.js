// WifiHub Proyect
(function () {
  const LANGUAGE_EVENT = "portfolio:languagechange";

  function render() {
    const projects = document.getElementById("projects");
    const i18n = window.i18n;

    if (!projects) {
      console.error("Content Failure", "Missing #projects container");
      return;
    }

    if (!i18n) {
      console.error("Content Failure", "Missing i18n helper");
      return;
    }

    try {
      projects.innerHTML = `
      <section class="projects-section" aria-labelledby="projects-title">
        <h2 class="section-title" id="projects-title">${i18n.t(
          "projects.title"
        )}</h2>
        <div class="projects">
          <article class="project">
            <img
              class="project-icon"
              src="/public/assets/img/apps/icon-wifi-connet-dark.jpg"
              alt="${i18n.t("projects.iconAlt")}"
              loading="lazy"
            />
            <div class="project-content">
              <h1 class="project-title">
                <a class="project-title-link" href="/wifihubproject.html">
                  ${i18n.t("projects.name")}
                </a>
              </h1>
              <div class="project-socials">
                <a
                  class="project-social"
                  href="https://x.com/wifihub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <img src="/public/assets/icons/icon-2.png" alt="X" />
                </a>
                <a
                  class="project-social"
                  href="https://t.me/pedroomar23"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <img
                    src="/public/assets/icons/icon-1.png"
                    alt="Telegram"
                  />
                </a>
              </div>
            </div>
            <div class="project-actions">
              <a
                class="button button--primary"
                href="https://apps.apple.com/us/app/wifihub/id6759055211"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${i18n.t("projects.appStore")}
              </a>
              <a class="button button--secondary" href="/policy.html">
                ${i18n.t("projects.privacy")}
              </a>
            </div>
          </article>
          <p class="project-stack">
            <span class="project-dot" aria-hidden="true"></span>Swift
          </p>
        </div>
      </section>
      `;
    } catch (error) {
      console.error("Content Failure", error);
    }
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener(LANGUAGE_EVENT, render);
})();
