window.translations = {
  en: {
    select_language: "Language"
  },
  es: {
    select_language: "Langue"
  }
}

function applyTranslations(language) {
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const key = element.getAttribute('data-translate');
    const translation = translations[language][key];
    if (translation) {
      element.innerHTML = translation; // Directly set the translation
    }
  });
}

applyTranslations("en");