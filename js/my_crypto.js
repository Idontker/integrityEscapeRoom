function generateRandomKey(length) {
  return CryptoJS.randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}

function generateRandomKey_alph(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const characterArray = characters.split("");
  const randomArray = new Uint32Array(length);
  window.crypto.getRandomValues(randomArray);
  let key = "";
  for (let i = 0; i < length; i++) {
    key += characterArray[randomArray[i] % characters.length];
  }
  return key;
}

function encryptString(message, key) {
  return CryptoJS.AES.encrypt(message, key).toString();

  const ciphertext = CryptoJS.AES.encrypt(message, key).toString();
  return btoa(ciphertext); // Base64 encoding
}

// Decrypt function with Base64 decoding
function decryptString(ciphertext, key) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);

  const decryptedBytes = CryptoJS.AES.decrypt(atob(ciphertext), key);
  return decryptedBytes.toString(CryptoJS.enc.Utf8);
}
