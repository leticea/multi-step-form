let currentStep = 0;
const formSteps = document.querySelectorAll(".form-step");
const form = document.querySelector("form");

form.addEventListener("click", (e) => {
  if (!e.target.matches("[data-action]")) {
    return;
  }

  const actions = {
    next() {
      currentStep++;
    },
    prev() {
      currentStep--;
    },
  };

  const action = e.target.dataset.action;
  actions[action]();
  updateActiveStep();
  updateProgressStep();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function updateActiveStep() {
  formSteps.forEach((step) => step.classList.remove("active"));
  formSteps[currentStep].classList.add("active");
}

const progressSteps = document.querySelectorAll(".step-progress [data-step]");

function updateProgressStep() {
  progressSteps.forEach((step, index) => {
    step.classList.remove("active");
    step.classList.remove("done");

    if (index < currentStep + 1) {
      step.classList.add("active");
    }

    if (index < currentStep) {
      step.classList.add("done");
    }
  });
}
