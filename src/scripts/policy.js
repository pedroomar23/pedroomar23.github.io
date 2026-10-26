// Privacy Policy
document.addEventListener("DOMContentLoaded", function () {
  const policy = document.getElementById("policy");

  if (!policy) {
    console.error("Content Failure", "Missing #policy container");
    return;
  }

  try {
    policy.innerHTML = `
    <section class="policy" aria-labelledby="policy-title" lang="en">
      <p class="policy-eyebrow">WifiHub</p>
      <h1 id="policy-title">Privacy Policy</h1>

      <h2>Information collected</h2>
      <ul>
        <li>
          The application collects the following information:
          <ul>
            <li>Username (optional)</li>
            <li>Email address (optional)</li>
            <li>WiFi connection information (SSID, password, etc.)</li>
          </ul>
        </li>
      </ul>

      <h2>Use of information</h2>
      <ul>
        <li>
          We use the information collected to:
          <ul>
            <li>Facilitate the connection to WiFi networks.</li>
            <li>Send relevant updates and notifications.</li>
            <li>Improve the application and its functions.</li>
          </ul>
        </li>
      </ul>

      <h2>Share information</h2>
      <ul>
        <li>
          We do not share personal information with third parties without your
          consent.
        </li>
        <li>WiFi connection information is stored locally on your device.</li>
      </ul>

      <h2>Security</h2>
      <ul>
        <li>We take measures to protect the user's information.</li>
        <li>We do not store WiFi network passwords on our servers.</li>
      </ul>

      <h2>Changes in politics</h2>
      <ul>
        <li>
          This policy may be updated from time to time. Check the latest version
          on our website.
        </li>
      </ul>

      <a class="policy-back" href="/" lang="es">← Volver al portafolio</a>
    </section>
    `;
  } catch (error) {
    console.error("Content Failure", error);
  }
});
