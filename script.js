let currentLang = "pt";
let index = 0;
let typingInterval;

const names = {
  pt: "Santiago Pedrosa",
  en: "Santiago Pedrosa"
};

function startTyping() {
  const typingElement = document.getElementById("typing");

  clearInterval(typingInterval);
  typingElement.textContent = "";
  index = 0;

  const text = names[currentLang];

  typingInterval = setInterval(() => {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 120);
}


const texts = {
  pt: {
    hero: "Olá sou o ",
    herosub: "Software Developer",
    sobreTitle: "Sobre",
    sobreText:"Software Developer com foco em criar APIs rápidas, seguras e escaláveis com HTML, CSS e JavaScript.",
    projetos: "Projetos",
    projeto1: "Projeto Alidata",
    projetodesc1: "Este projeto foi realizado como forma de aprendizado e de projeto final de estagio na empresa Alidata.",
    projeto2: "Projeto Portfólio",
    projetodesc2: "Em desenvolvimento.",
    verProjeto: "Ver Projeto →",
    tecnologias: "Tecnologias",
    contato: "Contato"
  },
  en: {
    hero: "Hello, I'm ",
    herosub: "Software Developer",
    sobreTitle: "About",
    sobreText:"Software Developer focused on creating fast, secure and scalable APIs with HTML, CSS and JavaScript.",
    projetos: "Projects",
    projeto1: "Alidata Project",
    projetodesc1: "This project was carried out as a form of learning and as a final internship project at Alidata.",
    projeto2: "Portfolio Project",
    projetodesc2: "In development.",
    verProjeto: "View Project →",
    tecnologias: "Technologies",
    contato: "Contact"
  }
};

function updateLanguage() {
  document.documentElement.lang = currentLang;

  document.getElementById("hero-title").innerHTML =
    texts[currentLang].hero + '<span id="typing"></span>';

  document.getElementById("hero-subtitle").textContent =
    texts[currentLang].herosub;

  document.getElementById("sobre-title").textContent =
    texts[currentLang].sobreTitle;

  document.getElementById("sobre-text").textContent =
    texts[currentLang].sobreText;

  document.getElementById("projetos-title").textContent =
    texts[currentLang].projetos;

  document.getElementById("projeto1-title").textContent =
    texts[currentLang].projeto1;

  document.getElementById("projeto1-desc").textContent =
    texts[currentLang].projetodesc1;

  document.getElementById("projeto2-title").textContent =
    texts[currentLang].projeto2;

    document.getElementById("projeto2-desc").textContent =
    texts[currentLang].projetodesc2;

  document.getElementById("projeto1-link").textContent =
    texts[currentLang].verProjeto;

  document.getElementById("projeto2-link").textContent =
    texts[currentLang].verProjeto;

  document.querySelector(".tech h2").textContent =
    texts[currentLang].tecnologias;

  document.querySelector(".contato h2").textContent =
    texts[currentLang].contato;

  startTyping(); // 👈 agora funciona
}

// ===== BOTÃO IDIOMA =====
const langButton = document.getElementById("lang-toggle");

langButton.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  langButton.textContent = currentLang === "pt" ? "English" : "Português";
  updateLanguage();
});

// ===== DARK MODE =====
const themeButton = document.getElementById("toggle-theme");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeButton.textContent =
    themeButton.textContent === "Dark Mode"
      ? "White Mode"
      : "Dark Mode";

  startTyping();
});

// ===== INICIAL =====
updateLanguage();
