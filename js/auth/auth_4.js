let description_text =
  "Eva schreibt eine Nachricht an eine Klassenkamaraden, um nach den Lösungen für die Hausaufgaben zu fragen. Dazu nutzt sie das folgende Protokoll, um sich zu authentifizieren.";
description_text +=
  "<br><b>Täusche auf Basis des Chatsverlaufs vor, in einer folgenden Nachricht Eva zu sein.</b>";

const SECRET = generateRandomKey_alph(8);
const Rand_1 = "Hausschuhe";
const Rand_2 = "Regenschirm";
// console.log("so far?");
// console.log("so far?");

let proto = [
  {
    who: "A und B",
    what: "share a secret: <i>pass</i>",
  },
  {
    who: "A",
    what: "choose a random word: rand",
  },
  {
    who: "A --> B",
    what: "Nachricht | rand | encoded(pass)",
  },
  {
    who: "B",
    what: "trusts A, if and only if rand = decoded(encoded(r, pass))",
  },
];

let chat = [
  {
    left: true,
    text:
      "Hi Max, Eva hier. Wie geht es dir? | " +
      Rand_1 +
      " | " +
      encryptString(Rand_1, SECRET),
    time: "7:22",
  },
  {
    left: false,
    text: "Hi Eva, bin top fit. Und dir?",
    time: "7:29",
  },
  {
    left: true,
    text:
      "Auch gut. Wie weit bist du mit dem Referat gekommen? | " +
      Rand_2 +
      " | " +
      encryptString(Rand_2, SECRET),
    time: "7:22",
  },
  {
    left: false,
    text: "Gar nicht weit. Hab richtig. Angst vor morgen",
    time: "7:29",
  },
];

let checker = (msg) => {
  if (!msg.indexOf("|") == -1) {
    return false;
  }
  let arr = msg.split("|");
  if (arr.length < 2) {
    return false;
  }

  let r = arr[arr.length - 2].replace(/\s/g, "");
  let enc = arr[arr.length - 1].replace(/\s/g, "");
  let dec = decryptString(enc, SECRET);

  console.log(r);
  console.log(enc);
  console.log(dec);

  if (r == dec) {
    return true;
  }
  return false;
};

init_auth(
  "Auth 4: Zufall, nur richtig (?)",
  description_text,
  proto,
  chat,
  checker
);
