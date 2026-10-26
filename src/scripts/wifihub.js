// WifiHub Proyect
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.getElementById("projects");

  if (!projects) {
    console.error("Content Failure", "Missing #projects container");
    return;
  }

  try {
    projects.innerHTML = `
    <section class="projects" aria-labelledby="projects-title">
      <h2 class="section-title" id="projects-title">Proyectos</h2>
      <article class="project">
        <img
          class="project-icon"
          src="/public/assets/img/apps/icon-wifi-connet-dark.jpg"
          alt="Icono de la app WifiHub"
          loading="lazy"
        />
        <div class="project-content">
          <h1 class="project-title">WifiHub</h1>
          <h2 class="project-description">
            WifiHub es un proyecto que ayuda a los usuarios de iOS a guardar sus
            cuentas de forma segura para luego usarlas sin problemas.
          </h2>
        </div>
      </article>
    </section>
    `;
  } catch (error) {
    console.error("Content Failure", error);
  }
});
