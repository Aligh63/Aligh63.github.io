// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const landingPage = document.getElementById("landing-page");
  const questionPage = document.getElementById("question-page");
  const finalPage = document.getElementById("final-page");

  // Show the question page after the GIF loads
  const loveGif = document.getElementById("love-gif");
  loveGif.onload = () => {
    setTimeout(() => {
      landingPage.style.display = "none";
      questionPage.style.display = "block";
    }, 3000); // Wait 3 seconds before showing the question
  };

  // Handle button clicks
  const yesButton = document.getElementById("yes-button");
  const yesButton2 = document.getElementById("yes-button2");

  yesButton.addEventListener("click", showFinalPage);
  yesButton2.addEventListener("click", showFinalPage);

  function showFinalPage() {
    questionPage.style.display = "none";
    finalPage.style.display = "block";
  }
});
