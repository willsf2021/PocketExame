const STUDY_SETTING_SECTION_DOM = {
  areaItens: document.querySelectorAll(".item-area"),
  timeItens: document.querySelectorAll(".item-time"),
  subjectsItens: null,
  subjectsList: document.querySelector(".study-subject-list"),
  subjectsSection: document.querySelector(".study-subject"),
};

let payload = {
  area: "",
  subject: "",
  time: "",
  type: "",
};

const subjectsByAreas = {
  human_sciences: [
    ["História", "history"],
    ["Geografia", "geography"],
    ["Filosofia", "philosophy"],
    ["Sociologia", "sociology"],
  ],

  natural_sciences: [
    ["Física", "physics"],
    ["Química", "chemistry"],
    ["Matemática", "mathematics"],
  ],

  exacts: [
    ["Álgebra", "algebra"],
    ["Geometria", "geometry"],
    ["Estatística", "statistics"],
    ["Probabilidade", "probability"],
    ["Funções", "functions"],
  ],
};

const bindSubjects = (area) => {
  STUDY_SETTING_SECTION_DOM.subjectsList.innerHTML = "";

  // ativa animação
  STUDY_SETTING_SECTION_DOM.subjectsSection.classList.add("show");

  area.forEach((subject) => {
    STUDY_SETTING_SECTION_DOM.subjectsList.insertAdjacentHTML(
      "beforeend",
      `
      <li class="study-subject-list-item general-list-item" data-subject="${subject[1]}">
        <div class="item-subject"></div>
        <span>${subject[0]}</span>
      </li>
      `,
    );
  });

  STUDY_SETTING_SECTION_DOM.subjectsItens =
    document.querySelectorAll(".item-subject");

  STUDY_SETTING_SECTION_DOM.subjectsItens.forEach((item) => {
    item.addEventListener("click", setSubject);
  });
};

const setArea = (event) => {
  const areaEl = event.target;
  if (!areaEl) return;
  const area = areaEl.closest("li").dataset.area;

  payload.area = area;
  payload.subject = "";

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

const setSubject = (event) => {
  const subjectEl = event.target;
  if (!subjectEl) return;
  const subject = subjectEl.closest("li").dataset.subject;

  payload.subject = subject;

  const classItem = "subject-active";
  // console.log(STUDY_SETTING_SECTION_DOM.subjectsItens);
  STUDY_SETTING_SECTION_DOM.subjectsItens.forEach((item) => {
    item.closest("li").classList.remove(classItem);
  });

  subjectEl.closest("li").classList.add(classItem);
  console.log(payload);
};

const setTime = (event) => {
  const timeEl = event.target;
  if (!timeEl) return;
  const time = timeEl.closest("li").dataset.time;

  payload.time = time;

  const classItem = "time-active";

  STUDY_SETTING_SECTION_DOM.timeItens.forEach((item) => {
    item.closest("li").classList.remove(classItem);
  });

  timeEl.closest("li").classList.add(classItem);
  console.log(payload);
};

STUDY_SETTING_SECTION_DOM.areaItens.forEach((item) => {
  item.addEventListener("click", setArea);
});
STUDY_SETTING_SECTION_DOM.timeItens.forEach((item) => {
  item.addEventListener("click", setTime);
});
