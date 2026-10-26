// Navigation
(function () {
  const LANGUAGE_EVENT = "portfolio:languagechange";

  function render() {
    const navigation = document.getElementById("navigation");
    const i18n = window.i18n;

    if (!navigation) {
      console.error("Content Failure", "Missing #navigation container");
      return;
    }

    if (!i18n) {
      console.error("Content Failure", "Missing i18n helper");
      return;
    }

    const lang = i18n.getLanguage();

    function pressed(code) {
      return code === lang ? "true" : "false";
    }

    try {
      navigation.innerHTML = `
      <header class="site-header">
        <div class="site-header-inner">
          <div class="profile">
            <img
              class="avatar"
              src="/public/assets/img/avatar-pedro-omar.jpeg"
              alt="Pedro Omar"
            />
            <div class="identity">
              <h1 class="name">Pedro Omar</h1>
              <p class="handle">@pedroomar23</p>
            </div>
          </div>
          <div class="site-header-actions">
            <nav class="nav-links" aria-label="${i18n.t("nav.ariaLabel")}">
              <a href="/#about">${i18n.t("nav.about")}</a>
              <a href="/#projects">${i18n.t("nav.projects")}</a>
            </nav>
            <div
              class="lang-switch"
              role="group"
              aria-label="${i18n.t("nav.language")}"
            >
              <button
                type="button"
                class="lang-switch__btn"
                data-lang="es"
                aria-pressed="${pressed("es")}"
                aria-label="${i18n.t("nav.spanish")}"
              >
                ES
              </button>
              <button
                type="button"
                class="lang-switch__btn"
                data-lang="en"
                aria-pressed="${pressed("en")}"
                aria-label="${i18n.t("nav.english")}"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>
    `;
    } catch (error) {
      console.error("Content Failure", error);
    }
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener(LANGUAGE_EVENT, render);
})();
