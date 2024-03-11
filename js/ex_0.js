// Definierte globale Werte
let PERS1 = "Frau Höfer";
let CONTEXT =
  "Frau Höfer möchte an Jana ihre Note senden. Sie verschlüsselt ihre Nachricht. Der Schlüssel ist unklar.";
let AUFGABE = "Ändere die Nachricht so ab, dass Jana denkt, sie habe eine 6.";
let PERS2 = "Jana";

let PLAIN_TEXT = "Du hast eine 1";
let KEY = "secret";
let GOAL = "Du hast eine 6";

// Display encrypted text in container A
document.getElementById("encrypted-text").value = PLAIN_TEXT;

// Function to send text to be decrypted
function sendText() {
  let inputText = document.getElementById("input-text").value;
  document.getElementById("decrypted-text").value = inputText;
  if (inputText === GOAL) {
    // Trigger confetti animation
    go_confetti();
  }
}
