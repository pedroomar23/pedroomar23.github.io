// Navigation
document.addEventListener("DOMContentLoaded", function () {
  const navigation = document.getElementById("navigation");

  if (!navigation) {
    console.error("Content Failure", "Missing #navigation container");
    return;
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
          <nav class="nav-links" aria-label="Navegación principal">
            <a href="#about">About Me</a>
            <a href="#projects">Proyectos</a>
          </nav>
        </div>
      </header>
    `;
  } catch (error) {
    console.error("Content Failure", error);
  }
});
