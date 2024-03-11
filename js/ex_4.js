// Definierte globale Werte
let PERS1 = "Sandra";
let CONTEXT =
  "Sandra schreibt an Lars eine NichtsUp Nachricht. Die Nachricht wird mit Vigenere verschlüsselt (Schlüssel geheim).";
let AUFGABE =
  "Ändere die Nachricht so ab, dass Lars denkt, die Nachricht sei an Marek und nicht an ihn adressiert.";
let PERS2 = "Lars";

let PLAIN_TEXT =
  "Lieber Lars. Die letzte Wochen waren sehr stressig. Ich war Krank und konnte nicht in die Schule. Könntest du mir die Hausaufgabe für die letzten 2 Wochen schicken :) Danke dir Lars. Bis Montag. Sandra";
let KEY = generateRandomKey_alph(5);
let GOAL =
  "Lieber Marek. Die letzte Wochen waren sehr stressig. Ich war Krank und konnte nicht in die Schule. Könntest du mir die Hausaufgabe für die letzten 2 Wochen schicken :) Danke dir Lars. Bis Montag. Sandra";
