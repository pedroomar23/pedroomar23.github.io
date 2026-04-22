// WifiHub Proyect 
document.addEventListener("DOMContentLoaded", function () {
  console.log("Contentido Encontrado", wifihub);
  const wifihub = document.getElementById("wifihub");
  
  if (wifihub) {
    try {
      wifiConnect.innerHTML = `
    <section
      class="project"
      style="align-content: center; font-size: small"
    >
      <div style="padding-top: 50px" align="center">
        <h3>WifiHub</h3>
        <h3> Privacy and Policy</h3>
      </div>
      <img
        src="/public/assets/img/projects/photo_2025-03-27 15.15.43.jpeg"
        alt="https://apps.apple.com/us/app/wifi-connect/id6496852984"
      />
      <p style="align-content: center; font-size: small">
        </p>
    </section>
    `;
    } catch (error) {
      console.error("Error content failure", error);
    }
  } else {
    console.error("Error content failure", error);
  }
});
