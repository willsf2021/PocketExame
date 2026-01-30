const STUDY_SETTING_SECTION_DOM = {
  areaItens: document.querySelectorAll(".item-area"),
  subjectsList: document.querySelector(".study-subject-list"),
};

let payload = {
  area: "",
  subject: "",
  time: "",
  type: "",
};

const subjectsByAreas = {
  langs: [
    "Português",
    "Literatura",
    "Inglês",
    "Espanhol",
    "Artes",
    "Educação Física",
  ],
  human_sciences: [
    "História",
    "Geografia",
    "Filosofia",
    "Filosofia",
    "Sociologia",
  ],
  natural_sciences: ["Física", "Química", "Matemática"],
  exacts: ["Álgebra", "Geometria", "Estatística", "Probabilidade", "Funções"],
};

const bindSubjects = (area) => {
  STUDY_SETTING_SECTION_DOM.subjectsList.innerHTML = "";
  area.forEach((subject) => {
    STUDY_SETTING_SECTION_DOM.subjectsList.innerHTML += `
    <li class="study-subject-list-item general-list-item">
        <span>${subject}</span>
    </li>`;
  });
  console.log(area);
};

const setArea = (event) => {
  const areaEl = event.target;
  if (!areaEl) return;
  const area = areaEl.closest("li").dataset.area;

  payload.area = area;

  bindSubjects(subjectsByAreas[area]);

  const classItem = areaEl.dataset.class_item;

  STUDY_SETTING_SECTION_DOM.areaItens.forEach((item) => {
    item
      .closest("li")
      .classList.remove(
        "purple-item",
        "yellow-item",
        "green-item",
        "blue-item",
      );
  });

  areaEl.closest("li").classList.add(classItem);
};

const setSubject = () => {};

STUDY_SETTING_SECTION_DOM.areaItens.forEach((item) => {
  item.addEventListener("click", setArea);
});
