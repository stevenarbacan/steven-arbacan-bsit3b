class App {
  #buttomNav = document.querySelector(".buttom-nav");
  #sections = document.querySelectorAll(".section");
  #homeTypingText = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ];

  constructor() {
    this._init();
    this.#buttomNav.addEventListener("click", this._goToSection.bind(this));
  }

  _resetSection() {
    this.#sections.forEach((section) => section.classList.add("hidden"));
  }

  _revealSection(section) {
    this._resetSection();
    this.#sections[section].classList.remove("hidden");
  }

  _goToSection(e) {
    if (!e.target.classList.contains("nav-icon")) return;
    const section = +e.target.dataset.section - 1;
    this._revealSection(section);
  }

  _typingText(textSelector, content) {
    const typingText = new AutoTyping(textSelector, content, {
      typeSpeed: 50,
      deleteSpeed: 50,
      waitBeforeDelete: 2000,
      waitBetweenWords: 500,
    });
    typingText.start();
  }

  _activateTypingText() {
    const homeText = this.#homeTypingText;
    this._typingText(".home-typing-text", homeText);
    this._typingText(".typing-about-title", ["About Me"]);
    this._typingText(".typing-contact-title", ["Contact Me"]);
    this._typingText(".typing-skills-title", ["Tech Stack"]);
    this._typingText(".typing-project-title", ["Project"]);
  }

  _init() {
    this._revealSection(1);
    this._activateTypingText();
  }
}
const app = new App();
