
const modal = document.querySelector("#modal");
//Selecting buttons
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

//Popping up window
openModal.addEventListener("click", () => {
  modal.showModal(); // modal.show(); also works
});
//Closing popup window --> If you click 'esc', it closes
closeModal.addEventListener("click", () => {
  modal.close();
});
