const STUDY_SETTING_SECTION_DOM = {
  areaItens: document.querySelectorAll(".item-area"),
};

const SetArea = (event) => {
  const li = event.target;
  if (!li) return;

  const classItem = li.dataset.class_item;

  // remove classes de todos
  STUDY_SETTING_SECTION_DOM.areaItens.forEach((item) => {
    item.closest("li").classList.remove(
      "purple-item",
      "yellow-item",
      "green-item",
      "blue-item",
    );
  });

  li.closest("li").classList.add(classItem);
};

STUDY_SETTING_SECTION_DOM.areaItens.forEach((item) => {
  item.addEventListener("click", SetArea);
});
