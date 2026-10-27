// WifiHub project detail
(function () {
  const LANGUAGE_EVENT = "portfolio:languagechange";

  function render() {
    const project = document.getElementById("project");
    const i18n = window.i18n;

    if (!project) {
      console.error("Content Failure", "Missing #project container");
      return;
    }

    if (!i18n) {
      console.error("Content Failure", "Missing i18n helper");
      return;
    }

    try {
      project.innerHTML = `
      <section class="project-detail" aria-labelledby="project-title">
        <p class="project-eyebrow">${i18n.t("projectPage.eyebrow")}</p>
        <h1 id="project-title">${i18n.t("projects.name")}</h1>
        <p class="project-stack">
          <span class="project-dot" aria-hidden="true"></span>Swift
        </p>
        <p class="project-detail-description">${i18n.t(
          "projectPage.description"
        )}</p>
        <div class="project-detail-actions">
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
        <a class="project-back" href="/#projects">
          ${i18n.t("projectPage.back")}
        </a>
      </section>
      `;
    } catch (error) {
      console.error("Content Failure", error);
    }
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener(LANGUAGE_EVENT, render);
})();
