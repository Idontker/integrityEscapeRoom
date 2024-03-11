// Definierte globale Werte
let PERS1 = "Der Staat";
let CONTEXT =
  "Der Staat speichert ab, ob jemand angeklagt wurde. Du hast dir Zugang zu deinem Datensatz verschaft (dies ist illegal). Nun möchtest du die Daten abändern, sodass du im letzten Falle als nicht schuldig befunden wirst. Vor dir liegen 3 Bemerkungen. Im ersten Fall wurdest du frei gesprochen (nicht schuldig). \n(Vigenere Verschlüsselung mit Schlüssellänge 2)";
let AUFGABE =
  "Ändere die Bemerkungen so ab, dass du von der Staatsanwaltschaft freigesprochen wirst. Achtung. Der Staats sichert die Integrität nicht nur durch eine Verschlüsselung";
let PERS2 = "Der Staat (in zwei Wochen)";

let case1 =
  "Der Angeklagte wurde im Fall AZ-2024-ABC als nicht schuldig befunden.";
let case2 = "Der Angeklagte wurde im Fall AZ-9876-XYZ als schuldig befunden.";
let case3 = "Der Angeklagte wurde im Fall AZ-1234-LMN als schuldig befunden.";

let PLAIN_TEXT = case1 + case1.length + "\n";
PLAIN_TEXT += case2 + case3.length + "\n";
PLAIN_TEXT += case3 + case3.length;
let KEY = generateRandomKey_alph(2);
let GOAL =
  "Lieber Marek. Die letzte Wochen waren sehr stressig. Ich war Krank und konnte nicht in die Schule. Könntest du mir die Hausaufgabe für die letzten 2 Wochen schicken :) Danke dir Lars. Bis Montag. Sandra";

let custom_checker = (decrypted) => {
  let cases = decrypted.split("\n");
  let ret_value = true;

  cases.forEach((caseString) => {
    console.log(caseString);
    let parts = caseString.trim().split(".");
    if (parts.length === 2) {
      let caseDescription = parts[0];
      let verdict = parts[1];

      let match = caseDescription.includes("nicht schuldig");

      try {
        let expected = caseDescription.length + 1;
        let actual = parseInt(verdict);
        if (expected == actual && match) {
          ret_value = ret_value && true;
        } else {
          ret_value = ret_value && false;
        }
      } catch {
        ret_value = ret_value && false;
      }
    }
  });

  if (ret_value) {
    return true;
  }

  alert(
    "Veränderungen des Datensatzes werden erkannt. Antwort nocht nicht richtig."
  );
  return false;
};
