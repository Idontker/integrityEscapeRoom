let description_text =
  "Eva schreibt eine Nachricht an eine Klassenkamaraden, um nach den Lösungen für die Hausaufgaben zu fragen. Dazu nutzt sie das folgende Protokoll, um sich zu authentifizieren.";
description_text +=
  "<br><b>Täusche auf Basis des Chatsverlaufs vor, in einer folgenden Nachricht Eva zu sein.</b>";
const SECRET = "FUSSBALLTRAINER";

let proto = [
  {
    who: "A und B",
    what: "Vereinbaren ein geheimes Passwort",
  },
  {
    who: "A --> B",
    what: "Nachricht | Passwort",
  },
];

let chat = [
  {
    left: true,
    text: "Hi Max, Eva hier. Wie geht es dir? | " + SECRET,
    time: "7:22",
  },
  {
    left: false,
    text: "Hi Eva, bin top fit. Nur die Hausaufgabe hab ich nicht. <br>...",
    time: "7:29",
  },
];

let checker = (msg) => {
  if (!msg.indexOf("|") == -1) {
    return false;
  }
  let arr = msg.split("|");
  let actual = arr[arr.length - 1].replace(/\s/g, "");

  if (actual == SECRET) {
    return true;
  }
  return false;
};

init_auth(
  "Auth 2: Schlechts Protokoll",
  description_text,
  proto,
  chat,
  checker
);
