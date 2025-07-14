// Confirm script is loading
console.log("✅ script.js loaded");

function summariseText() {
  const input = document.getElementById("blogInput").value.trim();

  if (input.length === 0) {
    alert("⚠️ Please paste some blog content to summarise.");
    return;
  }

  let summary = "";
  const sentences = input.match(/[^.!?]+[.!?]*/g);

  if (sentences && sentences.length > 0) {
    summary = sentences.slice(0, 3).join(" ");
  } else {
    const words = input.split(/\s+/);
    summary = words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
  }

  document.getElementById("output").value = summary;
}

function submitFeedback() {
  const feedback = document.getElementById("feedback").value.trim();

  if (feedback.length === 0) {
    alert("⚠️ Please enter some feedback before submitting.");
    return;
  }

  alert("✅ Thanks for your feedback!");
  document.getElementById("feedback").value = "";
}
