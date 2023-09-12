if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();

  const startButton = document.getElementById("startButton");
  const output = document.getElementById("output");

  let listening = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.textContent = "You said: " + transcript;
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
  };

  startButton.addEventListener("click", () => {
    if (listening) {
      recognition.stop();
      startButton.textContent = "Start Listening";
    } else {
      recognition.start();
      startButton.textContent = "Stop Listening";
      output.textContent = "Listening...";
    }
    listening = !listening;
  });
} else {
  console.error("Speech recognition is not supported in this browser.");
}
