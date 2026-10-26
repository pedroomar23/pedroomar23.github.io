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
      <section class="projects" aria-labelledby="projects-title">
        <h2 class="section-title" id="projects-title">${i18n.t(
          "projects.title"
        )}</h2>
        <article class="project">
          <img
            class="project-icon"
            src="/public/assets/img/apps/icon-wifi-connet-dark.jpg"
            alt="${i18n.t("projects.iconAlt")}"
            loading="lazy"
          />
          <div class="project-content">
            <h1 class="project-title">${i18n.t("projects.name")}</h1>
            <h2 class="project-description">${i18n.t(
              "projects.description"
            )}</h2>
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
      </section>
      `;
    } catch (error) {
      console.error("Content Failure", error);
    }
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener(LANGUAGE_EVENT, render);
})();
