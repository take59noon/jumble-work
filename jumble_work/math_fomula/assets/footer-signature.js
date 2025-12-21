// footer-signature.js

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.className = "site-footer";

  footer.innerHTML = `
    <small>&copy; 2025 take59noon</small>
  `;

  // body の一番最後に追加
  document.body.appendChild(footer);
});
