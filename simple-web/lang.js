let currentLanguage = "en";

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then((res) => res.json())
    .then((translations) => {
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[key] || key;
      });
    });
}

document
  .getElementById("languageSwitcher")
  .addEventListener("change", function () {
    currentLanguage = this?.value;
    loadLanguage(currentLanguage);
    localStorage.setItem("language", currentLanguage); // Save preference
  });

// Load saved or default language on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  document.getElementById("languageSwitcher").value = savedLang;
  loadLanguage(savedLang);
});
