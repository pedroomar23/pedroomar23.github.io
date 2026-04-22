// Footer 
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");
  
  try {
    footer.innerHTML = `
        <footer style="padding: 20px; margin-top: 50px; border-top: 1px solid #ccc;"> 
            © 2025 Portafolio. Made in Cuba 🇨🇺 
        </footer>
    `;
  } catch (error) {
    console.error("Content Failure", error);
  }
});