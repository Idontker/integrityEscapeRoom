let description_text =
  "Eva schreibt eine Nachricht an eine Klassenkamaraden, um nach den Lösungen für die Hausaufgaben zu fragen. Dazu nutzt sie das folgende Protokoll, um sich zu authentifizieren.";
description_text +=
  "<br><b>Täusche auf Basis des Chatsverlaufs vor, in einer folgenden Nachricht Eva zu sein.</b>";

const SECRET = generateRandomKey_alph(8);
const Rand_1 = "dolphin";
const Rand_2 = "relaxo";

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
    what: "message | challange | encoded(challange) | timestamp",
  },
  {
    who: "B",
    what: "trusts A, if and only if challange = decoded(encoded(r, challange)) and the current time is within the same minute as the timestamp",
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
      Rand_1 +
      "|" +
      encryptString(Rand_1, SECRET) +
      "| 7:22",
    time: "7:22",
  },
  {
    left: false,
    text: "Authentification failed - please retry",
    time: "7:23",
  },
  {
    left: true,
    text: "I want to authentificate myself",
    time: "7:24",
  },
  {
    left: false,
    text: "sure, your challange is:" + Rand_2,
    time: "7:25",
  },
  {
    left: true,
    text:
      "Hey Max, das Referat musst du alleine heute vortragen. Mir geht es nicht gut und ich bleibe daheim. LG Eva | " +
      Rand_2 +
      "|" +
      encryptString(Rand_2, SECRET) +
      "| 7:25",
    time: "7:25",
  },
  {
    left: false,
    text: "Das ist schlecht. Warst du schon beim Arzt und hast dir ein Attest ausstellen lassen?",
    time: "7:25",
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

  let r = arr[arr.length - 3].replace(/\s/g, "");
  let enc = arr[arr.length - 2].replace(/\s/g, "");
  let time = arr[arr.length - 1].replace(/\s/g, "");
  let dec = decryptString(enc, SECRET);

  console.log(r);
  console.log(enc);
  console.log(dec);

  if (r == dec && time == "15:28") {
    return true;
  }
  return false;
};

init_auth(
  "Auth 6: Time, it needs time...",
  description_text,
  proto,
  chat,
  checker
);
