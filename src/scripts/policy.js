// Privacy Policy
(function () {
  const LANGUAGE_EVENT = "portfolio:languagechange";

  function renderSections(sections) {
    return sections
      .map(function (section) {
        const items = section.items
          .map(function (item) {
            return `<li>${item}</li>`;
          })
          .join("");

        const list = section.intro
          ? `<li>${section.intro}<ul>${items}</ul></li>`
          : items;

        return `<h2>${section.heading}</h2><ul>${list}</ul>`;
      })
      .join("");
  }

  function render() {
    const policy = document.getElementById("policy");
    const i18n = window.i18n;

    if (!policy) {
      console.error("Content Failure", "Missing #policy container");
      return;
    }

    if (!i18n) {
      console.error("Content Failure", "Missing i18n helper");
      return;
    }

    try {
      policy.innerHTML = `
      <section class="policy" aria-labelledby="policy-title">
        <p class="policy-eyebrow">${i18n.t("policy.eyebrow")}</p>
        <h1 id="policy-title">${i18n.t("policy.title")}</h1>
        ${renderSections(i18n.t("policy.sections"))}
        <a class="policy-back" href="/">${i18n.t("policy.back")}</a>
      </section>
      `;
    } catch (error) {
      console.error("Content Failure", error);
    }
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener(LANGUAGE_EVENT, render);
})();
