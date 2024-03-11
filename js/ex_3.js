// Definierte globale Werte
let PERS1 = "Frau Meier (Anwalt)";
let CONTEXT =
  "Frau Meier möchte Lara mitteilen, wann sie sich treffen. Sie verschlüsselt ihre Nachricht. Die Verschlüsselung ist Vigenere, aber der Schlüssel ist unklar. Aus Sicherheitsgründen senden beide Zahlen nur in Form von Text (keine Ziffern)";
let AUFGABE =
  "Ändere die Uhrzeit in der Nachricht so ab, dass Lara denkt, dass das Treffen um 3 Uhr ist (und nicht um 9). Nutze den Fakt, dass du den entschlüsselten Text kennst.";
let PERS2 = "Lara (Angeklagte)";

let PLAIN_TEXT =
  "Wir treffen uns heute um neun Uhr. Bitte bringen Sie dreihundert (!) Euro als Anzahlung mit.";
let KEY = generateRandomKey_alph(4);
let GOAL =
  "Wir treffen uns heute um drei Uhr. Bitte bringen Sie dreihundert (!) Euro als Anzahlung mit";
