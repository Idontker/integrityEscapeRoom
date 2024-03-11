function vigenereEncrypt(plainText, key) {
  key = key.toUpperCase();
  let encryptedText = "";
  for (let i = 0; i < plainText.length; i++) {
    let plainCharCode = plainText.charCodeAt(i);
    let keyCharCode = key.charCodeAt(i % key.length) - "A".charCodeAt(0);
    let encryptedCharCode;

    if (/[a-zA-Z]/.test(plainText[i])) {
      // Für Buchstaben im Alphabet
      let isUpperCase = plainText[i] === plainText[i].toUpperCase();
      let baseCharCode = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      encryptedCharCode =
        ((plainCharCode + keyCharCode - baseCharCode) % 26) + baseCharCode;
      // console.log(
      //   "plain:",
      //   plainCharCode,
      //   "base",
      //   baseCharCode,
      //   "diff",
      //   plainCharCode - baseCharCode,
      //   "key",
      //   keyCharCode
      // );
      // console.log(
      //   "result:",
      //   encryptedCharCode,
      //   "without shift",
      //   encryptedCharCode - baseCharCode
      // );
    } else {
      // Für Nicht-Buchstaben
      encryptedCharCode = plainCharCode;
    }

    // console.log(
    //   "[ENCRYPT]: from",
    //   plainText[i],
    //   "to",
    //   String.fromCharCode(encryptedCharCode)
    // );

    encryptedText += String.fromCharCode(encryptedCharCode);
  }
  return encryptedText;
}

function vigenereDecrypt(encryptedText, key) {
  key = key.toUpperCase();

  let decryptedText = "";
  for (let i = 0; i < encryptedText.length; i++) {
    let encryptedCharCode = encryptedText.charCodeAt(i);
    let keyCharCode = key.charCodeAt(i % key.length) - "A".charCodeAt(0);

    let decryptedCharCode;

    if (/[a-zA-Z]/.test(encryptedText[i])) {
      // Für Buchstaben im Alphabet
      let isUpperCase = encryptedText[i] === encryptedText[i].toUpperCase();
      let baseCharCode = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      decryptedCharCode =
        ((encryptedCharCode - keyCharCode + 26 - baseCharCode) % 26) +
        baseCharCode;
      // console.log(
      //   "encrypt:",
      //   encryptedCharCode,
      //   "base",
      //   baseCharCode,
      //   "diff",
      //   encryptedCharCode - baseCharCode,
      //   "key",
      //   keyCharCode
      // );
      // console.log(
      //   "result:",
      //   baseCharCode,
      //   "without shift",
      //   baseCharCode - baseCharCode
      // );
    } else {
      // Für Nicht-Buchstaben
      decryptedCharCode = encryptedCharCode;
    }

    // console.log(
    //   "[DECRYPT]: from",
    //   encryptedText[i],
    //   "to",
    //   String.fromCharCode(decryptedCharCode)
    // );
    // console.log();
    // console.log();

    decryptedText += String.fromCharCode(decryptedCharCode);
  }
  return decryptedText;
}

// Global Variables
let globalPlainText = PLAIN_TEXT;
let globalKey = KEY;
let globalSolution = GOAL;

// Display encrypted text in container A
document.getElementById("encrypted-text").value = vigenereEncrypt(
  globalPlainText,
  globalKey
);

// Function to send text to be decrypted
function sendText() {
  let inputText = document.getElementById("input-text").value;
  let decryptedText = vigenereDecrypt(inputText, globalKey);
  let ele_decryptedText = document.getElementById("decrypted-text");
  if (ele_decryptedText) {
    if (ele_decryptedText.classList.contains("password")) {
      const hiddenText =
        "// hidden text \\\\ \n" + "*".repeat(decryptedText.length);
      ele_decryptedText.value = hiddenText;
    } else {
      ele_decryptedText.value = decryptedText;
    }
  }

  if (typeof custom_checker === "function") {
    console.log("custom checker detected ");
    if (custom_checker(decryptedText)) {
      go_confetti();
      go_confetti();
      go_confetti();
      go_confetti();
      go_confetti();
    }
  } else {
    if (decryptedText === globalSolution) {
      // Trigger confetti animation
      go_confetti();
    }
  }
}

// Confetti animation function
function go_confetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
