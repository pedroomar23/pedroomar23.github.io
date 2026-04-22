// Navigation
document.addEventListener("DOMContentLoaded", function () {
  const navigation = document.getElementById("navigation");
  try {
    navigation.innerHTML = `
    <nav class="navigation" id="navigation">
      pedroomar23
    </nav>
    `;
  } catch (error) {
    console.error("Content Failure", error);
  }
});