let description_text =
  "Herr Mayer spricht Laut sein Passwort mit, während er es eingibt, um sich zu authentifizieren.";
description_text +=
  "<br><b>Nutze das Passwort, um dich als Herr Mayer auszugeben:</b>";
const SECRET = "Jcu,!4FvHO33";

let proto = [
  {
    who: "A und B",
    what: "Vereinbaren ein geheimes Passwort",
  },
  {
    who: "A --> B",
    what: "Sendet das Passwort / gibt es ein.",
  },
];

let chat = [
  {
    left: true,
    text: SECRET,
    time: "9:32",
  },
];

let checker = (msg) => {
  let actual = msg.replace(/\s/g, "");
  console.log(SECRET);
  console.log(actual);
  console.log(msg);
  return actual == SECRET;
};

init_auth(
  "Auth 1: Öffentliche Passwörter",
  description_text,
  proto,
  chat,
  checker
);
