// About Me
document.addEventListener("DOMContentLoaded", function () {
  const about = document.getElementById("about");

  if (!about) {
    console.error("Content Failure", "Missing #about container");
    return;
  }

  try {
    about.innerHTML = `
    <section class="about" aria-labelledby="about-title">
      <h2 class="section-title" id="about-title">About Me</h2>
      <p>
        Hola soy Pedro Omar. Actualmente estoy trabajando como Desarrollador
        Móvil con experiencia de 3 años con Swift, SwiftUI, UIKit y además tengo
        conocimientos de Java, HTML, CSS, JavaScript, Python.
      </p>
    </section>
    `;
  } catch (error) {
    console.error("Content Failure", error);
  }
});
