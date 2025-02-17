// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const landingPage = document.getElementById("landing-page");
  const questionPage = document.getElementById("question-page");
  const finalPage = document.getElementById("final-page");

  // Show the question page when "Next" is clicked
  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", () => {
    landingPage.style.display = "none";
    questionPage.style.display = "block";
  });

  // Handle "Yes" button clicks
  const yesButton = document.getElementById("yes-button");
  const yesButton2 = document.getElementById("yes-button2");

  yesButton.addEventListener("click", showFinalPage);
  yesButton2.addEventListener("click", showFinalPage);

  function showFinalPage() {
    questionPage.style.display = "none";
    finalPage.style.display = "block";
  }

  // Handle "Inshallah" click
  const inshallahOption = document.getElementById("inshallah-option");
  inshallahOption.addEventListener("click", () => {
    alert("Inshallah means 'God willing' — I'll take that as a yes! ❤️");
    showFinalPage();
  });
});
