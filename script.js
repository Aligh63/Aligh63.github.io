// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const landingPage = document.getElementById("landing-page");
  const questionPage = document.getElementById("question-page");
  const finalPage = document.getElementById("final-page");
  const finalMessage = document.getElementById("final-message");
  const finalGif = document.getElementById("final-gif");

  // Show the question page when "Next" is clicked
  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", () => {
    landingPage.style.display = "none";
    questionPage.style.display = "block";
  });

  // Handle "Yes" and "100%" button clicks
  const yesButton = document.getElementById("yes-button");
  const yesButton2 = document.getElementById("yes-button2");

  yesButton.addEventListener("click", () => showFinalPage(true));
  yesButton2.addEventListener("click", () => showFinalPage(true));

  // Handle "Inshallah" button click
  const inshallahButton = document.getElementById("inshallah-button");
  inshallahButton.addEventListener("click", () => showFinalPage(false));

  function showFinalPage(isPositive) {
    questionPage.style.display = "none";
    finalPage.style.display = "block";

    if (isPositive) {
      finalMessage.textContent = "I LOVE YOU FOREVER ❤️";
      finalGif.src =
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTMwOGU2OWRxbnBranhhaXJ1MDR1NnVuanE1NGNhcmV1bzM3OHVycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TRN9mCyQXGcpP9j98t/giphy.gif";
    } else {
      finalMessage.textContent = "😢 I'll take that as a maybe...";
      finalGif.src = "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif"; // Crying GIF
    }
  }

  // Restart the experience
  const restartButton = document.getElementById("restart-button");
  restartButton.addEventListener("click", () => {
    finalPage.style.display = "none";
    landingPage.style.display = "block";
    finalGif.src = ""; // Clear the final GIF
  });
});
