// Internationalization (ES / EN)
(function () {
  const STORAGE_KEY = "portfolio-lang";
  const CHANGE_EVENT = "portfolio:languagechange";
  const SUPPORTED = ["es", "en"];
  const FALLBACK = "es";

  const translations = {
    es: {
      meta: {
        home: {
          title: "Pedro Omar — Desarrollador Móvil",
          description:
            "Portafolio de Pedro Omar, Desarrollador Móvil con 3 años de experiencia en Swift, SwiftUI y UIKit.",
        },
        policy: {
          title: "Política de Privacidad — WifiHub",
          description:
            "Política de privacidad de WifiHub, la app para iOS que ayuda a los usuarios a guardar sus cuentas WiFi de forma segura.",
        },
        project: {
          title: "WifiHub — Pedro Omar",
          description:
            "WifiHub es un proyecto que ayuda a los usuarios de iOS a guardar sus cuentas de forma segura para luego usarlas sin problemas.",
        },
      },
      nav: {
        ariaLabel: "Navegación principal",
        about: "Sobre mí",
        projects: "Proyectos",
        language: "Idioma",
        spanish: "Español (ES)",
        english: "English (EN)",
      },
      about: {
        title: "Sobre mí",
        body: "Hola, soy Pedro Omar. Actualmente trabajo como Desarrollador Móvil con 3 años de experiencia en Swift, SwiftUI y UIKit, y además tengo conocimientos de Java, HTML, CSS, JavaScript y Python.",
      },
      projects: {
        title: "Proyectos",
        iconAlt: "Icono de la app WifiHub",
        name: "WifiHub",
        summary:
          "WifiHub es un proyecto para usuarios de iOS que los ayuda a guardar sus cuentas de forma segura y rápida.",
        appStore: "Ver en App Store",
        privacy: "Política de Privacidad",
      },
      projectPage: {
        eyebrow: "Proyecto",
        description:
          "WifiHub es un proyecto que ayuda a los usuarios de iOS a guardar sus cuentas de forma segura para luego usarlas sin problemas.",
        back: "← Volver a proyectos",
      },
      footer: {
        ariaLabel: "Redes sociales",
        text: "Hecho con ❤️ en Cuba 🇨🇺. Todos los derechos reservados",
      },
      policy: {
        eyebrow: "WifiHub",
        title: "Política de Privacidad",
        sections: [
          {
            heading: "Información recopilada",
            intro: "La aplicación recopila la siguiente información:",
            items: [
              "Nombre de usuario (opcional)",
              "Correo electrónico (opcional)",
              "Información de conexión WiFi (SSID, contraseña, etc.)",
            ],
          },
          {
            heading: "Uso de la información",
            intro: "Usamos la información recopilada para:",
            items: [
              "Facilitar la conexión a redes WiFi.",
              "Enviar actualizaciones y notificaciones relevantes.",
              "Mejorar la aplicación y sus funciones.",
            ],
          },
          {
            heading: "Compartir información",
            items: [
              "No compartimos información personal con terceros sin tu consentimiento.",
              "La información de conexión WiFi se almacena localmente en tu dispositivo.",
            ],
          },
          {
            heading: "Seguridad",
            items: [
              "Tomamos medidas para proteger la información del usuario.",
              "No almacenamos contraseñas de redes WiFi en nuestros servidores.",
            ],
          },
          {
            heading: "Cambios en la política",
            items: [
              "Esta política puede actualizarse ocasionalmente. Consulta la versión más reciente en nuestro sitio web.",
            ],
          },
        ],
        back: "← Volver al portafolio",
      },
    },
    en: {
      meta: {
        home: {
          title: "Pedro Omar — Mobile Developer",
          description:
            "Portfolio of Pedro Omar, a Mobile Developer with 3 years of experience in Swift, SwiftUI and UIKit.",
        },
        policy: {
          title: "Privacy Policy — WifiHub",
          description:
            "Privacy Policy for WifiHub, the iOS app that helps users store their WiFi accounts securely.",
        },
        project: {
          title: "WifiHub — Pedro Omar",
          description:
            "WifiHub is a project that helps iOS users store their accounts securely so they can use them without any hassle.",
        },
      },
      nav: {
        ariaLabel: "Main navigation",
        about: "About Me",
        projects: "Projects",
        language: "Language",
        spanish: "Spanish (ES)",
        english: "English (EN)",
      },
      about: {
        title: "About Me",
        body: "Hi, I'm Pedro Omar. I currently work as a Mobile Developer with 3 years of experience in Swift, SwiftUI and UIKit, and I also have knowledge of Java, HTML, CSS, JavaScript and Python.",
      },
      projects: {
        title: "Projects",
        iconAlt: "WifiHub app icon",
        name: "WifiHub",
        summary:
          "WifiHub is a project for iOS users that helps them save their accounts quickly and securely.",
        appStore: "View on the App Store",
        privacy: "Privacy Policy",
      },
      projectPage: {
        eyebrow: "Project",
        description:
          "WifiHub is a project that helps iOS users store their accounts securely so they can use them without any hassle.",
        back: "← Back to projects",
      },
      footer: {
        ariaLabel: "Social links",
        text: "Made with ❤️ in Cuba 🇨🇺. All Rights Reserved",
      },
      policy: {
        eyebrow: "WifiHub",
        title: "Privacy Policy",
        sections: [
          {
            heading: "Information collected",
            intro: "The application collects the following information:",
            items: [
              "Username (optional)",
              "Email address (optional)",
              "WiFi connection information (SSID, password, etc.)",
            ],
          },
          {
            heading: "Use of information",
            intro: "We use the information collected to:",
            items: [
              "Facilitate the connection to WiFi networks.",
              "Send relevant updates and notifications.",
              "Improve the application and its functions.",
            ],
          },
          {
            heading: "Share information",
            items: [
              "We do not share personal information with third parties without your consent.",
              "WiFi connection information is stored locally on your device.",
            ],
          },
          {
            heading: "Security",
            items: [
              "We take measures to protect the user's information.",
              "We do not store WiFi network passwords on our servers.",
            ],
          },
          {
            heading: "Changes to this policy",
            items: [
              "This policy may be updated from time to time. Check the latest version on our website.",
            ],
          },
        ],
        back: "← Back to portfolio",
      },
    },
  };

  function isSupported(lang) {
    return SUPPORTED.indexOf(lang) !== -1;
  }

  function detectLanguage() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isSupported(stored)) {
        return stored;
      }
    } catch (error) {
      // Storage may be unavailable (private mode, blocked cookies).
    }

    const languages =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || ""];

    for (let i = 0; i < languages.length; i += 1) {
      const code = String(languages[i]).toLowerCase();
      if (code.indexOf("es") === 0) {
        return "es";
      }
      if (code.indexOf("en") === 0) {
        return "en";
      }
    }

    return FALLBACK;
  }

  let current = detectLanguage();

  function getByPath(source, path) {
    return path.split(".").reduce(function (value, key) {
      return value == null ? undefined : value[key];
    }, source);
  }

  function applyDocument() {
    const dictionary = translations[current];

    document.documentElement.lang = current;

    if (!document.body) {
      return;
    }

    const attribute = document.body.getAttribute("data-page");
    const page =
      ["home", "policy", "project"].indexOf(attribute) !== -1
        ? attribute
        : "home";
    const meta = dictionary.meta[page];

    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", meta.description);
    }
  }

  function setLanguage(lang) {
    if (!isSupported(lang) || lang === current) {
      return;
    }

    current = lang;

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Storage may be unavailable; the language still applies to this page.
    }

    applyDocument();

    document.dispatchEvent(
      new CustomEvent(CHANGE_EVENT, { detail: { language: lang } })
    );
  }

  window.i18n = {
    getLanguage: function () {
      return current;
    },
    setLanguage: setLanguage,
    t: function (path) {
      return getByPath(translations[current], path);
    },
    getDictionary: function () {
      return translations[current];
    },
    supported: SUPPORTED.slice(),
    changeEvent: CHANGE_EVENT,
    storageKey: STORAGE_KEY,
  };

  // Switch language from any [data-lang] control (delegated, survives re-renders).
  document.addEventListener("click", function (event) {
    if (!(event.target instanceof Element)) {
      return;
    }

    const button = event.target.closest("[data-lang]");
    if (!button) {
      return;
    }

    const lang = button.getAttribute("data-lang");
    if (!isSupported(lang) || lang === current) {
      return;
    }

    event.preventDefault();
    setLanguage(lang);

    // The switch is re-rendered on language change; restore focus to it.
    const active = document.querySelector('[data-lang="' + lang + '"]');
    if (active && typeof active.focus === "function") {
      active.focus({ preventScroll: true });
    }
  });

  // Keep tabs in sync when the language changes elsewhere.
  window.addEventListener("storage", function (event) {
    if (
      event.key !== STORAGE_KEY ||
      !isSupported(event.newValue) ||
      event.newValue === current
    ) {
      return;
    }

    current = event.newValue;
    applyDocument();
    document.dispatchEvent(
      new CustomEvent(CHANGE_EVENT, { detail: { language: current } })
    );
  });

  applyDocument();
  document.addEventListener("DOMContentLoaded", applyDocument);
})();
