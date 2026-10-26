// About Me
(function () {
  const LANGUAGE_EVENT = "portfolio:languagechange";

  function render() {
    const about = document.getElementById("about");
    const i18n = window.i18n;

    if (!about) {
      console.error("Content Failure", "Missing #about container");
      return;
    }

    if (!i18n) {
      console.error("Content Failure", "Missing i18n helper");
      return;
    }

    try {
      about.innerHTML = `
      <section class="about" aria-labelledby="about-title">
        <h2 class="section-title" id="about-title">${i18n.t("about.title")}</h2>
        <p>${i18n.t("about.body")}</p>
      </section>
      `;
    } catch (error) {
      console.error("Content Failure", error);
    }
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener(LANGUAGE_EVENT, render);
})();
