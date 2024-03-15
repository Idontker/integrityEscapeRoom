let description_text =
  "Eva schreibt eine Nachricht an eine Klassenkamaraden, um nach den Lösungen für die Hausaufgaben zu fragen. Dazu nutzt sie das folgende Protokoll, um sich zu authentifizieren.";
description_text +=
  "<br><b>Täusche auf Basis des Chatsverlaufs vor, in einer folgenden Nachricht Eva zu sein.</b>";

const SECRET = generateRandomKey_alph(8);
const Rand_1 = "dolphin";

let proto = [
  {
    who: "A und B",
    what: "share a secret: <i>pass</i>",
  },

  {
    who: "A --> B",
    what: '"I want to authentificate myself."',
  },
  {
    who: "B",
    what: "choose a random word: challange",
  },
  {
    who: "B --> A",
    what: '"sure, your challange is": challange',
  },
  {
    who: "A --> B",
    what: "message | encoded(challange)",
  },
  {
    who: "B",
    what: "trusts A, if and only if challange = decoded(encoded(r, challange))",
  },
];

let chat = [
  {
    left: true,
    text: "I want to authentificate myself",
    time: "7:22",
  },
  {
    left: false,
    text: "sure, your challange is:" + Rand_1,
    time: "7:22",
  },
  {
    left: true,
    text:
      "Hey Max, das Referat musst du alleine heute vortragen. Mir geht es nicht gut und ich bleibe daheim. LG Eva | " +
      encryptString(Rand_1, SECRET),
    time: "7:22",
  },
  {
    left: false,
    text: "Das ist schlecht. Warst du schon beim Arzt und hast dir ein Attest ausstellen lassen?",
    time: "7:29",
  },
];

let checker = (msg) => {
  if (!msg.indexOf("|") == -1) {
    return false;
  }
  let arr = msg.split("|");
  if (arr.length < 1) {
    return false;
  }

  let enc = arr[arr.length - 1].replace(/\s/g, "");
  let dec = decryptString(enc, SECRET);

  console.log(Rand_1);
  console.log(enc);
  console.log(dec);

  if (Rand_1 == dec) {
    return true;
  }
  return false;
};

init_auth("Auth 5: Challange Me (!)", description_text, proto, chat, checker);
