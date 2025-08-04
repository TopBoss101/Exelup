// =====================
// FLOATING AI BUTTON LOGIC
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const aiButton = document.getElementById("ai-button");
  const aiPopup = document.getElementById("ai-popup");
  const aiClose = document.getElementById("ai-close");
  const aiQuestion = document.getElementById("ai-question");
  const aiAnswer = document.getElementById("ai-answer");

  const challenges = {
    "Telecom": {
      question: "A telecom firm is losing customers to a competitor. What should they improve first?",
      solution: "Enhance network coverage and customer service."
    },
    "Finance": {
      question: "A bank wants to attract Gen Z customers. What is the best approach?",
      solution: "Offer mobile-first digital banking with low fees."
    },
    "Healthcare": {
      question: "A hospital wants to reduce patient wait times. What is an effective solution?",
      solution: "Implement digital check-in and appointment scheduling systems."
    },
    "Retail": {
      question: "An e-commerce site wants to increase repeat purchases. What should they focus on?",
      solution: "Personalized recommendations and loyalty rewards."
    }
  };

  aiButton.addEventListener("click", () => aiPopup.style.display = "flex");
  aiClose.addEventListener("click", () => {
    aiPopup.style.display = "none";
    aiAnswer.innerHTML = "";
    aiQuestion.innerHTML = "Click a button to start your challenge!";
  });

  window.generateChallenge = (industry) => {
    const challenge = challenges[industry];
    aiQuestion.innerHTML = `<strong>${industry} Challenge:</strong> ${challenge.question}`;
    aiAnswer.innerHTML = `<p><em>Think about your answer, then click to reveal solution:</em></p>
                          <button onclick="revealSolution('${industry}')">Show Solution</button>`;
  };

  window.revealSolution = (industry) => {
    const challenge = challenges[industry];
    aiAnswer.innerHTML = `<p><strong>Solution:</strong> ${challenge.solution}</p>
                          <p>🎉 Congratulations! You completed the challenge.</p>`;
  };

  // =====================
  // GSAP SCROLL ANIMATIONS
  // =====================
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".fade-in").forEach(el => {
    gsap.from(el, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  gsap.utils.toArray(".slide-up").forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  gsap.utils.toArray(".scale-in").forEach(el => {
    gsap.from(el, {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });
});
