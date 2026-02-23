function generate() {
  let input = document.getElementById("scriptInput").value.trim();

  if (!input) {
    alert("Paste a script first!");
    return;
  }

  // Clean + split
  let sentences = input
    .replace(/\n/g, " ")
    .split(".")
    .map(s => s.trim())
    .filter(s => s.length > 5);

  let output = "HOOK (0–2s):\n";
  output += sentences[0] + ".\n\n";

  let maxScenes = Math.min(sentences.length - 1, 7);

  for (let i = 1; i <= maxScenes; i++) {
    output += `Scene ${i} (2s):\n${sentences[i]}.\n\n`;
  }

  output += "FINAL CTA (last 2s):\n";
  output += "Subscribe for more mind-blowing facts.";

  document.getElementById("output").value = output;

  // Open CapCut editor
  window.open("https://www.capcut.com/editor", "_blank");
}
